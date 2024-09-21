<script setup lang="ts">
</script>


<template>
    <canvas id="tmp_canvas" width="400" height="400"></canvas>
</template>

<script>
export default {
    inject: ['provider'],

    data() {
        return {
            canvasWidth: 400,
            canvasHeight: 400,
            u: null,
            imageData: null,
            animationId: null,
            lastFrameTime: 0,
            frameDuration: 1000 / 5, // Target 60 FPS
        };
    },

    mounted() {
        this.initializeCanvas();
        this.animate(); // Start the animation
    },

    beforeDestroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    },

    methods: {
        initializeCanvas() {
            this.u = Array.from({ length: this.canvasWidth }, () => Array(this.canvasHeight).fill(0));
            const tmp_canvas = document.getElementById("tmp_canvas");
            const tmp_ctx = tmp_canvas.getContext("2d");
            this.imageData = tmp_ctx.createImageData(this.canvasWidth, this.canvasHeight);

            for (let i = 0; i < this.canvasWidth; i++) {
                for (let j = 0; j < this.canvasHeight; j++) {
                    this.u[i][j] = (i > this.canvasWidth / 4 && i < (3 * this.canvasWidth) / 4 && j > this.canvasHeight / 4 && j < (3 * this.canvasHeight) / 4) ? 255 : 0;
                }
            }
        },

        animate(timestamp) {
            if (timestamp - this.lastFrameTime < this.frameDuration) {
                this.animationId = requestAnimationFrame(this.animate);
                return; // Skip frame if under target frame duration
            }
            this.lastFrameTime = timestamp;

            if (!this.provider.context) return;
            const ctx = this.provider.context;
            ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

            // Update imageData data
            for (let i = 0; i < this.canvasWidth; i++) {
                for (let j = 0; j < this.canvasHeight; j++) {
                    const value = Math.min(255, Math.max(0, this.u[i][j])); // Clamp value between 0 and 255
                    const index = 4 * (i + j * this.canvasWidth);
                    this.imageData.data[index] = value; // R
                    this.imageData.data[index + 1] = value; // G
                    this.imageData.data[index + 2] = value; // B
                    this.imageData.data[index + 3] = 255; // A
                }
            }
            ctx.putImageData(this.imageData, 200, 200);

            this.animationId = requestAnimationFrame(this.animate);
        }
    }
}
</script>
