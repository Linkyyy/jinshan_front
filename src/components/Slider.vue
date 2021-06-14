<template>
  <div class="slider">
    <img
      :src="imgList[currentIndex]"
      alt=""
      draggable="false"
      @mousedown="handleMousedown"
      @mouseup="handleMouseup"
    />
    <ul>
      <li
        v-for="(item, index) in imgList.length"
        :key="item"
        :class="[currentIndex == index ? 'li_select' : '']"
        @click="handleClickLi(index)"
      ></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Slider",
  props: {
    imgList: Array,
  },
  data() {
    return {
      currentIndex: 0,
      timer: null,
    };
  },
  created() {
    this.timer = setInterval(() => {
      this.nextPage(this.nextIndex);
    }, 3000);
  },
  methods: {
    handleClickLi(index) {
      this.currentIndex = index;
    },
    nextPage() {
      this.currentIndex = this.currentIndex + 1;
      if (this.currentIndex == this.imgList.length) {
        this.currentIndex = 0;
      }
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.nextPage(this.nextIndex);
      }, 3000);
    },
    prePage() {
      this.currentIndex = this.currentIndex - 1;
      if (this.currentIndex < 0) {
        this.currentIndex = this.imgList.length - 1;
      }
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.nextPage(this.nextIndex);
      }, 3000);
    },
    handleMousedown(e) {
      this.downX = e.x;
      this.downY = e.y;
    },
    handleMouseup(e) {
      let upX = e.x;
      let upY = e.y;
      if (this.downX - upX > 60 && Math.abs(this.downY - upY) <= 50) {
        this.nextPage();
      } else if (this.downX - upX < -60 && Math.abs(this.downY - upY) <= 50) {
        this.prePage();
      }
    },
  },
};
</script>
<style lang="less">
.slider {
  margin: 10px 0 10px 0;
  position: relative;
  left: 2vw;
  width: 96vw;
  height: 210px;
  border-radius: 10px;
  box-shadow: 0 0 9px 1px rgba(128, 128, 128, 0.3);
  img {
    -webkit-user-drag: none;
    border-radius: 10px;
    width: 100%;
    max-height: 100%;
  }
  ul {
    display: flex;
    position: absolute;
    bottom: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    li {
      margin: 0 7px;
      background-color: white;
      height: 7px;
      width: 7px;
      border-radius: 10px;
    }
    .li_select {
      width: 15px;
      background-color: #f50d10;
    }
  }
}
</style>