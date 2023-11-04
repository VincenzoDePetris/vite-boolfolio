<script>
import WorkCard from "./WorkCard.vue";

export default {
  data() {
    return {};
  },

  props: {
    works: Array,
  },

  components: {
    WorkCard,
  },
};
</script>

<template>
  <div class="container">
    <h2>Work List</h2>
    <div class="row g-4">
      <WorkCard v-for="work in works" :work="work" />
    </div>
  </div>
</template>

<style lang="scss"></style>
