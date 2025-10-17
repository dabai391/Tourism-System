<template>
  <div class="home-container">
    <!-- 首页背景图和标题区域 -->
    <div class="hero-section">
      <div class="hero-content">
        <h1>发现云南之美，体验多彩民族文化</h1>
        <p>探索云南各地的壮丽景色和独特文化，开启一段难忘的旅程</p>
        <el-button type="primary" size="large" class="hero-button">立即体验</el-button>
      </div>
    </div>

    <!-- 功能卡片区域 -->
    <div class="feature-cards">
      <div class="card">
        <div class="card-icon">
          <el-icon>
            <location />
          </el-icon>
        </div>
        <div class="card-title">旅游胜地</div>
        <div class="card-desc">探索云南各地著名景点</div>
      </div>
      <div class="card">
        <div class="card-icon">
          <el-icon>
            <avatar />
          </el-icon>
        </div>
        <div class="card-title">人文特色</div>
        <div class="card-desc">了解少数民族文化风情</div>
      </div>
      <div class="card">
        <div class="card-icon">
          <el-icon>
            <camera />
          </el-icon>
        </div>
        <div class="card-title">民族风情</div>
        <div class="card-desc">体验多彩民族文化活动</div>
      </div>
      <div class="card">
        <div class="card-icon">
          <el-icon>
            <food />
          </el-icon>
        </div>
        <div class="card-title">美食体验</div>
        <div class="card-desc">品尝云南特色美食佳肴</div>
      </div>
    </div>
   
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { Location, Avatar, Camera, Food } from '@element-plus/icons-vue'
</script>
<style scoped lang="scss">
.home-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

// 首页背景图区域
.hero-section {
  width: 100%;
  height: 100vh;
  background: url('@/assets/img/home.png') no-repeat center center;
  background-size: cover;
  position: relative;
  margin: 0;
  padding: 0;
  z-index: 1;
}

// 背景图遮罩
.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
}

// 标题内容
.hero-content {
  text-align: center;
  color: white;
  z-index: 3;
  position: absolute;
  top: 50%;
  left:5%;
  transform: translateY(-50%);
  padding: 0 20px;
  max-width: 1000px;
  margin: 0 auto;
}
 // 标题内容样式
 .hero-content h1 {
   font-size: 48px;
   font-weight: 600;
   margin-bottom: 20px;
   line-height: 1.2;
   color: rgba(255, 255, 255, 0.7);
 }

 .hero-content p {
   font-size: 18px;
   margin-bottom: 30px;
   line-height: 1.5;
 }

 .hero-button {
   font-size: 18px;
   padding: 12px 36px;
   border-radius: 4px;
   background-color: #409eff;
   border: none;
   transition: all 0.3s;
 }

 .hero-button:hover {
   background-color: #66b1ff;
   transform: translateY(-2px);
 }

// 功能卡片区域
.feature-cards {
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 30px 20px;
  max-width: 1000px;
  margin: 0 auto;
  position: absolute;
  top:80%;
  left: 60%;
  transform: translate(-50%, -50%);
  z-index: 3;
}

.card {
  background-color: white;
  border-radius: 8px;
  padding: 30px 20px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  width: 220px;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.card-icon {
  font-size: 48px;
  color: #409eff;
  margin-bottom: 20px;
}

.card-title {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.card-desc {
  font-size: 14px;
  color: #666;
}

// 响应式设计
@media (max-width: 1024px) {
  .feature-cards {
    flex-wrap: wrap;
  }
  
  .card {
    width: calc(50% - 15px);
    margin-bottom: 20px;
  }
  
  .hero-content h1 {
    font-size: 36px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    height: 60vh;
  }
  
  .feature-cards {
    flex-direction: column;
    align-items: center;
  }
  
  .card {
    width: 100%;
    max-width: 300px;
  }
  
  // 标题内容样式
  .hero-content h1 {
    font-size: 48px;
    font-weight: 600;
    margin-bottom: 20px;
    line-height: 1.2;
    color: #fff;
  }
  
  .hero-content p {
    font-size: 18px;
    margin-bottom: 30px;
    line-height: 1.5;
  }
  
  .hero-button {
    font-size: 18px;
    padding: 12px 36px;
    border-radius: 4px;
    background-color: #409eff;
    border: none;
    transition: all 0.3s;
  }
  
  .hero-button:hover {
    background-color: #66b1ff;
    transform: translateY(-2px);
  }
}
</style>
