<template>
    <div ref="background" class="lorentz-background"></div>
    <div class="containerControlPanel">
        <div class="control-panel">
        <div>
            Change the parameters of the simulation:
        </div>
        <div v-if="isDtHigh" class="warning-message">WARNING: UNSTABLE. Simulation speed is too high!</div>
        <div class="speed">
            Speed: {{ (dt * 500).toFixed(3) }}
            <button class="decrease-dt-button" @click="decreaseDt">-</button>
            <button class="increase-dt-button" @click="increaseDt">+</button>
        </div>
    </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue';
import * as THREE from 'three';

const n = 15; // Number of points, initial value

// Define types for the arrays
const geometries: THREE.BufferGeometry[] = [];
const vertices: THREE.Vector3[][] = [];
const materials: THREE.PointsMaterial[] = [];
const pointSize = 3; // Adjust this value for point thickness
const fadeDuration = 100; // Number of frames over which points fade

// Refs for the DOM elements
const background = ref<HTMLDivElement | null>(null);

let scene: THREE.Scene | null = null;
let camera: THREE.PerspectiveCamera | null = null;
let renderer: THREE.WebGLRenderer | null = null;

const dt = ref(0.002);

// Computed property to check if dt is greater than 0.5
const isDtHigh = computed(() => dt.value * 500 > 10);

const sigma = 10;
    const rho = 28;
    const beta = 8 / 3;
    const startPoints = Array.from({ length: n }, (_, i) => ({
        x: Math.random() * 10 - i,
        y: Math.random() * 10 + i - 10,
        z: (Math.random() + i) * 5
    }));

const initThree = () => {
    if (!background.value) return;

    // Clear previous scene if it exists
    while (background.value.firstChild) {
        background.value.removeChild(background.value.firstChild);
    }

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    background.value.appendChild(renderer.domElement);
    renderer.setClearColor(0x000000, 0); // Fully transparent

    function getRandomPastelColor() {
        const x = Math.random();
        let hue = 0;
        if (x < 0.2) {
            hue = Math.floor(x * 200);
        }
        else if (x < 0.5) {
            hue = Math.floor(x * 400);
        }
        else {
            hue = Math.floor((x < 0.5 ? Math.pow(x / 8, 1 / 4) : 1 - 0.5 * Math.pow(2 * (1 - x), 1 / 4)) * 360);
        }
        // const hue = Math.floor(y * 360);
        const saturation = 90;
        const lightness = Math.floor(Math.random() * 20) + 65;
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }

    // Initialize arrays
    geometries.length = 0;
    vertices.length = 0;
    materials.length = 0;

    for (let i = 0; i < n; i++) {
        geometries[i] = new THREE.BufferGeometry();
        vertices[i] = [];
        materials[i] = new THREE.PointsMaterial({
            color: getRandomPastelColor(),
            size: pointSize,
            sizeAttenuation: true,
            transparent: true,
            opacity: 1 // Initial opacity
        });

        const points = new THREE.Points(geometries[i], materials[i]);
        scene.add(points);
    }

    const updateAttractors = () => {
        for (let i = 0; i < n; i++) {
            const { x, y, z } = startPoints[i];
            const dx = sigma * (y - x) * dt.value;
            const dy = (x * (rho - z) - y) * dt.value;
            const dz = (x * y - beta * z) * dt.value;
            startPoints[i].x += dx;
            startPoints[i].y += dy;
            startPoints[i].z += dz;

            vertices[i].push(new THREE.Vector3(startPoints[i].x, startPoints[i].y, startPoints[i].z));

            if (vertices[i].length > 3 * fadeDuration) {
                vertices[i].splice(0, 3); // Remove the oldest point for path i
            }

            geometries[i].setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices[i].flatMap(v => [v.x, v.y, v.z])), 3));
        }
    };

    const animate = () => {
        if (renderer && scene && camera) {
            requestAnimationFrame(animate);
            updateAttractors();
            camera.position.set(20, 90, 60);
            camera.lookAt(- window.innerWidth / 50 - 10, -100, window.innerWidth / 50 - 20);
            renderer.render(scene, camera);
        }
    };

    animate();

    const onResize = () => {
        if (camera && renderer) {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
    };

    window.addEventListener('resize', onResize);

    // Clean up on unmount
    onUnmounted(() => {
        if (renderer) {
            renderer.dispose();
        }
        // No need to dispose of the scene explicitly
        window.removeEventListener('resize', onResize);
    });
};

const increaseDt = () => {
    // if (dt.value == 0.001) {
    //     return
    // }
    dt.value *= 2;
    nextTick(() => {
        initThree();
    });
};

const decreaseDt = () => {
    if (dt.value * 500 / 1.25 < 0.1) {
        return
    }
    dt.value /= 2; 
    nextTick(() => {
        initThree();
    });
};

// Initialize Three.js on component mount
onMounted(initThree);
</script>

<style scoped>

.lorentz-background {
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
  height: 100vh; /* Full height of the viewport */
}


.control-panel {
    font-family: "JuliaMono-Regular";
    position: fixed;
    width: min(300px, 100vw);
    text-align: left;
    font-size: min(24px, 5vw);
    right: 20px;
    bottom: 20px;
}

.increase-dt-button, .decrease-dt-button {
    /* position: fixed; */
    padding: 2px 10px;
    background-color: #010203;
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
}

@keyframes flash {
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}

.warning-message {
    position: fixed;
    left: 6vw;
    top: 15vh;
    color: #ff2400;
    font-size: max(5vw, 10vh);
    font-weight: 800;
    font-family: "JuliaMono-Black";
    animation: flash 0.8s infinite; /* Adjust duration and iteration as needed */
}
</style>
