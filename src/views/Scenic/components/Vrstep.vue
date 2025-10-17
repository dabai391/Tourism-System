<template>
  <div class="vrviews-container">
    <img src="@/assets/img/vrtransition.png" alt="">
    <div class="step">
      <el-progress :text-inside="true" :stroke-width="20" :percentage="progress" />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const progress = ref(0)

onMounted(() => {
  // 实现进度条从0%到100%的动画效果
  const interval = setInterval(() => {
    progress.value += 1
    
    // 当进度达到100%时，清除定时器并跳转页面
    if (progress.value >= 100) {
      clearInterval(interval)
      
      // 延迟一小段时间后跳转到指定页面
      setTimeout(() => {
        // 这里可以根据需要修改跳转的目标路由
        router.push({ name: 'vrview' })
      }, 500)
    }
  }, 50) // 每50毫秒增加1%进度
})
</script>
<style lang="scss" scoped>
.vrviews-container {
  height: 100vh;
  width: 100%;
  position: relative;
  img {
    height: 100vh;
    width: 100%;
  }
  .step {
    position: absolute;
    bottom: 50px; /* 将进度条移动到图片下方 */
    left: 50%;
    transform: translateX(-50%);
    width: 80%; /* 调整进度条宽度 */
    max-width: 600px;
    z-index: 100;
  }
}
</style>