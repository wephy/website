<script setup lang="ts">
</script>

<template>
    <div id="home">
        <Tutorial />

        <!-- <div class="background"></div> -->

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
import Tutorial from './Tutorial.vue';
export default {
    name: 'home',
    components: {
        Tutorial
    },
};
</script>

<style>
:root {
    --font-size: calc(max(min(10vh, 10vw), 8vh));
    --padding: calc(0.4 * var(--font-size));
}

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
    font-feature-settings: "palt";
    overflow: hidden;
    line-height: 1;
}

.frame {
    position: fixed;
    z-index: 10;
    left: var(--padding);
    right: var(--padding);
    top: var(--padding);
    bottom: var(--padding);
    pointer-events: none;
}

.headerName {
    text-align: left;
    color: #2150ce;
    font-size: calc(var(--font-size));
    font-weight: 800;
    margin-top: calc(-0.09 * var(--font-size));
}

.headerTitle {
    text-align: left;
    color: #010203;
    font-size: calc(0.303 * var(--font-size));
    font-weight: 400;
    margin-top: calc(0.25 * var(--padding));
}

/* .background { */
/* position: fixed; */
/* background: #ffffff; */
/* background: #fefdfc; */
/* background: transparent; */
/* top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -10; */
/* } */



.headerLinks {
    margin-top: calc(2 * var(--padding));
    width: 0px;
}

.nav-link {
    text-align: left;
    color: #010203;
    text-transform: uppercase;
    font-size: calc(var(--font-size));
    font-weight: 600;
    line-height: 0.9em;
    transition: transform .1s ease-in-out, letter-spacing .2s ease-in-out;
    display: block;
    pointer-events: auto;
}

.nav-link:hover {
    font-weight: 600;
    font-style: italic;
    letter-spacing: calc(0.005 * var(--padding));
    transform: translate(calc(0.1 * var(--padding)));
    color: #010203;
}
</style>
