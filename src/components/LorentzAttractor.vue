<template>
    <div ref="background" class="lorentz-background"></div>
    <div class="control-panel">
        <!-- <button class="decrease-points-button" @click="decreaseNumberOfPoints">-</button>
        <button class="increase-points-button" @click="increaseNumberOfPoints">+</button> -->
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';

const n = ref(10); // Number of points, initial value

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
        if (x < 0.5) {
            hue = Math.floor(x * 360);
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

    for (let i = 0; i < n.value; i++) {
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

    const sigma = 10;
    const rho = 28;
    const beta = 8 / 3;
    const startPoints = Array.from({ length: n.value }, (_, i) => ({
        x: Math.random() * 10 - 10,
        y: Math.random() * 15,
        z: (Math.random() + i) * 7
    }));

    const updateAttractors = () => {
        const dt = 0.005;
        for (let i = 0; i < n.value; i++) {
            const { x, y, z } = startPoints[i];
            const dx = sigma * (y - x) * dt;
            const dy = (x * (rho - z) - y) * dt;
            const dz = (x * y - beta * z) * dt;
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

// const increaseNumberOfPoints = () => {
//     if (n.value == 15) {
//         return
//     }
//     n.value += 1; // Increase the number of points by 1
//     nextTick(() => {
//         initThree(); // Reinitialize the Three.js scene with the new number of points
//     });
// };

// const decreaseNumberOfPoints = () => {
//     if (n.value == 1) {
//         return
//     }
//     n.value -= 1; // Decrease the number of points by 1
//     nextTick(() => {
//         initThree(); // Reinitialize the Three.js scene with the new number of points
//     });
// };

// Initialize Three.js on component mount
onMounted(initThree);
</script>

<style scoped>
.lorentz-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* overflow: hidden; */
    margin: 0;
    padding: 0;
}

.decrease-points-button {
    position: fixed;
    bottom: 20px;
    right: 100px;
    /* padding: 10px 20px; */
    background-color: #191919;
    color: white;
    border: none;
    font-size: 24px;
    /* border-radius: 5px; */
    cursor: pointer;
}

.increase-points-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    /* padding: 10px 20px; */
    background-color: #191919;
    color: white;
    border: none;
    font-size: 24px;
    /* border-radius: 5px; */
    cursor: pointer;
}
</style>
