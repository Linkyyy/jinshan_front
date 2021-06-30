<template>
  <div class="detail">
    <!-- 详情 {{ id }} -->
    <!-- 返回图标 -->
    <div class="left" @click="handleClick">
      <img src="../assets/left.png" class="return" />
    </div>
    <swiper
      :imgList="goodInfo.gallery"
      :swiperConfigure="{ width: '96vw', height: '50vh' }"
    ></swiper>
    <div class="div_information">
      <h1 class="price">￥{{ goodInfo.price }}</h1>
      <div class="div_info">
        <p>{{ goodInfo.label[0] }}</p>
        <p>库存:{{ goodInfo.stock }}</p>
      </div>
      <h1 class="title">
        {{ goodInfo.title }}
        <span class="div_label" v-if="goodInfo.label[1]">{{
          goodInfo.label[1]
        }}</span>
      </h1>
    </div>
    <div class="div_detail">
      <img :src="item" v-for="item in goodInfo.detail" :key="item" />
    </div>
    <!-- 底部导航栏 -->
    <div class="bottom" style="background-color: #fff">
      <div class="bottom_left">
        <div @click="handleAddCart">
          <img
            :src="
              isCart
                ? require('../assets/shopping_full.png')
                : require('../assets/shopping.png')
            "
          />
          <p>购物车</p>
        </div>
        <div @click="handleAddStar">
          <img
            :src="
              isCollect
                ? require('../assets/favor_full.png')
                : require('../assets/favor.png')
            "
          />
          <p>收藏</p>
        </div>
      </div>

      <button class="choice">
        <span class="join1" @click="handleAddCart"><em class="joincar">{{isCart?'从购物车移除':'加入购物车'}}</em></span>
      </button>
    </div>
  </div>
</template>
<script>
import util from "../util";
import Swiper from "../components/Swiper.vue";
export default {
  name: "Detail",
  components: {
    Swiper,
  },
  data() {
    return {
      goodInfo: {},
      isCart: false,
      isCollect: false,
    };
  },
  created() {
    this.id = this.$route.query.id;
    this.$axios.post("/api/sku/info", { id: this.id }).then((res) => {
      console.log(res.data.data);
      this.goodInfo = res.data.data;
    });
    this.$axios.post("/api/cart/list").then((res) => {
      this.rows = res.data.rows;
      for (let i in this.rows) {
        if (this.rows[i].id == this.id) {
          this.isCart = true;
        }
      }
    });
        this.$axios.post("/api/star/list").then((res) => {
      let starList = res.data.rows;
      for (let i in starList) {
        if (starList[i].id == this.id) {
          this.isCollect = true;
        }
      }
    });
  },
  methods: {
    handleAddCart() {
      let ids = [];
      ids.push(this.id);
      if (this.isCart) {
        this.$axios.post("/api/cart/remove", { ids }).then(() => {
          this.isCart = false;
          util.showMessage("已从购物车移除！");
        });
      } else {
        this.$axios.post("/api/cart/add", { skuId: this.id }).then(() => {
          this.isCart = true;
          util.showMessage("已加入购物车！");
        });
      }
    },
    handleAddStar(){
            let ids = [];
      ids.push(this.id);
      if (this.isCollect) {
        this.$axios.post("/api/star/remove", { ids }).then(() => {
          this.isCollect = false;
          util.showMessage("已取消收藏！");
        });
      } else {
        this.$axios.post("/api/star/add", { skuId: this.id }).then(() => {
          this.isCollect = true;
          util.showMessage("收藏成功！");
        });
      }
    },
    handleClick() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="less">
.detail {
  overflow: hidden;
  .left {
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 100%;
    width: 40px;
    height: 40px;
    position: fixed;
    top: 0;
    left: 0;
    margin: 10px;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    .return {
      width: 70%;
      height: 70%;
    }
  }

  .div_information {
    padding: 5px 15px;
    margin: 2%;
    border-radius: 10px;
    background-color: #fff;
    .price {
      margin: 10px 0;
      font-size: 23px;
      color: rgb(238, 110, 86);
    }
    .div_info {
      justify-content: space-between;
      display: flex;
      p {
        &:nth-child(1) {
          background-color: #fa894d;
          color: white;
          padding: 2px 5px;
          border-radius: 10px;
        }
        &:nth-child(2) {
          color: gray;
        }
      }
    }
    h1 {
      line-height: 25px;
      margin: 10px 0;
      font-weight: bold;
      font-size: 19px;
      .div_label {
        font-size: 12px;
        font-weight: lighter;
        margin: 10px 0;
        background-color: #fb644b;
        color: white;
        padding: 2px 5px;
        border-radius: 10px;
      }
    }
  }
  .div_detail {
    width: 100vw;
    img {
      width: 100%;
    }
  }
  .bottom {
    box-sizing: border-box;
    padding: 0 20px;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    bottom: 0;
    width: 100%;
    height: 65px;
    .bottom_left {
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 33px;
          height: 33px;
        }
        p {
          font-size: 13px;
          margin: 5px 0;
        }
      }
    }
    .choice {
      outline: none;
      border: none;
      margin-top: 3%;
      float: right;
      height: 40px;
      width: 140px;
      display: flex;
      align-items: center;
      background-color: rgb(229, 77, 14);
      border-radius: 2rem;
      .join1 {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
      }
      .joincar {
        margin-left: 15%;
        font-size: 17px;
        color: #fff;
      }
    }
  }
}
</style>