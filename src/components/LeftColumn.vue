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


document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.structure-overview a');

  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop + 60, // Adjust the offset value as needed
          behavior: 'smooth' // Smooth scroll
        });
      }
    });
  });
});
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