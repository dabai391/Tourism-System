<template>
  <div class="wayplan-container">
    <div class="search-panel">
      <div class="search-item">
        <div class="icon">📍</div>
        <input 
          v-model="startPlace"
          type="text" 
          placeholder="输入出发地"
          class="search-input"
        />
      </div>
      <div class="search-item">
        <div class="icon">🎯</div>
        <input 
          v-model="endPlace"
          type="text" 
          placeholder="输入目的地"
          class="search-input"
        />
      </div>
      <div class="button-group">
        <button @click="searchRoute" class="search-btn">搜索路线</button>
        <button @click="clearRoute" class="clear-btn">清除路线</button>
      </div>
    </div>
    <div id="map"></div>
    <div class="route-info" v-if="routeInfo">
      <div class="info-item">距离: {{ routeInfo.distance }}</div>
      <div class="info-item">时间: {{ routeInfo.duration }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'

// 响应式数据
const startPlace = ref('')
const endPlace = ref('')
const routeInfo = ref(null)

// 地图相关引用
let map = null
let driving = null
let geocoder = null

// 搜索路线函数
const searchRoute = async () => {
  if (!startPlace.value || !endPlace.value) {
    alert('请输入出发地和目的地')
    return
  }
  
  try {
    // 获取起终点坐标
    const startLngLat = await getLngLatByAddress(startPlace.value)
    const endLngLat = await getLngLatByAddress(endPlace.value)
    
    if (!startLngLat || !endLngLat) {
      alert('地址解析失败，请检查输入')
      return
    }
    
    // 调用驾车规划
    await planRoute(startLngLat, endLngLat)
  } catch (error) {
    console.error('路线规划失败:', error)
    alert('路线规划失败，请重试')
  }
}

// 根据地址获取经纬度
const getLngLatByAddress = (address) => {
  return new Promise((resolve, reject) => {
    // 确保地理编码器已初始化
    if (!geocoder) {
      geocoder = new window.AMap.Geocoder()
    }
    
    geocoder.getLocation(address, (status, result) => {
      if (status === 'complete' && result.info === 'OK') {
        const lngLat = result.geocodes[0].location
        console.log(`${address} 的坐标: [${lngLat.lng}, ${lngLat.lat}]`)
        resolve([lngLat.lng, lngLat.lat])
      } else {
        console.error(`地址解析失败: ${address}`, result)
        resolve(null)
      }
    })
  })
}

// 路线规划
const planRoute = (startLngLat, endLngLat) => {
  return new Promise((resolve, reject) => {
    // 确保地图已初始化
    if (!map) {
      console.error('地图未初始化')
      reject(new Error('地图未初始化'))
      return
    }
    
    // 使用plugin方式加载Driving插件
    window.AMap.plugin(['AMap.Driving'], () => {
      try {
        // 创建新的驾车实例
        const drivingInstance = new window.AMap.Driving({
          map: map,
          policy: window.AMap.DrivingPolicy.LEAST_TIME, // 最短时间策略
          showTraffic: true, // 显示路况
          hideMarkers: false // 不隐藏标记
        })
        
        // 执行搜索
        drivingInstance.search(startLngLat, endLngLat, (status, result) => {
          if (status === 'complete') {
            // 解析结果
            if (result.routes && result.routes.length > 0) {
              const route = result.routes[0]
              const distance = (route.distance / 1000).toFixed(1) + ' 公里'
              const duration = Math.ceil(route.duration / 60) + ' 分钟'
              
              routeInfo.value = {
                distance,
                duration
              }
              
              // 缩放地图到路线范围
              map.setFitView()
              
              console.log('路线规划成功:', result)
              resolve(result)
            } else {
              console.error('未找到有效路线')
              routeInfo.value = null
              alert('未找到有效路线')
              reject(new Error('未找到有效路线'))
            }
          } else {
            console.error('路线规划失败:', result)
            routeInfo.value = null
            alert(`路线规划失败: ${result.info || '未知错误'}`)
            reject(new Error('路线规划失败'))
          }
        })
      } catch (error) {
        console.error('创建驾车规划实例失败:', error)
        reject(error)
      }
    })
  })
}

// 清除路线
const clearRoute = () => {
  if (driving) {
    driving.clear()
  }
  routeInfo.value = null
}

// 组件挂载
onMounted(async () => {
  try {
    // 加载高德地图脚本
    await new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = 'https://webapi.amap.com/maps?v=2.0&key=3b4596159ce765412ef81c8f5ec50833'
      script.onload = resolve
      script.onerror = reject
      document.head.appendChild(script)
    })
    
    // 初始化地图
    map = new window.AMap.Map('map', {
      center: [100.247321, 25.603053], // 洱海坐标
      zoom: 11,
      mapStyle: 'amap://styles/normal'
    })
    
    // 添加地图控件
    window.AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.Geolocation'], function() {
      // 添加工具栏控件（包含缩放功能）
      map.addControl(new window.AMap.ToolBar({
        position: 'LT'
      }))
      
      // 添加比例尺控件
      map.addControl(new window.AMap.Scale())
      
      // 添加定位控件
      map.addControl(new window.AMap.Geolocation({
        enableHighAccuracy: true,
        timeout: 10000,
        buttonOffset: new window.AMap.Pixel(10, 20),
        zoomToAccuracy: true
      }))
    })
    
    console.log('地图初始化完成')
    
  } catch (error) {
    console.error('地图加载或初始化失败:', error)
    alert('地图加载失败，请刷新页面重试')
  }
})
</script>

<style lang="scss" scoped>
.wayplan-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

.search-panel {
  position: absolute;
  top: 20px;
  left: 20%;
  transform: translateX(-50%);
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
  width: 90%;
  max-width: 500px;
}

.search-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 0 10px;
}

.icon {
  font-size: 16px;
  margin-right: 10px;
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  padding: 12px 0;
  font-size: 14px;
}

.button-group {
  display: flex;
  gap: 10px;
}

.search-btn {
  flex: 1;
  background: #1890ff;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.3s;
  
  &:hover {
    background: #40a9ff;
  }
}

.clear-btn {
  flex: 1;
  background: #f5f5f5;
  color: #333;
  border: 1px solid #d9d9d9;
  padding: 12px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    border-color: #40a9ff;
    color: #40a9ff;
  }
}

#map {
  width: 100%;
  height: 100%;
}

.route-info {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 15px 20px;
  border-radius: 8px;
  z-index: 100;
  display: flex;
  gap: 30px;
  font-size: 14px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 5px;
}

// 响应式设计
@media (max-width: 768px) {
  .search-panel {
    width: 95%;
    padding: 15px;
  }
  
  .button-group {
    flex-direction: column;
  }
  
  .route-info {
    flex-direction: column;
    gap: 10px;
    font-size: 12px;
    padding: 10px 15px;
  }
}
</style>

