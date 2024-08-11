<script setup lang="ts">
</script>

<template>
    <div id="home" @mousemove="handleMouseMove">
        <div class="mouse-overlay2" :style="overlayStyle"></div>
        <div class="mouse-overlay1" :style="overlayStyle"></div>

        <div class="background"></div>
        <div class="container">
            <LeftColumn />
            <RightColumn />
        </div>
    </div>
</template>

<script lang="ts">
import LeftColumn from './LeftColumn.vue';
import RightColumn from './RightColumn.vue';


export default {
    components: {
        LeftColumn,
        RightColumn,
    },
    data() {
        return {
            mouseX: 0,
            mouseY: 0,
            currentX: 0, // Current X position for smoothing
            currentY: 0, // Current Y position for smoothing
            animationFrame: 0 // Store animation frame for cleanup
        };
    },
    computed: {
        overlayStyle() {
            return {
                // Set left and top based on the smoothed positions
                left: `${this.currentX}px`,
                top: `${this.currentY}px`,
                transform: 'translate(-50%, -50%)' // Center the overlay
            };
        }
    },
    methods: {
        handleMouseMove(event: MouseEvent) {
            // Update target mouse coordinates
            this.mouseX = event.clientX;
            this.mouseY = event.clientY;
        },
        animateOverlay() {
            // Linear interpolation factor for smoothing
            const lerpFactor = 0.05;

            // Smoothly interpolate the current position
            this.currentX += (this.mouseX - this.currentX) * lerpFactor;
            this.currentY += (this.mouseY - this.currentY) * lerpFactor;

            // Request the next animation frame
            this.animationFrame = requestAnimationFrame(this.animateOverlay);
        }
    },
    mounted() {
        // Attach mousemove event listener
        window.addEventListener('mousemove', this.handleMouseMove);

        // Start the animation loop
        this.animateOverlay();
    },
    beforeUnmount() {
        // Remove mousemove event listener
        window.removeEventListener('mousemove', this.handleMouseMove);

        // Cancel the animation frame to prevent memory leaks
        cancelAnimationFrame(this.animationFrame);
    }
};

</script>

<style>
#home {
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

@import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&family=Alegreya+Sans:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&family=Alegreya:ital,wght@0,400..900;1,400..900&display=swap');

body {
    margin: 0;
    font-family: 'Alegreya Sans';
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
    margin-left: 40px;
    z-index: 1;
}

.right-column {
    text-align: left;
    flex: 2;
    /* Takes up more space than left column */
    background: transparent;
    /* Transparent background */
    margin-top: 20px;
    margin-left: 400px;
    text-align: left;
    width: 450px;
    z-index: 1;
}

/* Responsive Styles */
@media (max-width: 1000px),
(max-height: 600px) {
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


/* .mouse-overlay1 {
  position: fixed;
  pointer-events: none;
  width: 1200px;
  height: 1200px;
  background: radial-gradient(circle, rgba(255, 176, 4, 0.1), transparent);
  mask-image: radial-gradient(circle, black, transparent 50%);
  mix-blend-mode: darken;
  will-change: transform;
  z-index: 2;
}


.mouse-overlay2 {
  position: fixed;
  pointer-events: none;
  width: 1200px;
  height: 1200px;
  background: radial-gradient(circle, rgb(255, 243, 197), transparent);
  mask-image: radial-gradient(circle, black, transparent 50%);
  mix-blend-mode: multiply;
  will-change: transform;
  z-index: 0;
} */

.background {
    position: fixed;
    /* Ensure it covers the entire viewport */
    top: -100%;
    left: -100%;
    width: 300%;
    height: 300%;
    z-index: -2;
    /* Make sure it's below the radial circle */
    background: #e5f6ff;
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
