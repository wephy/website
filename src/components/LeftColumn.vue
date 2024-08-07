<script setup lang="ts">
</script>

<template>
  <div class="left-column">
    <h1>Joseph Webb</h1>
    <h2>MSc Student at the University of Oxford</h2>
    <p>Studying Mathematical Modelling and Scientific Computing asd asd asd as</p>
    <!-- <img class="portrait" src="../assets/PORTRAIT.png"/> -->
    <ul>
      <li><a href="#about">ABOUT</a></li>
      <li><a href="#experience">EXPERIENCE</a></li>
      <li><a href="#projects">PROJECTS</a></li>
    </ul>
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

.left-column h1{
  font-family: Amulya-Bold;
  font-size: 48px;
  color: #26293A;
}

.left-column h2{
  margin-top: -25px;
  font-family: Amulya-Medium;
  color: #26293A;
}

</style>