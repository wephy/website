<script setup lang="ts">
</script>

<template>
    <div id="home">
        <Simulation />
        <div class="background"></div>

        <section>
            <div class="container">
                <div class="headerName">
                    Joseph <span>We</span>bb
                </div>
                <div class="headerBreak1"></div>
                <div class="headerTitle">
                    Mathematician, <span>Phy</span>sicist, Programmer
                </div>
                <div class="headerBreak2"></div>
                <div class="headerLinks">
                    <a class="nav-link" href="/cv.pdf">CV</a>
                    <a class="nav-link" href="https://linkedin.com/in/wephy">LinkedIn</a>
                    <a class="nav-link" href="https://github.com/wephy">GitHub</a>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import Simulation from './Simulation.vue';

export default {
    components: {
        Simulation
    }
}

</script>


<style>
#home {
    position: relative;
    z-index: 1;
    /* Ensure content stays on top of Simulation */
}

body,
html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    color: #010203;
    font-family: "Alegreya Sans";
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
    z-index: 0;
}

.container {
    position: fixed;
    text-align: left;
    top: 0;
    left: 0;
    margin-top: 24px;
    margin-left: 24px;
    padding: 0;
}

.control-panel {
    z-index: 1000;
}

.headerName {
    z-index: 100;
    text-align: left;
    color: #2150ce;
    /* text-transform: uppercase; */
    font-size: calc(0.8 * max(min(15vh, 10vw), 10vh));
    font-weight: 800;
    line-height: 1.3em;
    text-decoration: none;
    transition: transform .3s ease-in-out, font-size .3s ease-in-out;
    display: block;
    position: relative;
}

.headerTitle {
    z-index: 100;
    text-align: left;
    color: #010203;
    /* text-transform: uppercase; */
    font-size: calc(0.25 * max(min(15vh, 10vw), 10vh));
    font-weight: 400;
    line-height: 1.1em;
    text-decoration: none;
    transition: transform .3s ease-in-out, font-size .3s ease-in-out;
    display: block;
    position: relative;
}

.headerBreak1 {
    padding: 0px;
}

.headerBreak2 {
    padding: 30px;
}

.headerLinks {
    width: 50vw;
}

.nav-link {
    z-index: 100;
    text-align: left;
    color: #010203;
    text-transform: uppercase;
    font-size: calc(0.8 * max(min(15vh, 10vw), 10vh));
    font-weight: 800;
    line-height: 0.9em;
    text-decoration: none;
    transition: transform .5s ease-in-out, font-size .5s ease-in-out, letter-spacing .5s ease-in-out;
    display: block;
}

.nav-link:hover {
    font-style: italic;
    letter-spacing: 2px;
    transform: translate(40px);
    color: #010203;
}
</style>
