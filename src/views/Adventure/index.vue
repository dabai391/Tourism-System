<template>
  <div class="adventure-container">
    <ul class="adventure-content">
      <li v-for="(item, index) in 4" :key="index">
        <img src="@/assets/img/piaoliu.png" alt="">
        <h3>徒步登山</h3>
        <!-- //图标循环渲染 -->
        <i v-for="(item, index) in 5" :key="index" class="iconfont icon-wujiaoxing-"></i>
        <i class="iconfont icon-liulan"></i>
        <i class="iconfont icon-liuyan"></i>
        <p>徒步登山是一种非常有趣的探险活动。在徒步登山中，我们可以欣赏到各种不同的风景，例如山脉、森林、河流等。</p>
      </li>
    </ul>
    <div class="ranking">
      <h3>热门探险路线</h3>
      <el-table :data="tableData" stripe highlight-current-row>
        <el-table-column fixed prop="rank" label="排行" />
        <el-table-column prop="name" label="路线名称" />
      </el-table>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const tableData = [
  {
    rank: '1',
    name: '徒步登山',
  },
  {
    rank: '2',
    name: '骑行骑行',
  },
  {
    rank: '3',
    name: '徒步登山',
  },
  {
    rank: '4',
    name: '徒步登山',
  },
]
</script>
<style scoped lang="scss">
.adventure-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.adventure-content {
  width: 70%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  li {
    width: 400px;
    border: 1px solid #ccc;
    box-shadow: 0 0 20px rgba(203, 222, 247, 0.955);
    border-radius: 10px;
    padding: 20px;
    background: rgba(81, 198, 247, 0.8);
    color: #fff;
    text-shadow: 0 0 10px #000;

    img {
      width: 100%;
      height: 280px;
      border-radius: 10px;
      margin-bottom: 20px;
    }

    h3 {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 10px;
      color: #fff;
    }

    .icon-wujiaoxing- {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
      margin-right: 5px;
      color: rgb(234, 149, 24);
    }
  
    .icon-liulan,
    .icon-liuyan {
      font-size: 20px;
      margin-left: 20px;
    }
    p {
      font-size: 16px;
      line-height: 1.5;
      text-indent: 2em;
    }
  }
}

.ranking {
  width: 30%;
  margin: 0 auto;

  h3 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
  }
}
</style>
