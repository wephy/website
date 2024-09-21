<template>
    <div id="simulation">
        <div class="background-simulation"></div>
        TESTING
    </div>
</template>

<script setup lang="ts">



</script>

<style>
body,
html,
#simulation {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    color: #010203;
    font-family: "Alegreya Sans";
}

#simulation {
    position: relative;
    /* display: flex; */
}

.background-simulation {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ffff00;
}
</style>
