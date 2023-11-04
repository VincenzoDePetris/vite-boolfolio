<script>
import axios from "axios";
import WorkList from "./components/works/WorkList.vue";

export default {
  data() {
    return {};
  },

  components: { WorkList },

  created() {
    axios.get("http://127.0.0.1:8000/api/works").then((response) => {
      console.log(response);
    });
  },
};
</script>

<template>
  <h1>BOOLFOLIO</h1>
  <WorkList />
</template>

<style lang="scss"></style>
