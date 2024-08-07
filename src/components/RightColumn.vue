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

<style>

.right-column {
  margin-top: 50px;
  margin-left: 600px; /* Adjust the right column's start position */
  width: 600px;
  /*overflow-y: auto;   /* Enable scrolling in the right column */
  flex: 1;            /* Take up the remaining width */
  background-color: transparent; /* Make the right column transparent */
  text-align: left;
}

</style>