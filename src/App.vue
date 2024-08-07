<script setup lang="ts">
</script>

<template>
  <div id="app" @mousemove="handleMouseMove">
    <div class="mouse-overlay" :style="overlayStyle"></div>
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

.container {
  display: flex;
}

body {
  margin: 0;
  font-family: Synonym-Medium;
  color: #46598c;
  font-size: 18px;
}

.mouse-overlay {
  position: fixed;
  pointer-events: none; /* Ensure it doesn’t block clicks */
  width: 1000px;
  height: 1000px;
  background: radial-gradient(circle, rgb(230,230,250, 50) 0%, rgb(230,230,250, 10) 5%, rgb(230,230,250, 0) 60%);
  border-radius: 50%;
  transform: translate(-50%, -50%); /* Center the circle */
  mix-blend-mode: multiply; /* Optional: blend the circle with the background */
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

.left-column {
  flex: 1; /* Takes up as much space as needed */
  background: transparent; /* Transparent background */
  padding: 20px;
  border-right: 1px solid #ddd; /* Optional border for separation */
  text-align: left;
  max-width: 400px;
  min-width: 400px;
}

.right-column {
  flex: 2; /* Takes up more space than left column */
  background: transparent; /* Transparent background */
  padding: 20px;
  margin-top: 50px;
  max-width: 600px;
  background-color: transparent; /* Make the right column transparent */
  text-align: left;
}

/* Responsive Styles */
@media (max-width: 1100px) {
  .container {
    flex-direction: column;
  }

  .left-column {
    border-right: none; /* Remove border when columns are stacked */
    border-bottom: 1px solid #ddd; /* Add border at the bottom for separation */
  }

  .right-column {
    margin-top: 20px; /* Space between stacked columns */
  }
}

</style>
