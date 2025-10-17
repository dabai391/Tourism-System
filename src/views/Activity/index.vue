<template>
  <div class="activity-container">
    <div class="bg"></div>
    <ul class="activity-content">
      <li v-for="(item, index) in 4" :key="index">
        <div class="border">
          <i class="iconfont icon-minzu"></i>
          <h3>非遗体验</h3>
          <img src="@/assets/img/feiyi.png" alt="">
          <p>非遗体验是一种传统的文化活动，通过展示和讲解传统的非遗技艺，传承和保护传统的文化遗产。</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from 'vue'

</script>
<style scoped lang="scss">
.activity-container {
  width: 100%;
  height: 100vh;
  position: relative;
  .bg{
    width: 100%;
    height: 100vh;
    background: url('@/assets/img/R-C.jpg') no-repeat center center;
    background-size: cover;
  }
  .activity-content {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap:10px;
  }
  li {
    width: 400px;
    // height: 200px;
    background: rgba(255, 255, 255, 0.8);
    padding: 20px;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 20px;
    .border{
      position: relative;
      /* 使用不同的border-image实现新的虚线边框样式 */
      border: 2px dashed gray;
      border-radius: 10px;
      // background: rgba(255, 255, 255, 0.8);
      padding: 20px;
      .icon-minzu{
        position: absolute;
        top: 15px;
        left: 33px;
       font-size: 30px;
       color: #000;
      }
      img{
        width: 100%;
        height: 200px;
        margin-bottom: 10px;
        border-radius: 10px;
      }
      h3{
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 10px;
        text-align: center;
      }
      p{
        font-size: 16px;
        line-height: 1.5;
        text-indent: 2em;
        color: #333;
      }
    }
  }

}

</style>
