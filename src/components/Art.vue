<script setup lang="ts">

</script>

<template>
    <div id="art">
        <!-- <Background /> -->

        <!-- <main class="content"> -->
        <div class="frame">
            <RouterLink class="headerName" to="/">
                Joseph Webb
            </RouterLink>
        </div>
        <!-- </main> -->




        <div id="lightgallery">
            <Vue3JustifiedLayout :options="options">

                <lightgallery :settings="{ speed: 100, plugins: plugins }" :onInit="onInit"
                    :onBeforeSlide="onBeforeSlide">

                    <a data-lg-size="6000-6000" class="gallery-item" data-src="/buddha_medium.png"
                        data-sub-html="<h4>Cover for Poincaré Magazine #02 </h4>">
                        <img class="img-responsive" src="/buddha_thumb.png" />
                    </a>

                    <a data-lg-size="6000-6000" class="gallery-item" data-src="/buddha_medium.png"
                        data-sub-html="<h4>Cover for Poincaré Magazine #02 </h4>">
                        <img class="img-responsive" src="/buddha_thumb.png" />
                    </a>

                    <a data-lg-size="6000-6000" class="gallery-item" data-src="/buddha_medium.png"
                        data-sub-html="<h4>Cover for Poincaré Magazine #02 </h4>">
                        <img class="img-responsive" src="/buddha_thumb.png" />
                    </a>

                    <a data-lg-size="6000-6000" class="gallery-item" data-src="/buddha_medium.png"
                        data-sub-html="<h4>Cover for Poincaré Magazine #02 </h4>">
                        <img class="img-responsive" src="/buddha_thumb.png" />
                    </a>

                    <a data-lg-size="6000-6000" class="gallery-item" data-src="/buddha_medium.png"
                        data-sub-html="<h4>Cover for Poincaré Magazine #02 </h4>">
                        <img class="img-responsive" src="/buddha_thumb.png" />
                    </a>

                    <a data-lg-size="6000-6000" class="gallery-item" data-src="/buddha_medium.png"
                        data-sub-html="<h4>Cover for Poincaré Magazine #02 </h4>">
                        <img class="img-responsive" src="/buddha_thumb.png" />
                    </a>

                    <a data-lg-size="6000-6000" class="gallery-item" data-src="/buddha_medium.png"
                        data-sub-html="<h4>Cover for Poincaré Magazine #02 </h4>">
                        <img class="img-responsive" src="/buddha_thumb.png" />
                    </a>

                    <a data-lg-size="6000-6000" class="gallery-item" data-src="/buddha_medium.png"
                        data-sub-html="<h4>Cover for Poincaré Magazine #02 </h4>">
                        <img class="img-responsive" src="/buddha_thumb.png" />
                    </a>
                    <!-- <a class="gallery-item" data-src="/2_cover.png">
<img style="width: 400px" class="img-responsive" src="/2_cover.png" />
</a> -->
                </lightgallery>

            </Vue3JustifiedLayout>

        </div>
    </div>
</template>

<script>
import Background from './Background.vue';

import Vue3JustifiedLayout from 'vue3-justified-layout';
import 'vue3-justified-layout/dist/style.css'
import Lightgallery from 'lightgallery/vue';
import lgZoom from 'lightgallery/plugins/zoom';

export default {
    name: 'art',
    components: {
        Background,
        Lightgallery,
        Vue3JustifiedLayout
    },
    data: () => ({
        plugins: [lgZoom],
    }),
    methods: {
        onInit: () => {
            console.log('lightGallery has been initialized');
        },
        onBeforeSlide: () => {
            console.log('calling before slide');
        },
    },
};

const options = {
    targetRowHeight: 120
}


</script>

<style lang="css" scoped>
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.7.2/css/lightgallery.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.7.2/css/lg-zoom.css');

:root {
    --font-size: calc(0.9 * max(min(10vh, 10vw), 8vh));
    --padding: calc(0.4 * var(--font-size));
}

#art {
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
    line-height: 1;
    margin: 0;
    pointer-events: auto;
}

.frame {
    position: fixed;
    z-index: 10;
    left: var(--padding);
    right: var(--padding);
    top: var(--padding);
    bottom: var(--padding);
    height: calc(2 * var(--font-size));
    pointer-events: auto;
    text-align: left;
}

.content {
    position: fixed;
    left: 0;
    top: calc(3 * var(--font-size));
    width: 100%;
    height: 100%;
    margin: 0;
}

.headerName {
    color: #2150ce;
    font-size: calc(var(--font-size));
    font-weight: 800;
    margin-top: calc(-0.09 * var(--font-size));
}

#lightgallery {
    position: fixed;
    top: 200px;
    left: var(--padding);
    width: 1200px;
    height: 1200px;
    margin: 0;
    pointer-events: auto;
    overflow: auto;
}

.gallery-item {
    margin: 20px;
}
</style>
