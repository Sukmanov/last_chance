<script>
  import {ElProgress, ElButton, ElIcon, ElButtonGroup} from "element-plus";
  import {ArrowLeft, ArrowLeftBold, ArrowRight, ArrowRightBold} from '@element-plus/icons-vue'

  export default {
    name: 'achievement',
    components: {
      ArrowRightBold,
      ArrowLeftBold,
      ArrowLeft,
      ArrowRight,
      ElProgress,
      ElButton,
      ElIcon,
      ElButtonGroup,
    },

    props: {
      achievement: null
    },
    data() {
      return {
        progress: 0,
        step: 100 / this.achievement.goal
      }
    },
    methods: {
      increaseProgress() {
        if (this.progress < 100) {
          this.progress += this.step
          if (this.progress > 100) {
            this.progress = 100;
          }
        }
      },
      decreaseProgress() {
        if (this.progress > 0) {
          this.progress -= this.step
          if (this.progress < 0) {
            this.progress = 0;
          }
        }
      },
      formatPercentage(percentage) {
        return percentage.toFixed(2) + '%';
      },
      customColorMethod (percentage) {
        if (percentage < 30) {
          return '#909399'
        }
        if (percentage < 70) {
          return '#e6a23c'
        }
        return '#67c23a'
      }
    }
  }


</script>

<template>
  <div class="achievement">
    <span id="achievement-name">{{this.achievement?.task}}</span>
    <p id="achievement-text">Опыт: {{this.achievement?.experience}}</p>

    <div id="progress-container">
      <el-progress
          :percentage="progress"
          :text-inside="true"
          :stroke-width="26"
          :color="customColorMethod"
          :format="formatPercentage"
          striped
          striped-flow
          id="progress-bar"
      ></el-progress>

      <div class="buttons-container">
        <el-button-group class="buttons">
          <el-button @click="decreaseProgress" id="button-progress" text-button="-">
            <el-icon id="icon-arrow"><ArrowLeftBold /></el-icon>
          </el-button>
          <el-button @click="increaseProgress" id="button-progress">
            <el-icon id="icon-arrow"><ArrowRightBold /></el-icon>
          </el-button>
        </el-button-group>
      </div>

    </div>

  </div>
</template>

<style>
#progress-container {
  margin: auto;
}

#progress-bar {
  justify-content: center;
  margin: auto;
  min-width: 150px;
  max-width: 150px;
  color: #FFB800;
}

#icon-arrow {
  fill: #FFB800;
  color: #FFB800;
}

.buttons-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 15px;
}

.buttons {
  display: flex;
}

#button-progress {
  width: 40px;
  height: 40px;
  background-color: black;
}

.achievement {
  display: flex;
  max-width: 180px;
  min-width: 180px;
  max-height: 200px;
  min-height: 200px;
  margin: 0 auto 30px;
  border: 1px solid white;
  border-radius: 20px;
  box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.5);
  padding: 20px 20px 20px 20px;
  flex-direction: column;
}

#achievement-name {
  font-size: 18px;
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  color: white;
}

#achievement-text {
  font-size: 20px;
  font-weight: 200;
  font-family: "Rubik", sans-serif;
  color: white;
}

</style>