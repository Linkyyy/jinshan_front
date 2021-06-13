<template>
  <div class="search">搜索 {{ keyword }}</div>
</template>
<script>
export default {
  name: "Search",
  created() {
    this.keyword = this.$route.query.keyword;
  },
  data() {
    return {};
  },
  components: {},
};
</script>
<style lang="less">
.search {
}
</style>