<script setup lang="ts">
</script>

<template>
  <div class="left-column">
    <h1>Joseph Webb</h1>
    <h2>MSc Student at the University of Oxford</h2>
    <p>Studying Mathematical Modelling and Scientific Computing asd asd asd as</p>
    <!-- <img class="portrait" src="../assets/PORTRAIT.png"/> -->
    <ul>
      <li>About Me</li>
      <li>Work Experience</li>
      <li>Projects</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
export default {
  name: 'LeftColumn',
};
</script>

<style>

.portrait {
    width: 300px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10%;
}

.left-column {
  margin-top: 35px;
  width: 450px;
  position: fixed;  /* Keep the left column fixed */
  overflow-y: auto; /* Enable scrolling if needed */
  background-color: transparent; /* Make the left column transparent */
  text-align: left;
}

.left-column h1{
  font-family: Amulya-Bold;
  color: #26293A;
}

.left-column h2{
  margin-top: -25px;
  font-family: Amulya-Medium;
  color: #26293A;
}


</style>