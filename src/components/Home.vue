<script setup lang="ts">
</script>

<template>
    <div id="home">
        <div class="background"></div>
        <!-- <div class="svgs">
            <svg class="svg cls-1 svg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4000 2029.24">
                <path
                    d="M4000,200c-250.01,0-375.01,407.31-500.02,814.62-125,407.31-250.01,814.62-500.02,814.62-250,0-375-287.39-499.99-574.79-125-287.39-250-574.79-499.99-574.79-250,0-375,287.39-500,574.79s-250,574.79-500,574.79c-250,0-374.99-407.31-499.99-814.62C374.99,607.31,250,200,0,200" />
            </svg> -->
        <!-- <svg class="svg cls-1 svg2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4000 2029.24">
                <path
                    d="M4000,200c-250.01,0-375.01,407.31-500.02,814.62-125,407.31-250.01,814.62-500.02,814.62-250,0-375-287.39-499.99-574.79-125-287.39-250-574.79-499.99-574.79-250,0-375,287.39-500,574.79s-250,574.79-500,574.79c-250,0-374.99-407.31-499.99-814.62C374.99,607.31,250,200,0,200" />
            </svg> -->
        <!-- <svg class="svg cls-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4000 1829.24">>
                <path
                    d="M4000,100c-250.01,0-375.01,407.31-500.02,814.62-125,407.31-250.01,814.62-500.02,814.62-250,0-375-287.39-499.99-574.79-125-287.39-250-574.79-499.99-574.79-250,0-375,287.39-500,574.79s-250,574.79-500,574.79c-250,0-374.99-407.31-499.99-814.62C374.99,507.31,250,100,0,100" />
            </svg> -->
        <!-- </div> -->

        <LorentzAttractor />

        <section>
            <div class="container">
                <div class="headerName">
                    Joseph Webb
                </div>
                <div class="headerTitle">
                    Mathematician, Physicist, Programmer
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
}

.background {
    position: fixed;
    /* background: #ffffff; */
    background: #f0ede7;
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
    font-family: 'Alegreya Sans';
    z-index: 100;
    text-align: left;
    color: #191919;
    text-transform: uppercase;
    border: 0 solid #000;
    font-size: 5vw;
    /* font-weight: 300; */
    line-height: .95em;
    text-decoration: none;
    transition: transform .3s ease-in-out, color .3s ease-in-out, font-size .3s ease-in-out;
    display: block;
    position: relative;
}

.headerTitle {
    font-family: 'Alegreya Sans';
    z-index: 100;
    text-align: left;
    color: #191919;
    text-transform: uppercase;
    border: 0 solid #000;
    font-size: 5vw;
    /* font-weight: 300; */
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
    font-family: 'Alegreya Sans ExtraBold';
    z-index: 100;
    text-align: left;
    color: #191919;
    text-transform: uppercase;
    border: 0 solid #000;
    font-size: calc(max(7vw, 10vh));
    /* font-weight: 300; */
    line-height: .95em;
    text-decoration: none;
    transition: transform .3s ease-in-out, color .5s ease-in-out, font-size .5s ease-in-out;
    display: block;
    position: relative;
}

.nav-link:hover {
    /* font-family: 'Alegreya Sans ExtraBold'; */
    font-style: italic;
    letter-spacing: 1px;
    transform: translate(20px);
    color: #191919;
}

</style>
