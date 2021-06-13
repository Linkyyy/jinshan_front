<template>
  <div class="classification">分类 {{ keyword }}</div>
</template>
<script>
export default {
  name: "Classification",
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
.classification {
}
</style>