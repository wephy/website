<script setup lang="ts">
</script>

<template>
  <div id="projects" class="block">

  </div>
</template>

<script>
export default {
  name: 'LinksBlock',
  data() {
    return {
      links: [
        { id: 1, name: 'Project A', url: 'https://example.com/project-a' },
        { id: 2, name: 'Project B', url: 'https://example.com/project-b' },
        // Add more links here
      ],
    };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

a:hover {
  text-decoration: underline;
}
</style>
