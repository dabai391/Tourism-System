<template>
  <div class="clothes-container">
    <div class="iconfont" @click="handleBackClick"> <i class="iconfont icon-fanhui2"></i></div>
    <div class="title">
      <h1>服装展示</h1>
    </div>
    
    <!-- 选中的图片居中显示区域 -->
    <div class="selected-display" v-if="selectedCloth">
      <div class="selected-content">
        <img :src="selectedCloth.imgurl" :alt="selectedCloth.alt" class="selected-image">
        <div class="selected-desc">
          {{ selectedCloth.desc }}
        </div>
      </div>
    </div>
    
    <!-- 底部缩略图列表 -->
    <ul class="clothes-list">
      <li v-for="cloth in clothes" :key="cloth.id" @click="selectCloth(cloth)">
        <img :src="cloth.imgurl" :alt="cloth.alt" :class="{'cloth-thumbnail': cloth.id !== selectedCloth?.id}">
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import clothes1 from '@/assets/img/clothes1.png'
import clothes2 from '@/assets/img/clothes2.png'
import clothes3 from '@/assets/img/clothes3.png'
import clothes4 from '@/assets/img/clothes4.png'
import clothes5 from '@/assets/img/clothes5.png'
import { useRouter } from 'vue-router'
const router = useRouter()

// 服装数据列表
const clothes = ref([
  {    
    id: 1,
    imgurl: clothes1,
    alt: '服装1',
    desc: '苗族服饰：以银饰和刺绣著称，女性头戴华丽银冠，项圈、手镯等银饰璀璨，上衣交领右衽，下着多层百褶裙，裙身绣有花鸟纹样，整体色彩明快绚丽。'
  },
  {
    id: 2,
    imgurl: clothes2,
    alt: '服装2',
    desc: 
    '白族服饰：女性以白色为基调，外罩浅蓝色或粉色领褂，下着白色长裤，头饰为 "风花雪月" 帽，垂下的穗子象征下关风，花饰象征上关花，洁白帽顶象征苍山雪，弯弯造型象征洱海月，清新秀丽。'
  },
  {
    id: 3,
    imgurl: clothes3,
    alt: '服装3',
    desc: '哈尼族服饰：女性上衣为无领右衽短衣，衣襟、袖口绣有几何图案，下着深色长裙，头戴圆顶帽或包头巾，配饰多为银链、彩珠，色彩对比鲜明。'
  },
  {
    id: 4,
    imgurl: clothes4,
    alt: '服装4',
    desc: '彝族服饰：女性以黑色、红色为主色调，上衣绣有日月星辰等传统图案，头戴绣花头帕，佩戴银饰，下着百褶裙；男性穿黑色窄袖右衽长衫，系腰带，披黑色披毡，整体庄重典雅。'
  },
  {
    id: 5,
    imgurl: clothes5,
    alt: '服装5',
    desc: '傣族服饰：女性为窄袖短上衣和长筒裙，面料轻薄透气，颜色多为红、黄、绿等鲜艳色彩，上衣紧身显身材，筒裙长及脚踝，裙摆有精致花纹，整体轻盈飘逸。'
  }
])
// 选中的服装数据
const selectedCloth = ref(clothes.value[0])
// 选择服装函数
const selectCloth = (cloth) => {
  selectedCloth.value = cloth
}
// 返回上一页函数
const handleBackClick = () => {
  router.back()
}
</script>
<style scoped lang="scss">
.clothes-container {
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: rgb(53, 167, 238);
  
  .iconfont {
    position: absolute;
    top: 5px;
    left: 10px;
    font-size: 30px;
    color: #fff;
    z-index: 10;
  }
  
  .title {
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
    color: #fff;
    z-index: 10;
  }
  
  /* 选中的图片居中显示区域 */
  .selected-display {
    position: absolute;
    top: 40%;
    left: 60%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
  }
  
  .selected-content {
    display: flex;
    align-items: center;
    gap: 30px;
    width: 100%;
    max-width: 1000px;
   
  }
  
  .selected-image {
    width: 350px;
    height: 350px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    border: 5px solid white;
    transition: transform 0.3s ease;
    &:hover {
        transform: translateY(-5px);
      }
  }
  
  .selected-desc {
    flex: 1;
    max-width: 250px;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 10px;
    font-size: 16px;
    color: #333;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    height: 350px;
    display: flex;
    align-items: center;
    transition: transform 0.3s ease;
    &:hover {
        transform: translateY(-5px);
      }
  }
  
  /* 底部缩略图列表 */
  .clothes-list {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    z-index: 10;
  }
  
  .clothes-list li {
    cursor: pointer;
    transition: transform 0.3s ease;
    border: 3px solid transparent;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .clothes-list li:hover {
    transform: translateY(-5px);
    border-color: white;
  }
  
  .clothes-list img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    display: block;
  }
  .cloth-thumbnail {
    filter: blur(1.5px);
  }
  /* 响应式设计 */
  @media (max-width: 768px) {
    .selected-content {
      flex-direction: column;
      gap: 20px;
    }
    
    .selected-image {
      width: 250px;
      height: 250px;
    }
    
    .selected-desc {
      width: 250px;
      height: auto;
      font-size: 14px;
    }
    
    .clothes-list img {
      width: 80px;
      height: 80px;
    }
  }
}
</style>
