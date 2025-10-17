<template>
  <el-page-header :icon="ArrowLeft" title="返回" class="header" @click="handleBack">
    <template #content>
      <span class="text-large mr-3"> 特色产品 </span>
    </template>
  </el-page-header>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="云南特产" name="first">
      <ul class="goods-list">
        <li v-for="item in 8" :key="item.id" class="goods-item">
          <!-- <img src="https://img2.baidu.com/it/u=3522225222,2825748222&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt=""> -->
          <img src="@/assets/img/ping.jpg" alt="">
          <div class="goods-info">
            <p class="goods-name">鲜花饼</p>
            <p class="goods-desc">
              以云南特有的食用玫瑰为馅，花瓣饱满，香气浓郁。外皮酥脆，层层叠叠，内馅软糯，甜而不腻。其制作工艺考究，历史悠久，早在清代就已出现，曾是宫廷御点，如今更是深受大众喜爱，是云南的代表性美食之一
            </p>
            <p class="goods-price">
              <span>参考价格：</span>
              <span>￥50.00</span>
            </p>
          </div>
        </li>
        
      </ul>
    </el-tab-pane>
    <el-tab-pane label="手工艺品" name="second">手工艺品</el-tab-pane>
    <el-tab-pane label="文创周边" name="third">文创周边</el-tab-pane>
  </el-tabs>

</template>

<script setup>
import { ref } from 'vue'
import { ArrowLeft } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const activeName = ref('first')
// 点击返回按钮，返回上一页
const handleBack = () => {
  router.back()
}
</script>
<style scoped lang="scss">
.header {
  padding: 5px 0 5px 20px;
  font-size: 20px;
}

.demo-tabs {
  width: 100%;
  max-width: 1300px;
  /* 设置最大宽度，避免内容过宽 */
  margin: 20px auto;
  /* 水平居中 */
  text-align: center;
  /* 文本内容居中 */
}

.goods-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  /* 响应式网格布局 */
  gap: 15px;
  justify-content: center;
  align-items: center;
  /* 网格项水平居中 */
  padding: 20px;
  margin: 0 auto;
  width: 100%;
  max-width: 1700px;
  /* 设置最大宽度，确保内容居中 */
}

/* 为了更好的视觉效果，为商品项添加一些样式 */
.goods-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 15px;
  border: 1px solid #e4e7ed;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.goods-item:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.goods-item img {
  width: 100%;
  max-width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 12px;
}

.goods-info {
  width: 100%;
}

.goods-name {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
}

.goods-desc {
  font-size: 12px;
  color: #666;
  margin-top: 10px;
  line-height: 1.5;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.goods-price {
  font-size: 14px;
  color: #f56c6c;
  font-weight: 500;
}

/* 为其他标签页内容添加居中样式 */
.el-tab-pane {
  padding: 20px 0;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* 调整页面标题的样式 */
.text-large {
  font-size: 18px;
}

.font-600 {
  font-weight: 600;
}

.mr-3 {
  margin-right: 12px;
}
</style>
