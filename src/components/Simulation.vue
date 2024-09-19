<template>
    <div id="simulation">
        <canvas ref="canvas"></canvas>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const canvasRef = ref<HTMLCanvasElement | null>(null);
const gridSize = 50; // Size of each square in pixels

const diffusionSimulation = (ctx: CanvasRenderingContext2D) => {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;

    // Initialize the grid with some values (e.g., colors)
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const index = (x + y * width) * 4;
            data[index] = 255; // Red
            data[index + 1] = 255; // Green
            data[index + 2] = 255; // Blue
            data[index + 3] = 255; // Alpha
        }
    }
    ctx.putImageData(imageData, 0, 0);

    // Implement your diffusion simulation update here
    // Example: Adjust color values based on diffusion logic
};

const updateCanvasSize = () => {
    const canvas = canvasRef.value;
    if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
            const numRows = Math.floor(window.innerHeight / gridSize);
            const numCols = Math.floor(window.innerWidth / gridSize);
            canvas.width = numCols * gridSize;
            canvas.height = numRows * gridSize;
            diffusionSimulation(ctx);
        }
    }
};

onMounted(() => {
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const canvas = canvasRef.value;
    if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
            const update = () => {
                diffusionSimulation(ctx);
                requestAnimationFrame(update);
            };
            update();
        }
    }
});

onUnmounted(() => {
    window.removeEventListener('resize', updateCanvasSize);
});
</script>

<style scoped>
#simulation {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

canvas {
    display: block;
    /* Ensures no extra space around the canvas */
}
</style>