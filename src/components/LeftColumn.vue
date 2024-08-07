<script setup lang="ts">
</script>

<template>
  <div class="left-column">
    <div class="name">
        <p>Joseph Webb</p>
    </div>
    <div class="brief">
        <p>MSc Student at the University of Oxford in Mathematical Modelling and Scientific Computing</p>
    </div>
    <!-- <img class="portrait" src="../assets/PORTRAIT.png"/> -->
    <div class=overview>
        <a class="overview-link" href="#about">
            <div class="stretch-dash"></div>
            <span> ABOUT</span>
        </a>
        <br><br>
        <a class="overview-link" href="#experience">
            <div class="stretch-dash"></div>
            <span> EXPERIENCE</span>
        </a>
        <br><br>
        <a class="overview-link" href="#projects">
            <div class="stretch-dash"></div>
            <span> PROJECTS</span>
        </a>
        <br><br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftColumn',
};
</script>

<style>

.portrait {
    width: 100vw;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10%;
}

.name {
  font-family: ZT Chintzy;
  font-size: 48px;
  color: #1b1c23;
}

.brief {
  margin-top: -40px;
  font-size: 20px;
  line-height: 1.2;
}

.overview {
    margin-top: 50px;
}

.overview-link {
  color: #1b1c23;
  text-decoration: none;
  font-family: ZT Chintzy;
  font-size: 18px;
  position: relative;
  display: inline-block;
  padding-left: 0px; /* Initial space for the line */
}

.stretch-dash {
  display: inline-block;
  width: 20px; /* Initial width of the dash */
  height: 1px; /* Thickness of the dash */
  background-color: black; /* Color of the dash */
  vertical-align: 6px;
  transition: width 0.3s ease;
}

.overview-link:hover .stretch-dash {
  width: 50px; /* Width of the dash on hover */
}

</style>