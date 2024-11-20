<script setup lang="ts">
import { useRenderLoop, TresCanvas } from '@tresjs/core';
import { ShaderMaterial, SphereGeometry, Vector3, Color } from 'three';

const rgb = (r: number, g: number, b: number) => new Color(r / 255, g / 255, b / 255)
const BG_COLOR_BOTTOM_BLUISH = rgb(161, 209, 255)
const BG_COLOR_TOP_BLUISH = rgb(156, 240, 255)
const BG_COLOR_BOTTOM_ORANGISH = rgb(255, 220, 189)
const BG_COLOR_TOP_ORANGISH = rgb(255, 204, 143)

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

const bgGeometry = new SphereGeometry();
bgGeometry.scale(-1, 1, 1)
const bgMaterial = getGradientMaterial(BG_COLOR_BOTTOM_BLUISH, BG_COLOR_TOP_BLUISH, BG_COLOR_BOTTOM_ORANGISH, BG_COLOR_TOP_ORANGISH)
bgMaterial.uniforms.uTemperatureVariancePeriod.value = new Vector3(0, 0, 0.1)

useRenderLoop().onLoop(({ elapsed }) => {
    const temperature = Math.sin(elapsed * 0.5) * 0.5 + 0.5
    bgMaterial.uniforms.uTemperature.value = temperature
    bgMaterial.uniforms.uElapsedTime.value = elapsed
})
</script>

<template>
    <div id="background">
        <TresCanvas clear-color="white" :shadows="false">
            <TresMesh :scale="20" :rotation-x="Math.PI * 1.5" :material="bgMaterial" :geometry="bgGeometry"></TresMesh>
            <TresPerspectiveCamera :position="[0, 0, 23]" />
            <!-- <CameraControls v-bind="controlsState" make-default /> -->

        </TresCanvas>
    </div>
</template>

<style>
#background {
    width: calc(max(100vw, 100vh));
    height: calc(max(100vw, 100vh));
}

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