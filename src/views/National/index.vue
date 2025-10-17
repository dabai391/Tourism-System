<template>
  <div class="national-container">
    <div class="bg"></div>
    <div class="content">
      <div class="clothes common" @click="handleClothes()">
        <i class="el-icon-clothes"></i>
        <h3>民族服饰</h3>
        <img src="@/assets/img/clothes.png" alt="">
        <div class="brief">
          <p>民族服饰是指根据不同的民族或文化背景，设计和生产的服饰。</p>
        </div>
      </div>
      <div class="festival common" @click="handleFestival()">
        <h3>民族节日</h3>
        <img src="@/assets/img/festival.png" alt="">
        <div class="brief">
          <p>民族节日是指根据不同的民族或文化背景，在特定的时间和日期上，为了表达民族的身份、文化和传统，而组织和庆祝的活动。</p>
        </div>
      </div>
      <div class="perform common" @click="handlePerform()">     
        <h3>民族表演</h3>
        <img src="@/assets/img/perform.png" alt="">
        <div class="brief">
          <p>民族表演是指根据不同的民族或文化背景，在特定的时间和地点上，为了表达民族的身份、文化和传统，而组织和表演的活动。</p>
        </div>
      </div>
      <div class="history common" @click="handleHistory()">
        <h3>民族历史</h3>
        <img src="@/assets/img/history.png" alt="">
        <div class="brief">
          <p>民族历史是指某个民族或文化背景的人在历史上的活动、事件和人物。</p>
        </div>
      </div>
    </div>

  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleClothes = () => {
  router.push({ name: 'clothes' })
}
const handleFestival = () => {
  router.push({ name: 'festival' })
}
const handlePerform = () => {
  router.push({ name: 'perform' })
}
const handleHistory = () => {
  router.push({ name: 'history' })
}
</script>
<style scoped lang="scss">
.national-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.bg {
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/img/national.png');
  background-size: cover;
}
.content{
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
.common {
  width: 306px;
  height: 306px;
  background-color: rgba(255, 255, 255);
  border-radius:50%;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  h3{
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  img{
    width: 100%;
    height: 120px;
    margin-bottom: 10px;
    //图片左上角超出部分隐藏
    border-radius: 50% 50% 0 0;
  }
  .brief{
    font-size: 14px;
    line-height: 21px;
  }
}



</style>
