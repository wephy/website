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
    <div class=overview>
      <a class="overview-link" href="#about">
        <div class="stretch-dash"></div>
        <span> ABOUT</span>
      </a><br>

      <a class="overview-link" href="#education">
        <div class="stretch-dash"></div>
        <span> EDUCATION</span>
      </a><br>

      <a class="overview-link" href="#experience">
        <div class="stretch-dash"></div>
        <span> EXPERIENCE</span>
      </a><br>

      <a class="overview-link" href="#projects">
        <div class="stretch-dash"></div>
        <span> PROJECTS</span>
      </a>

    </div>
    <div class="left-image">
      <img class="portrait" src="../assets/warwick-grad.jpg" />
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
  width: 300px;
  display: block;
  margin-top: 50px;
  margin-left: 20px;
  border-radius: 10%;
  position: relative;
  z-index: 999;
}

.name {
  font-family: ZT Chintzy Bold;
  font-size: 48px;
  color: #2150CE;
  z-index: 1;
}

.brief {
  margin-top: -40px;
  font-size: 20px;
  line-height: 1.1;
  font-family: ZT Chintzy Reg;
  max-width: 400px;
}

.overview {
  margin-top: 20px;
}

.overview-link {
  margin-top: 30px;
  color: #2150CE;
  text-decoration: none;
  font-family: ZT Chintzy Reg;
  font-size: 18px;
  position: relative;
  display: inline-block;
  padding-left: 0px;
  /* Initial space for the line */
}

.stretch-dash {
  display: inline-block;
  width: 20px;
  /* Initial width of the dash */
  height: 1px;
  /* Thickness of the dash */
  background-color: black;
  /* Color of the dash */
  vertical-align: 6px;
  transition: width 0.3s ease;
}

.overview-link:hover {
  color: #33AD63;
}

.overview-link:hover .stretch-dash {
  width: 60px;
  /* Width of the dash on hover */
}
</style>