<script setup lang="ts">
</script>

<template>
    <div id="home">
        <div class="background"></div>
        <LorentzAttractor />

        <section>
            <div class="container">
                <div class="headerName">
                    Joseph <span>We</span>bb
                </div>
                <div class="headerTitle">
                    Mathematician, <span>Phy</span>sicist, Programmer
                </div>
                <div class="headerBreak"></div>
                <div class="headerLinks">
                    <a class="nav-link" href="/cv.pdf">CV</a>
                    <a class="nav-link" href="https://github.com/wephy">GitHub</a>
                    <a class="nav-link" href="https://linkedin.com/in/wephy">LinkedIn</a>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import LorentzAttractor from './LorentzAttractor.vue';

export default {
    components: {
        LorentzAttractor
    }
}

</script>


<style>
body,
html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    color: #191919;
    font-family: "Alegreya Sans";
}

.background {
    position: fixed;
    /* background: #ffffff; */
    background: #f5f3ef;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
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

.headerName {
    z-index: 100;
    text-align: left;
    color: #191919;
    text-transform: uppercase;
    border: 0 solid #000;
    font-size: 4.7vw;
    font-weight: 500;
    line-height: .95em;
    text-decoration: none;
    transition: transform .3s ease-in-out, color .3s ease-in-out, font-size .3s ease-in-out;
    display: block;
    position: relative;
}

.headerTitle {
    z-index: 100;
    text-align: left;
    color: #191919;
    text-transform: uppercase;
    border: 0 solid #000;
    font-size: 4.7vw;
    font-weight: 500;
    line-height: .95em;
    text-decoration: none;
    transition: transform .3s ease-in-out, color .3s ease-in-out, font-size .3s ease-in-out;
    display: block;
    position: relative;
}

.headerBreak {
    padding: 20px;
}

.headerLinks {
    width: 40vw;
}

.nav-link {
    z-index: 100;
    text-align: left;
    color: #191919;
    text-transform: uppercase;
    border: 0 solid #000;
    font-size: calc(max(7vw, 7vh));
    font-weight: 800;
    line-height: .95em;
    text-decoration: none;
    transition: transform .3s ease-in-out, color .5s ease-in-out, font-size .5s ease-in-out;
    display: block;
    position: relative;
}

.nav-link:hover {
    font-style: italic;
    letter-spacing: 1px;
    transform: translate(20px);
    color: #191919;
}

</style>
