<script setup lang="ts">
</script>

<template>
  <div class="right-column">
    <DescriptionBlock />
    <WorkExperienceBlock />
    <LinksBlock />
  </div>
</template>

<script>
import DescriptionBlock from './DescriptionBlock.vue';
import WorkExperienceBlock from './WorkExperienceBlock.vue';
import LinksBlock from './LinksBlock.vue';

export default {
  name: 'RightColumn',
  components: {
    DescriptionBlock,
    WorkExperienceBlock,
    LinksBlock,
  },
};
</script>
