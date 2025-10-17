<template>
  <div class="evaluation-header">
    <h3>洱海</h3>
    <ul>
      <li>风景推荐：</li>
      <li>用户评价:</li>
      <li>游客体验:</li>
    </ul>
    <button>写评价</button>
  </div>
  <div class="evaluation-content">
    <ul class="evaluation-list">
      <li v-for="item in evaluations" :key="item.username">
        <div class="evaluation-item">
          <div class="user-info">
            <img :src="item.avatar" alt="用户头像" class="avatar">
            <span class="username">{{ item.username }}</span>
            <div class="rating">评分：{{ item.rating }}</div>
          </div>
          <p class="comment">{{ item.comment }}</p>
          <span class="time">{{ item.time }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const evaluations = ref([
  {
    username: '旅行者小A',
    avatar: 'https://randomuser.me/api/portraits/women/42.jpg',
    rating: 5,
    comment: '洱海的风景真的太美了，湖水清澈见底，蓝天白云倒映在水中，宛如仙境一般。强烈推荐大家来这里旅游！',
    time: '2024-05-15'
  },
  {
    username: '摄影爱好者小张',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    comment: '作为一个摄影爱好者，洱海给了我无数创作灵感。日出日落时分的光线特别美，拍出的照片都不用怎么后期处理。',
    time: '2024-05-10'
  },
  {
    username: '背包客小李',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 4,
    comment: '环湖骑行是一种很棒的体验，沿途风景如画。不过旅游旺季人有点多，建议错峰出行。',
    time: '2024-05-05'
  },
  {
    username: '文化探索者王先生',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    rating: 5,
    comment: '除了自然风光，洱海周边的白族文化也很有特色。当地的民宿很有味道，推荐大家小住几天慢慢感受。',
    time: '2024-04-28'
  },
  {
    username: '美食爱好者小陈',
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
    rating: 4,
    comment: '洱海边的美食也很值得品尝，特别是当地的酸辣鱼和乳扇。湖水很干净，环境维护得很好。',
    time: '2024-04-20'
  }
])
</script>
<style lang="scss" scoped>
 .evaluation-header {
  position: sticky;
  top: 0;
  z-index: 1000; // 确保导航栏在最上层
  width: 100%;
  height: 15vh;
  border-bottom: 1px solid #ece3e3;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: #2494ea;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 120px;
  padding: 0 10px;
  h3{
    font-size: 24px;
    font-weight: 600;
    color: #333;
  }
  button{
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    background-color: #4397dc;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all .5s ease-in-out;
    &:hover{
      background-color: #309ce9;
    }
  }
}
 .evaluation-content {
  margin-top: 15px;
  .evaluation-list {
    padding: 0 10px;
    li{
      background-color: rgb(249, 249, 249);
      padding: 10px;
      margin: 30px auto;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      transition: all .5s ease-in-out;
      &:hover{
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        transform: translateY(-5px);
      }
      .user-info{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 20px;
        margin-bottom: 5px;
        .avatar{
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 10px;
        }
        .username{
          font-size: 18px;
          font-weight: 600;
          color: #333;
        }
        .rating{
          font-size: 16px;
          color: #34a7e5;
        }
      }
    }

  }
 }


</style>
