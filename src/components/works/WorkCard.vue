<script>
export default {
  data() {
    return {};
  },

  props: {
    work: Object,
  },
};
</script>

<template>
  <div class="col-4">
    <div class="card h-100">
      <div class="card-body">
        <h4>{{ work.title }}</h4>
        <p>{{ work.description }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
