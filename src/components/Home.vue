<script setup lang="ts">
</script>

<template>
    <div id="home">
        <!-- <my-canvas style="width: 100%; height: 600px;">
            <my-box></my-box>
        </my-canvas> -->

        <!-- <Simulation /> -->

        <div class="background"></div>

        <main class="content">
            <div class="frame">


                <div class="headerName">
                    Joseph Webb
                </div>
                <div class="headerTitle">
                    Mathematician, Physicist, Programmer
                </div>
                <div class="headerLinks">
                    <a class="nav-link" href="/cv.pdf">CV</a>
                    <a class="nav-link" href="https://linkedin.com/in/wephy">LinkedIn</a>
                    <a class="nav-link" href="https://github.com/wephy">GitHub</a>
                </div>

            </div>
        </main>
    </div>
</template>

<script>
// import MyCanvas from './MyCanvas.vue';
// import MyBox from './MyBox.vue';
export default {
    name: 'home',
    components: {
        // MyCanvas,
        // MyBox,
    },
};
</script>

<style>
#home {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fefdfc;
    color: #010203;
    white-space: nowrap;
}

body,
html {
    background-color: #fefdfc;
    font-family: "Alegreya Sans";
    font-weight: 600;
    font-size: 24px;
    font-feature-settings: "palt";
    overflow: hidden;
    line-height: 1;
}

.frame {
    position: fixed;
    z-index: 10;
    left: 30px;
    right: 30px;
    top: 30px;
    bottom: 30px;
    /* mix-blend-mode: difference; */
    /* pointer-events: none; */
}

.headerName {
    text-align: left;
    color: #2150ce;
    font-size: calc(0.8 * max(min(15vh, 10vw), 10vh));
    font-weight: 800;
    margin-top: calc(-0.1 * max(min(15vh, 10vw), 10vh));
}

.background {
    position: fixed;
    /* background: #ffffff; */
    background: #fefdfc;
    /* background: transparent; */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.headerTitle {
    text-align: left;
    color: #010203;
    font-size: calc(0.25 * max(min(15vh, 10vw), 10vh));
    font-weight: 400;
}

.headerLinks {
    /* width: calc(0.25 * max(min(15vh, 10vw), 10vh)); */
    margin-top: 50px;
}

.nav-link {
    /* z-index: 100; */
    text-align: left;
    color: #010203;
    text-transform: uppercase;
    font-size: calc(0.7 * max(min(15vh, 10vw), 10vh));
    font-weight: 600;
    line-height: 0.9em;
    /* text-decoration: none; */
    transition: transform .2s ease-in-out, font-size .1s ease-in-out, letter-spacing .1s ease-in-out;
    display: block;
}

.nav-link:hover {
    font-weight: 600;
    font-style: italic;
    letter-spacing: 1px;
    transform: translate(10px);
    color: #010203;
}
</style>
