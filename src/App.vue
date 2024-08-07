<template>
  <div class="container">
    <LeftColumn />
    <RightColumn />
  </div>
</template>

<script>
import LeftColumn from './components/LeftColumn.vue';
import RightColumn from './components/RightColumn.vue';

export default {
  name: 'App',
  components: {
    LeftColumn,
    RightColumn,
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.container {
  display: flex;
  height: 100vh;
}

.left-column {
  width: 250px;
  background-color: #f4f4f4;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.right-column {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.right-column h2 {
  margin-top: 0;
}

.block {
  margin-bottom: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>