<template>
  <div class="detail">
    详情 {{ id }}
  </div>
</template>
<script>
export default {
  name: "Detail",
  data() {
    return {};
  },
  created() {
    this.id = this.$route.query.id;
  },
  components: {},
};
</script>
<style lang="less">
.detail {
  
}
</style>