<template>
  <div class="seasons-container">
    <div class="bg"></div>
    <ul class="season-content">
      <li class="spring">
        <div class="spring-item">
          <img src="@/assets/img/spring.jpg" alt="">
          <h3>春季赏花</h3>
          <div class="desc">
            <p>春季是一个非常重要的季节，也是一个非常重要的时间。在春季，我们可以欣赏到各种不同的花卉，例如玫瑰、郁金香、向日葵等。</p>
          </div>
        </div>
      </li>
      <li class="summer">
        <div class="summer-item">
          <img src="@/assets/img/summer.jpg" alt="">    
          <h3>夏季避暑</h3>
          <div class="desc">
            <p>夏季是一个非常重要的季节，也是一个非常重要的时间。在夏季，我们可以欣赏到各种不同的花卉，例如玫瑰、郁金香、向日葵等。</p>
          </div>  
        </div>
      </li>
      <li class="autumn">
        <div class="autumn-item">
          <img src="@/assets/img/fall.jpg" alt="">
          <h3>秋季丰收</h3>
          <div class="desc">
            <p>秋季是一个非常重要的季节，也是一个非常重要的时间。在秋季，我们可以欣赏到各种不同的花卉，例如玫瑰、郁金香、向日葵等。</p>
          </div>
        </div>
      </li>
      <li class="winter">
        <div class="winter-item">
          <img src="@/assets/img/winter.jpg" alt="">
          <h3>冬季温泉</h3>
          <div class="desc">
            <p>冬季是一个非常重要的季节，也是一个非常重要的时间。在冬季，我们可以欣赏到各种不同的花卉，例如玫瑰、郁金香、向日葵等。</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from 'vue'

</script>
<style scoped lang="scss">
.seasons-container{
  width: 100%;
  height: 100vh;
  position: relative;
  .bg{
    width: 100%;
    height: 80%;
    background: url('@/assets/img/seasonbg.png') no-repeat center center/cover;
  } 
  .season-content{
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%,-50%);
   max-width: 100%;
   display: grid;
   grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
   justify-content: space-between;
   gap:10px;
    li{
      width: 300px;
      // height: 45%;
      border-radius: 15px;
      background-color: pink;
      padding: 10px;
      div{
        background: #fff; 
        padding: 10px;
        border-radius: 15px;
      }
      img{
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 15px;
      }
      h3{
        font-size: 20px;
        font-weight: bold;
        margin-top: 15px;
        margin-left: 5px;
      }
      .desc{
        margin-top: -13px;
        p{
          font-size: 16px;
          line-height: 1.5;
          text-indent: 2em;
        }
      }
    }
  }
}

</style>
