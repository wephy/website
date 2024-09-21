<!-- <script setup lang="ts">

import { Box, CameraControls } from '@tresjs/cientos'
import { TresCanvas } from '@tresjs/core'
import { reactive } from 'vue'

const controlsState = reactive({
    minDistance: 0,
    maxDistance: 100,
})

// Reactive variable for window height
const pos = 5000 / Math.min(window.innerHeight, window.innerWidth);
</script> -->

<script setup lang="ts">
import { useRenderLoop, TresCanvas } from '@tresjs/core';
import { ShaderMaterial, SphereGeometry, Vector3, Color, MathUtils } from 'three';
import Levioso from "./Levioso.vue"

const rgb = (r: number, g: number, b: number) => new Color(r / 255, g / 255, b / 255)
const BG_COLOR_BOTTOM_BLUISH = rgb(48, 172, 255)
const BG_COLOR_TOP_BLUISH = rgb(32, 66, 252)
const BG_COLOR_BOTTOM_ORANGISH = rgb(253, 167, 124)
const BG_COLOR_TOP_ORANGISH = rgb(243, 171, 84)

const SPHERE_COLOR_BOTTOM_BLUISH = rgb(110, 175, 202)
const SPHERE_COLOR_TOP_BLUISH = rgb(47, 133, 245)
const SPHERE_COLOR_BOTTOM_ORANGISH = rgb(253, 157, 129)
const SPHERE_COLOR_TOP_ORANGISH = rgb(248, 142, 95)

const SPHERE_COUNT = 250
const SPHERE_SCALE_COEFF = 3
const ORBIT_MIN = SPHERE_SCALE_COEFF + 2
const ORBIT_MAX = ORBIT_MIN + 10
const RAND_SEED = 898211544

const seededRandom = (a: number) => {
    return function () {
        a |= 0; a = a + 0x9e3779b9 | 0;
        var t = a ^ a >>> 16; t = Math.imul(t, 0x21f0aaad);
        t = t ^ t >>> 15; t = Math.imul(t, 0x735a2d97);
        return ((t = t ^ t >>> 15) >>> 0) / 4294967296;
    }
}
const rand = seededRandom(RAND_SEED)
const randRange = (n = 1) => rand() * n
const { PI, cos, sin } = Math;
const PI2 = PI * 2
const spheres = new Array(SPHERE_COUNT).fill(0).map((_: any, i) => i)
const sizes = new Array(SPHERE_COUNT).fill(0).map(() => randRange(1) * Math.pow(randRange(), 3))
const orbitRadii = new Array(SPHERE_COUNT).fill(0).map(() => MathUtils.lerp(ORBIT_MIN, ORBIT_MAX, randRange()))
const thetas = new Array(SPHERE_COUNT).fill(0).map(() => randRange(PI2))
const phis = new Array(SPHERE_COUNT).fill(0).map(() => randRange(PI2))
const positions: [number, number, number][] = orbitRadii.map((rad, i) => ([3 + rad * cos(thetas[i]) * sin(phis[i]), 5 + rad * sin(thetas[i]) * sin(phis[i]), -8 + rad * cos(phis[i])]))

const getGradientMaterial = (colorBottomWarm: Color, colorTopWarm: Color, colorBottomCool: Color, colorTopCool: Color) => {
    return new ShaderMaterial({
        uniforms: {
            colorBottomWarm: {
                value: new Color().copy(colorBottomWarm)
            },
            colorTopWarm: {
                value: new Color().copy(colorTopWarm)
            },
            colorBottomCool: {
                value: new Color().copy(colorBottomCool)
            },
            colorTopCool: {
                value: new Color().copy(colorTopCool)
            },
            uTemperature: {
                value: 0.0
            },
            uTemperatureVariancePeriod: {
                value: new Vector3(0.08, 0.1, 0.2)
            },
            uElapsedTime: {
                value: 0
            }
        },
        vertexShader: `
        uniform vec4 uTemperatureVariancePeriod;
        uniform float uTemperature;
        uniform float uElapsedTime;
        varying float topBottomMix;
        varying float warmCoolMix;

        void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        topBottomMix = normal.y;
        warmCoolMix = 0.6 * uTemperature + 
            0.4 * (sin(
            (uElapsedTime + gl_Position.x) * uTemperatureVariancePeriod.x + 
            (uElapsedTime + gl_Position.y) * uTemperatureVariancePeriod.y + 
            (uElapsedTime + gl_Position.z) * uTemperatureVariancePeriod.z) * 0.5 + 0.5);
        }
    `,
        fragmentShader: `
        uniform vec3 colorBottomWarm;
        uniform vec3 colorTopWarm;
        uniform vec3 colorBottomCool;
        uniform vec3 colorTopCool;
    
        varying float topBottomMix;
        varying float warmCoolMix;
        
        void main() {
        gl_FragColor = vec4(mix(
            mix(colorTopCool, colorTopWarm, warmCoolMix), 
            mix(colorBottomCool, colorBottomWarm, warmCoolMix), 
            topBottomMix), 1.0);
        }
    `,
    });
}

const sphereGeometry = new SphereGeometry(SPHERE_SCALE_COEFF);
const sphereMaterial = getGradientMaterial(SPHERE_COLOR_BOTTOM_BLUISH, SPHERE_COLOR_TOP_BLUISH, SPHERE_COLOR_BOTTOM_ORANGISH, SPHERE_COLOR_TOP_ORANGISH)

const bgGeometry = new SphereGeometry();
bgGeometry.scale(-1, 1, 1)
const bgMaterial = getGradientMaterial(BG_COLOR_BOTTOM_BLUISH, BG_COLOR_TOP_BLUISH, BG_COLOR_BOTTOM_ORANGISH, BG_COLOR_TOP_ORANGISH)
bgMaterial.uniforms.uTemperatureVariancePeriod.value = new Vector3(0, 0, 0.1)

useRenderLoop().onLoop(({ elapsed }) => {
    const temperature = sin(elapsed * 0.5) * 0.5 + 0.5
    bgMaterial.uniforms.uTemperature.value = temperature
    sphereMaterial.uniforms.uTemperature.value = temperature
    bgMaterial.uniforms.uElapsedTime.value = elapsed
    sphereMaterial.uniforms.uElapsedTime.value = elapsed
})
</script>

<template>
    <TresCanvas clear-color="white" :shadows="false">
        <TresMesh :scale="20" :rotation-x="Math.PI * 1.5" :material="bgMaterial" :geometry="bgGeometry"></TresMesh>
        <TresPerspectiveCamera :args="[45, 2.0, 0.1, 1000]" :position="[0, 0, 23]" />
        <Levioso :speed="0.7" :float-factor="20">
            <TresGroup :rotation-x="Math.PI * 1.5">
                <TresMesh v-for="i of spheres" :position="positions[i]" :scale="sizes[i]" :material="sphereMaterial"
                    :geometry="sphereGeometry" />
            </TresGroup>
        </Levioso>
    </TresCanvas>
</template>

<!-- <template>
    <div id="tutorial">
        <TresCanvas clear-color="#f5f5f5" window-size>

            <TresPerspectiveCamera :position="[pos, pos, pos]" />
            <CameraControls v-bind="controlsState" make-default />
            <TresGridHelper :position="[0, -1, 0]" />
            <Box :scale="2">
                <TresMeshToonMaterial color="#2150CE" />
            </Box>
            <TresAmbientLight />
            <TresDirectionalLight :position="[0, 2, 4]" />

        </TresCanvas>
    </div>
</template> -->

<style>
body,
html {
    margin: 0;
    padding: 0;
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
}
</style>