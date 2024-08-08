<script setup lang="ts">
</script>

<template>
  <div id="app" @mousemove="handleMouseMove">
    <div class="mouse-overlay1" :style="overlayStyle"></div>
    <div class="mouse-overlay2" :style="overlayStyle"></div>

    <div class="background"></div>
    <div class="container">
      <LeftColumn />
      <RightColumn />
    </div>
  </div>
</template>

<script lang="ts">
import LeftColumn from './components/LeftColumn.vue';
import RightColumn from './components/RightColumn.vue';


export default {
  components: {
    LeftColumn,
    RightColumn,
  },
  data() {
    return {
      mouseX: 0,
      mouseY: 0
    };
  },
  computed: {
    overlayStyle() {
      return {
        left: `${this.mouseX}px`,
        top: `${this.mouseY}px`,
        transform: 'translate(-50%, -50%)'
      };
    }
  },
  methods: {
    handleMouseMove(event: MouseEvent) {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    }
  },
  mounted() {
    window.addEventListener('mousemove', this.handleMouseMove);
  },
  beforeUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
  }
};

</script>

<style>
#app {
  display: flex;
  justify-content: center;
  /* Center horizontally */
  align-items: flex-start;
  /* Align items at the top */
  min-height: 100vh;
  /* Full viewport height */
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* Center columns horizontally */
  width: 100%;
  box-sizing: border-box;
}

html,
body {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Absans;
  color: #191a25;
  font-size: 20px;
}

.left-column {
  margin-right: calc(max(min(800px, (100vw / 2)), 600px));
  text-align: left;
  position: fixed;
  top: 0;
  width: 350px;
  /* Adjust width as needed */
  height: 100%;
  /* Full viewport height */
  background: transparent;
  padding: 20px;
  overflow: hidden;
  /* Handle overflow if needed */
  margin-top: 50px;
  margin-left: 40px;
  z-index: 1;
}

.right-column {
  text-align: left;
  flex: 2;
  /* Takes up more space than left column */
  background: transparent;
  /* Transparent background */
  margin-top: 40px;
  margin-left: 400px;
  text-align: left;
  width: 450px;
  z-index: 1;
}

/* Responsive Styles */
@media (max-width: 1000px) {
  .container {
    flex-direction: column;
    align-items: center;
  }

  .left-column {
    margin-top: -60px;
    position: relative;
    /* Reset positioning for narrow screens */
    width: 100%;
    height: auto;
    /* Allow height to be auto-adjusted */
    margin-right: 0px;
    margin-left: -30px;
    max-width: 500px;
  }

  .right-column {
    margin-left: 0px;
    margin-right: 0px;
    width: 100%;
    max-width: 500px;
    margin-top: 50px;
    /* Space between stacked columns */
  }
}


.mouse-overlay1 {
  position: fixed;
  pointer-events: none;
  width: 1500px;
  height: 1500px;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(255, 206, 8, 0.3), transparent);
  mask-image: radial-gradient(circle, black, transparent 40%);
  mix-blend-mode: multiply;
}


.mouse-overlay2 {
  position: fixed;
  pointer-events: none;
  width: 1000px;
  height: 1000px;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(244, 185, 9, 0.3), transparent);
  mask-image: radial-gradient(circle, black, transparent 40%);
  mix-blend-mode: multiply;
}

.background {
  position: fixed;
  /* Ensure it covers the entire viewport */
  top: -100%;
  left: -100%;
  width: 300%;
  height: 300%;
  z-index: -2;
  /* Make sure it's below the radial circle */
  background: #f9f3db;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 70%;
  }

  100% {
    background-position: 0% 20%;
  }
}
</style>
