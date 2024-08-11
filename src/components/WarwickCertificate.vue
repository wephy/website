<script setup lang="ts">
const pdfSource = "/Award_Certificate-Joseph_Webb.pdf"
</script>

<template>
    <embed class="pdf-view" :src="pdfSource" type="application/pdf" />
</template>

<style>
.pdf-view {
    overflow: hidden;
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    background-color: rgb(0, 0, 0);
}
</style>