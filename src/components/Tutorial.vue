<script setup lang="ts">

import { Box, CameraControls } from '@tresjs/cientos'
import { TresCanvas } from '@tresjs/core'
import { reactive } from 'vue'

const controlsState = reactive({
    minDistance: 0,
    maxDistance: 100,
})
</script>

<template>
    <div id="tutorial">
        <TresCanvas clear-color="#f5f5f5" window-size>

            <TresPerspectiveCamera :position="[5, 5, 5]" />
            <CameraControls v-bind="controlsState" make-default />
            <TresGridHelper :position="[0, -1, 0]" />
            <Box :scale="2">
                <TresMeshToonMaterial color="orange" />
            </Box>
            <TresAmbientLight />
            <TresDirectionalLight :position="[0, 2, 4]" />

        </TresCanvas>
    </div>
</template>

<style>
#tutorial {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;

}
</style>