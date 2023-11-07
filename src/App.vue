<script>
import axios from "axios";
import WorkList from "./components/works/WorkList.vue";
import NavBar from "./components/works/NavBar.vue";

export default {
  data() {
    return {
      works: [],
    };
  },

  components: { WorkList, NavBar },
};
</script>

<template>
  <NavBar />
  <router-view></router-view>
</template>

<style lang="scss"></style>
