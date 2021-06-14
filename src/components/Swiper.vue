<template>
  <div class="swiper">
    <div class="swiper-container" :style="{width:swiperConfigure.width,height:swiperConfigure.height}">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in imgList" :key="item">
          <img :src="item" alt="" />
        </div>
      </div>
      <!-- 分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  name: "Swiper",
  props: {
    imgList: Array,
    swiperConfigure:Object
  },
  mounted() {
    new Swiper(".swiper-container", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
  },
};
</script>
<style lang="less">
.swiper {
  .swiper-container {
    position: relative;
    width: 96vw;
    height: 210px;
    img {
      border-radius: 10px;
      width: 100%;
      height: 100%;
    }
    .swiper-pagination-bullet-active {
      background-color: #e8561a;
      width: 20px;
      border-radius: 20px;
    }
  }
}
</style>