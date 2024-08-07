<script setup lang="ts">
</script>

<template>
  <div class="left-column">
    <div class="name">
        <p>Joseph Webb</p>
    </div>
    <div class="title">
        <p>Mathematician and Physicist</p>
    </div>
    <div class="brief">
        <p>MSc Student at the University of Oxford in Mathematical Modelling and Scientific Computing</p>
    </div>
    <!-- <img class="portrait" src="../assets/PORTRAIT.png"/> -->
    <div class=overview>
        <a class="overview-link" href="#about">ABOUT</a>
        <br>
        <br>
        <a class="overview-link" href="#experience">EXPERIENCE</a>
        <br>
        <br>
        <a class="overview-link" href="#projects">PROJECTS</a>
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
  font-family: Amulya-Bold;
  font-size: 48px;
  color: #26293A;
}

.title {
  margin-top: -50px;
  font-family: Amulya-Regular;
  color: #26293A;
  font-size: 24px;
  line-height: 1.2;
}

.overview {
    margin-top: 50px;
}

.overview-link {
    color: #26293A;
    text-decoration: none;
    color: #333;
    font-size: 18px;
    position: relative;
    display: inline-block;
    padding-left: 20px; /* Initial space for the line */
    transition: padding-left 0.3s ease;
}

.overview-link:hover {
    padding-left: 40px; /* Space when hovered to move the text */
}

.overview-link:hover {
    width: 100%;
    width: 30px; /* Line width when hovered */
}

</style>