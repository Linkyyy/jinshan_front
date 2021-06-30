<template>
  <div class="search">
    <!-- 搜索 {{ keyword }} -->
    <!-- <div class="top">
      <img src="../assets/left.png" class="return">
      <span class="tit">查询商品列表</span>
    </div> -->
    <NavBar :isReturn="true" :title="'搜索商品'" />
    <SearchInput
      :backColor="'transparent'"
      @clickSearch="handleClickSearch"
      :model="keyword"
    />
    <div class="div_items">
      <div class="div_item" v-for="item in rows" :key="item.price" @click="handleCheckDetail(item.id)">
        <img :src="item.cover" />
        <div class="div_info">
          <p class="p_title">{{ item.title }}</p>
          <p class="p_price">￥{{ item.price }}</p>
          <div class="div_label">
            <p v-for="item in item.label" :key="item">
              {{ item }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import util from '../util'
import SearchInput from "../components/SearchInput.vue";
import NavBar from "../components/NavBar.vue";
export default {
  name: "Search",
  created() {
      this.search();
  },
  methods: {
            handleCheckDetail(id) {
      this.$router.push({ name: "Detail", query: { id } });
    },
    search(){
            this.keyword = this.$store.getters.getKeyword;
      this.$axios
        .post("/api/sku/list", { keyword: this.keyword })
        .then((res) => {
          this.rows = res.data.rows;
          if(this.rows.length==0){
            util.showMessage('暂时没有相关商品哦~');
          }
        });
    },
    handleClickSearch() {
      this.search();
    },
  },
  data() {
    return {
      rows:[]
    };
  },
  components: {
    SearchInput,
    NavBar,
  },
};
</script>
<style lang="less">
.search {
  margin: 0;
  padding: 0;
  .div_items {
    position: relative;
    left: 2vw;
    width: 96vw;
    margin-top: 10px;
    .div_item {
      cursor: pointer;
      border-radius: 10px;
      margin: 7px 0;
      display: flex;
      background-color: white;
      padding: 10px;
      img {
        width: 120px;
      }
      .div_info {
        margin: 0 10px;
        .div_label {
          display: flex;
          p {
            font-size: 13px;
            font-weight: lighter;
            background-color: #f76649;
            padding: 3px 7px;
            border-radius: 10px;
            color: white;
            margin: 5px 5px;
          }
        }
        .p_title {
          font-size: 18px;
        }
        .p_price {
          margin: 10px 0;
          font-size: 18px;
          color: #fc4d11;
          font-weight: bold;
        }
      }
    }
  }
}
</style>