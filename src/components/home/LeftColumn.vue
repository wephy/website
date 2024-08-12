<script setup lang="ts">
</script>

<template>
  <div class="left-column">
    <div class="name">
      <a class="main-link" href="/">
        <p>Joseph Webb</p>
      </a>
    </div>
    <div class="brief">
      <p>I like pushing the boundaries on what can be simulated, and then making it run fast.</p>
    </div>
    <div class=overview>
      <a class="overview-link" href="#about">
        <div class="stretch-dash"></div>
        <span> About</span>
      </a><br>

      <a class="overview-link" href="#education">
        <div class="stretch-dash"></div>
        <span> Education</span>
      </a><br>

      <a class="overview-link" href="#experience">
        <div class="stretch-dash"></div>
        <span> Experience</span>
      </a><br>

      <a class="overview-link" href="#projects">
        <div class="stretch-dash"></div>
        <span> Projects</span>
      </a>

    </div>
    <div class="left-image">
      <!-- <img class="portrait" src="../assets/warwick-grad.jpg" /> -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'LeftColumn',
};
</script>

<style>
.name {
  margin-top: 0px;
}

.portrait {
  width: 200px;
  display: block;
  margin-top: 50px;
  margin-left: 20px;
  border-radius: 10%;
  position: relative;
  z-index: 999;
}

.main-link {
  color: #2150CE;
  font-family: 'Alegreya Sans ExtraBold';
  font-size: 48px;
}

.main-link:hover {
  color: #33AD63;
  /* font-family: 'Alegreya Sans'; */
  font-size: 48px;
}

.brief {
  margin-top: -40px;
  font-size: 20px;
  line-height: 1.1;
  font-family: 'Alegreya Sans';
  max-width: 400px;
}

.overview {
  /* margin-top: 20px; */
}

.overview-link {
  margin-top: 0px;
  color: #2150CE;
  text-decoration: none;
  font-family: 'Alegreya Sans SC';
  font-size: 24px;
  position: relative;
  display: inline-block;
  padding-left: 0px;
  /* Initial space for the line */
}

.stretch-dash {
  display: inline-block;
  width: 20px;
  /* Initial width of the dash */
  height: 0.2px;
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