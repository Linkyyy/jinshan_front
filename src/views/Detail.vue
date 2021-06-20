<template>
  <div class="detail">
    <!-- 详情 {{ id }} -->
    <!-- 返回图标 -->
    <div class="left" @click="handleClick">
      <img src="../assets/left.png" class="return" />
    </div>
    <swiper
      :imgList="imgList1"
      :swiperConfigure="{ width: '96vw', height: '500px' }"
    ></swiper>
    <div class="div_information">
      <h1 class="price">{{ price }}</h1>
      <div class="div_info">
        <p>{{ label[0] }}</p>
        <p>库存:{{ stock }}</p>
      </div>
      <h1 class="title">
        {{ title }} <span class="div_label">{{ label[1] }}</span>
      </h1>
    </div>
    <div class="div_detail">
      <img :src="item" v-for="item in detail" :key="item" />
    </div>
    <!-- 底部导航栏 -->
    <div class="bottom" style="background-color: #fff">
      <div class="bottom_left">
        <div>
          <img src="../assets/shopping_full.png" />
          <p>购物车</p>
        </div>
        <div>
          <img src="../assets/favor_full.png" />
          <p>收藏</p>
        </div>
      </div>

      <button class="choice">
        <span class="join1"><em class="joincar">加入购物车</em></span>
      </button>
    </div>
  </div>
</template>
<script>
import Swiper from "../components/Swiper.vue";
export default {
  name: "Detail",
  components: {
    Swiper,
  },
  data() {
    return {
      title: "欧式水果叉不绣钢水果叉子韩国家用儿童创意可爱水果叉套装甜品叉",
      price: "￥33.9",
      stock: "100",
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
      imgList1: [
        require("../assets/lunbo/1.jpg"),
        require("../assets/lunbo/2.jpg"),
        require("../assets/lunbo/3.jpg"),
        require("../assets/lunbo/4.jpg"),
        require("../assets/lunbo/5.jpg"),
      ],
      index: 0,
      cat: ["装饰", "家用"],
      label: ["618大促", "满100立减99"],
      id: "94dac2ad28d8",
      time: 1622720155980,
      status: 1,
    };
  },
  created() {
    this.id = this.$route.query.id;
  },
  methods: {
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
          width: 35px;
          height: 35px;
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