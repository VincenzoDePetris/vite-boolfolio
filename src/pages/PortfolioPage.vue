<script>
import axios from "axios";
import WorkList from "../components/works/WorkList.vue";
export default {
  data() {
    return {
      works: [],
    };
  },

  components: {
    WorkList,
  },

  methods: {
    fetchWorks() {
      axios.get("http://127.0.0.1:8000/api/works").then((response) => {
        console.log(response.data.works);
        this.works = response.data.works;
      });
    },
  },

  created() {
    this.fetchWorks();
  },
};
</script>

<template>
  <WorkList :works="works" />
</template>

<style lang="scss" scoped></style>
