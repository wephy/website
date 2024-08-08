<script setup lang="ts">
</script>

<template>
  <div id="app" @mousemove="handleMouseMove">
    <div class="mouse-overlay" :style="overlayStyle"></div>
    <div class="backup-background"></div>
    <div class="background-overlay"></div>
    <div class="container">
      <LeftColumn/>
      <RightColumn/>
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
  justify-content: center; /* Center horizontally */
  align-items: flex-start; /* Align items at the top */
  min-height: 100vh; /* Full viewport height */
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: center; /* Center columns horizontally */
  width: 100%;
  box-sizing: border-box;
}

html, body {
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
  width: 350px; /* Adjust width as needed */
  height: 100%; /* Full viewport height */
  background: transparent;
  padding: 20px;
  overflow: hidden; /* Handle overflow if needed */
  z-index: 1; /* Ensure it's on top */
  margin-top: 55px;
  margin-left: 40px;
}

.right-column {
  text-align: left;
  flex: 2; /* Takes up more space than left column */
  background: transparent; /* Transparent background */
  padding: 20px;
  margin-top: 30px;
  margin-left: 320px;
  background-color: transparent; /* Make the right column transparent */
  text-align: left;
  width: 550px;
}

/* Responsive Styles */
@media (max-width: 950px) {
  .container {
    flex-direction: column;
    align-items: center; 
  }

  .left-column {
    margin-top: -60px;
    position: relative; /* Reset positioning for narrow screens */
    width: 100%;
    height: auto; /* Allow height to be auto-adjusted */
    margin-right: 0px;
    margin-left: -30px;
    max-width: 500px;
  }

  .right-column {
    margin-left: 0px;
    margin-right: 0px;
    width: 100%;
    max-width: 500px;
    margin-top: 50px; /* Space between stacked columns */
  }
}


.mouse-overlay {
  position: fixed;
  pointer-events: none; /* Ensure it doesn’t block clicks */
  width: 1000px;
  height: 1000px;
  background: radial-gradient(circle, rgb(255,217,128,50) 0%, rgb(255,217,128, 10) 5%, rgb(255,217,128, 0) 60%);
  border-radius: 50%;
  transform: translate(-50%, -50%); /* Center the circle */
  mix-blend-mode: multiply; /* Optional: blend the circle with the background */
}

.background-overlay {
  position: fixed; /* Ensure it covers the entire viewport */
  top: -50vw;
  left: -50vh;
  width: 200vw;
  height: 200vh;
  z-index: -2; /* Make sure it's below the radial circle */
  background: #f9f3db;
	background-size: 200% 200%;
}

.background-overlay {
  position: fixed; /* Ensure it covers the entire viewport */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1; /* Make sure it's below the radial circle */
  background: linear-gradient(-45deg, #ffdfd4, #f9f3db, #ffefd5, #fff8e7, #f0ead6);
	background-size: 200% 200%;
	animation: gradient 10s ease infinite;
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
