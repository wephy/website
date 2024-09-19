<template>
  <div ref="background" class="canvas"></div>
  <!-- <div class="containerControlPanel">
    <div class="control-panel">
      <div>
        Change the parameters of the simulation:
      </div>
      <div v-if="isDtHigh" class="warning-message">WARNING: UNSTABLE. Simulation speed is too high!</div>
      <div class="speed">
        Speed: {{ (dt * 250).toFixed(3) }}
        <button class="decrease-dt-button" @click="decreaseDt">-</button>
        <button class="increase-dt-button" @click="increaseDt">+</button>
      </div>
    </div>
  </div> -->
</template>

<script setup lang="ts">

// import { onMounted, ref } from 'vue';

// const canvas = ref(null);

// function animate() {
//   const ctx = canvas.value.getContext('2d');
//   let x = 0;
//   const y = 50;
//   const radius = 20;

//   function draw() {
//     ctx.clearRect(0, 0, canvas.value.width, canvas.value.height); // Clear the canvas
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0, Math.PI * 2, false); // Draw a circle
//     ctx.fillStyle = 'hsl(200, 100%, 50%)'; // Fill with a color
//     ctx.fill();
//     x += 2; // Move the circle to the right
//     if (x > canvas.value.width) {
//       x = 0; // Reset position when the circle goes off-screen
//     }
//     requestAnimationFrame(draw);
//   }
//   draw();
// }

// onMounted(() => {
//   const canvasElement = canvas.value;
//   canvasElement.width = window.innerWidth;
//   canvasElement.height = window.innerHeight;
//   animate();
// });



// const numPoints = 100000;
// const pointWidth = 4;
// const width = window.innerWidth;
// const height = window.innerHeight;

// function getRandomPastelColor() {
//     const x = Math.random();
//     let hue = 0;
//     if (x < 0.3) {
//         hue = Math.floor(x * 360);
//     }
//     else if (x < 0.6) {
//         hue = Math.floor(x * 200);
//     }
//     else {
//         hue = Math.floor((x < 0.5 ? Math.pow(x / 8, 1 / 4) : 1 - 0.5 * Math.pow(2 * (1 - x), 1 / 4)) * 360);
//     }
//     // const hue = Math.floor(y * 360);
//     const saturation = 90;
//     const lightness = Math.floor(Math.random() * 20) + 65;
//     return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
// }

</script>

<style scoped>
.canvas {
  color: #ff1824;
  transform: scale(1);
  position: fixed;
  flex: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.containerControlPanel {
  width: 100vw;
  height: 100vh;
  /* Full height of the viewport */
}


.control-panel {
  font-family: "JuliaMono-Regular";
  position: fixed;
  width: min(300px, 100vw);
  text-align: left;
  font-size: min(24px, 5vw);
  right: 0px;
  bottom: 20px;
}

.increase-dt-button,
.decrease-dt-button {
  /* position: fixed; */
  padding: 2px 10px;
  background-color: #010203;
  color: white;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

@keyframes flash {
  0% {
    opacity: 1;
  }

  40% {
    opacity: 0;
  }

  80-% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
}

.warning-message {
  pointer-events: none;
  position: fixed;
  left: 6vw;
  top: 15vh;
  color: #ff2400;
  font-size: max(5vw, 10vh);
  font-weight: 800;
  font-family: "JuliaMono-Black";
  animation: flash 1s infinite;
  /* Adjust duration and iteration as needed */
}
</style>
