<template>
    <div ref="background" class="lorentz-background"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as THREE from 'three';

// Define types for the arrays
const geometries: THREE.BufferGeometry[] = [];
const vertices: THREE.Vector3[][] = [];
const materials: THREE.PointsMaterial[] = [];

const n = 15; // Number of paths
const pointSize = 2; // Adjust this value for point thickness
const fadeDuration = 100; // Number of frames over which points fade
const fadeStep = 1 / fadeDuration; // Fade step per frame

// Refs for the DOM elements
const background = ref<HTMLDivElement | null>(null);

const initThree = () => {
    if (!background.value) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Create renderer with alpha (transparency) enabled
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    background.value.appendChild(renderer.domElement);

    // Set renderer clear color to transparent
    renderer.setClearColor(0x000000, 0); // Fully transparent

    for (let i = 0; i < n; i++) {
        // Create geometry and material for each path
        geometries[i] = new THREE.BufferGeometry();
        vertices[i] = [];
        materials[i] = new THREE.PointsMaterial({
            color: Math.random() * 0xffffff, // Random color for each path
            size: pointSize,
            sizeAttenuation: true,
            transparent: true,
            opacity: 1 // Initial opacity
        });

        const points = new THREE.Points(geometries[i], materials[i]);
        scene.add(points);
    }

    // Initialize paths with different starting points
    const sigma = 10;
    const rho = 28;
    const beta = 8 / 3;
    const startPoints = Array.from({ length: n }, (_, i) => ({
        x: i * 2 - 5,
        y: i,
        z: i * 2
    }));

    const updateAttractors = () => {
        const dt = 0.005;
        for (let i = 0; i < n; i++) {
            const { x, y, z } = startPoints[i];
            const dx = sigma * (y - x) * dt;
            const dy = (x * (rho - z) - y) * dt;
            const dz = (x * y - beta * z) * dt;
            startPoints[i].x += dx;
            startPoints[i].y += dy;
            startPoints[i].z += dz;

            vertices[i].push(new THREE.Vector3(startPoints[i].x, startPoints[i].y, startPoints[i].z));

            // Limit the number of points
            if (vertices[i].length > 3 * fadeDuration) {
                vertices[i].splice(0, 3); // Remove the oldest point for path i
            }

            // Update geometry attributes
            geometries[i].setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices[i].flatMap(v => [v.x, v.y, v.z])), 3));
            // Update point opacity to create fading effect
            // materials[i].opacity = Math.max(0, materials[i].opacity - fadeStep);
        }
    };

    const animate = () => {
        requestAnimationFrame(animate);
        updateAttractors();

        // Move the camera
        camera.position.set(20, 90, 60);
        camera.lookAt(- window.innerWidth / 50 - 10, -80, window.innerWidth / 50 - 20);

        renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
        if (camera) {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
    });
};

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
    overflow: hidden;
}
</style>