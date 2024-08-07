<script setup lang="ts">
</script>

<template>
  <div class="block">
    <h2>Projects</h2>
    <ul>
      <li v-for="link in links" :key="link.id">
        <a :href="link.url" target="_blank" rel="noopener">{{ link.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
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

a {
  color: #3498db;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
