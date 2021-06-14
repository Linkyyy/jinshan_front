<template>
  <div class="tabBar">
    <div
      v-for="(item, index) in tabList"
      :key="item.text"
      @click="handleChoose(index,item.to)"
      
    >
      <i
        :class="[
          'iconfont',
           item.class
        ]"
        :style="{color:$route.path==item.to?'#FC4D11':''}"
      ></i>
      <span :style="{color:$route.path==item.to?'#FC4D11':''}">{{ item.text }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabBar",
  data() {
    return {
      currentSelect: 0,
      tabList: [
        {
          text: "商城",
          class: "icon-gouwu",
          to: "/shopping",
        },
        {
          text: "购物车",
          class: "icon-gouwuche",
          to: "/cart",
        },
        {
          text: "个人",
          class: "icon-geren",
          to: "/user",
        },
      ],
    };
  },
  methods: {
    handleChoose(index,path) {
      this.currentSelect = index;
      this.$router.push(path)
    },
  },
};
</script>

<style lang="less">
@font-face {
  font-family: "iconfont"; /* Project id 2609278 */
  src: url("//at.alicdn.com/t/font_2609278_8j2ciiysjrb.woff2?t=1623558844091")
      format("woff2"),
    url("//at.alicdn.com/t/font_2609278_8j2ciiysjrb.woff?t=1623558844091")
      format("woff"),
    url("//at.alicdn.com/t/font_2609278_8j2ciiysjrb.ttf?t=1623558844091")
      format("truetype");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 30px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon-gouwuche:before {
  content: "\e602";
}
.icon-gouwu:before {
  content: "\e624";
}
.icon-geren:before {
  content: "\e706";
}

.tabBar {
  position: fixed;
  bottom: 0;
  box-sizing: border-box;
  width: 100vw;
  height: 55px;
  background: #f8f8f8;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  div {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      color: rgb(70, 70, 70);
      margin-top: 3px;
      font-size: 14px;
    }
  }
}
</style>
