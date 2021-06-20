<template>
  <div class="search">
    <!-- 搜索 {{ keyword }} -->
    <!-- <div class="top">
      <img src="../assets/left.png" class="return">
      <span class="tit">查询商品列表</span>
    </div> -->
    <NavBar :isReturn="true" :title="'搜索商品'" />
    <SearchInput :backColor="'transparent'" />
    <div class="div_items">
      <div class="div_item" v-for="item in rows" :key="item.price">
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
import SearchInput from "../components/SearchInput.vue";
import NavBar from "../components/NavBar.vue";
export default {
  name: "Search",
  created() {
    this.keyword = this.$route.query.keyword;
  },
  data() {
    return {
      rows: [
        {
          title: "欧式水果叉不绣钢水果叉子韩国家用儿童创意可爱水果叉套装甜品叉",
          price: 33.9,
          stock: 100,
          cover:
            "//gw.alicdn.com/bao/uploaded/i3/421748019/O1CN019lO2dS296kZwR8vr6_!!0-item_pic.jpg_320x320q90.jpg_.webp",
          gallery: [
            "//img.alicdn.com/imgextra/i3/421748019/O1CN019lO2dS296kZwR8vr6_!!0-item_pic.jpg_640x640q80_.webp",
            "//img.alicdn.com/imgextra/i1/421748019/TB2vCc5yORnpuFjSZFCXXX2DXXa_!!421748019.jpg_640x640q80_.webp",
            "//img.alicdn.com/imgextra/i2/421748019/TB2b2ephVXXXXavXpXXXXXXXXXX_!!421748019.jpg_640x640q80_.webp",
          ],
          detail: [
            "//img.alicdn.com/imgextra/i2/421748019/O1CN01Y02seB296keSWTQ7Y_!!421748019.jpg",
            "//img.alicdn.com/imgextra/i1/421748019/O1CN018okFQL296keWIE5i2_!!421748019.jpg",
            "//img.alicdn.com/imgextra/i3/421748019/O1CN01LDwEQZ296keSWUMIW_!!421748019.jpg",
            "//img.alicdn.com/imgextra/i4/421748019/O1CN014y6n0A296keQ9Tqr8_!!421748019.jpg",
          ],
          cat: ["装饰", "家用"],
          label: ["618大促", "满100立减99"],
          id: "94dac2ad28d8",
          time: 1622720155980,
          status: 1,
        },
        {
          title: "杯具熊玻璃杯双层可爱花茶杯子办公室女水杯泡茶杯男夏季带盖防烫",
          price: 78,
          stock: 100,
          cover:
            "//gw.alicdn.com/bao/uploaded/i2/2938416728/O1CN01PbB2Ve1zZTPETAnpj_!!0-item_pic.jpg_320x320q90.jpg_.webp",
          gallery: [
            "https://img.alicdn.com/imgextra/i1/2938416728/O1CN01nCgvo71zZTPUefRDX_!!2938416728.jpg_640x640q80_.webp",
            "https://img.alicdn.com/imgextra/i1/2938416728/O1CN016SRFyk1zZTPemyWWj_!!2938416728.jpg_640x640q80_.webp",
            "https://img.alicdn.com/imgextra/i4/2938416728/O1CN019G0O6O1zZTPfx8QpR_!!2938416728.jpg_640x640q80_.webp",
          ],
          detail: [
            "//img.alicdn.com/imgextra/i2/2938416728/O1CN017c8uTJ1zZTIk9vF8n_!!2938416728.jpg",
            "//img.alicdn.com/imgextra/i3/2938416728/O1CN014hynNX1zZTOfidhNY_!!2938416728.jpg",
            "//img.alicdn.com/imgextra/i1/2938416728/O1CN014alG2q1zZTOcPbzP3_!!2938416728.jpg",
            "//img.alicdn.com/imgextra/i1/2938416728/O1CN01BVX0q51zZTG58q6af_!!2938416728.jpg",
          ],
          cat: ["装饰", "家用"],
          label: ["618大促", "满100立减99"],
          id: "cb8f12ff0191",
          time: 1622720023762,
          status: 1,
        },
      ],
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