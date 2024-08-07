<script setup lang="ts">

<template>
  <div id="app" @mousemove="handleMouseMove">
  <div class="background-overlay"></div>
    <div class="container">
      <LeftColumn/>
      <RightColumn/>
    </div>
    <!-- Radial Circle Container -->
    <div class="radial-circle" :style="{ top: `${mouseY}px`, left: `${mouseX}px` }"></div>
  </div>
</template>

<script>
import LeftColumn from './components/LeftColumn.vue';
import RightColumn from './components/RightColumn.vue';

export default {
  name: 'App',
  components: {
    LeftColumn,
    RightColumn,
  },
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
    };
  },
  methods: {
    handleMouseMove(event) {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    },
  },
};
</script>

<style>
#app {
  position: relative;
}

.container {
  display: flex;
}

body {
  margin: 0;
  font-family: Synonym-Medium;
  color: #46598c;
  font-size: 18px;
  //background-color: #EEE7F6; /* Blue background for the entire page */
}

.radial-circle {
  position: fixed;
  pointer-events: none; /* Ensure it doesn’t block clicks */
  width: 1000px;
  height: 1000px;
  background: radial-gradient(circle, rgb(230,230,250, 50) 0%, rgb(230,230,250, 10) 5%, rgb(230,230,250, 0) 60%);
  border-radius: 50%;
  transform: translate(-50%, -50%); /* Center the circle */
  mix-blend-mode: multiply; /* Optional: blend the circle with the background */
  z-index: 1000;
}

.background-overlay {
  position: fixed; /* Ensure it covers the entire viewport */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1; /* Make sure it's below the radial circle */
  background: linear-gradient(-45deg, #eee9f4, #eeeaf3, #eee9f4, #eeeaf3);
	background-size: 100% 100%;
	animation: gradient 30s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

</style>
