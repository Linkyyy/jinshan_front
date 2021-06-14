<template>
  <div class="shopping">
    <nav-bar :title="'618主会场'" :isReturn="false"></nav-bar>
    <search-input :backColor="'transparent'" @clickSearch="handleClickSearch" @inputUpdate="handleUpdetaInput"></search-input>
    <slider :imgList="imgList"></slider>
    <div class="div_classification">
      <div
        class="classification_item"
        v-for="item in classificationList"
        :key="item"
        @click="handleChooseClassfy(item.keyword)"
      >
        <img :src="item.img" alt="" />
        <span>{{ item.text }}</span>
      </div>
    </div>
    <div class="div_goodList">
      <div class="good_item_left">
        <div class="good_item" v-for="item in goodList_left" :key="item" @click="handleCheckDetail(item.id)">
          <img :src="item.cover" alt="" />
          <h1> <span>{{item.label[0]}}</span> {{ item.title }}</h1>
          <div class="item_info">
            <span>￥{{ item.price }}</span>
            <span>库存:{{ item.stock }}</span>
          </div>
        </div>
      </div>
      <div class="good_item_right">
        <div class="good_item" v-for="item in goodList_right" :key="item" @click="handleCheckDetail(item.id)">
          <img :src="item.cover" alt="" />
          <h1> <span>{{item.label[0]}}</span> {{ item.title }}</h1>
          <div class="item_info">
            <span>￥{{ item.price }}</span>
            <span>库存:{{ item.stock }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "../../components/NavBar.vue";
import SearchInput from "../../components/SearchInput.vue";
import Slider from "../../components/Slider.vue";
export default {
  name: "Shopping",
  components: {
    NavBar,
    SearchInput,
    Slider
  },
  data() {
    return {
      keyword:"",
      classificationList: [
        {
          img: require("../../assets/tv.png"),
          text: "数码",
          keyword:"数码"
        },
        {
          img: require("../../assets/converse.png"),
          text: "运动",
          keyword: "运动",
        },
        {
          img: require("../../assets/book.png"),
          text: "图书",
          keyword: "图书",
        },
        {
          img: require("../../assets/burger.png"),
          text: "食品",
          keyword: "食品",
        },
      ],
      goodList: [
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
      imgList:[
        "https://aecpm.alicdn.com/simba/img/TB1lUZLJVXXXXXtXFXXSutbFXXX.jpg",
        "https://img.alicdn.com/tfs/TB1_1OLxQL0gK0jSZFtXXXQCXXa-1130-500.jpg_q100.jpg_.webp",
        "https://img.alicdn.com/imgextra/i3/O1CN01Am8Sra21Zaice06ax_!!6000000006999-2-tps-1130-500.png_q100.jpg_.webp"
      ]
    };
  },
  computed: {
    goodList_left() {
      let newList=[];
      this.goodList.forEach((item, index) => {
        if (index % 2 == 0) return newList.push(item);})
        console.log(newList);
      return newList;
    },
    goodList_right() {
      let newList=[];
      this.goodList.map((item, index) => {
        if (index % 2 == 1) newList.push(item)})

      return newList;
    },
  },
  methods:{
    handleClickSearch(){
      this.$router.push({name:'Search',query:{keyword:this.keyword}});
    },
    handleChooseClassfy(keyword){
      this.$router.push({name:'Classification',query:{keyword}});
    },
    handleCheckDetail(id){
      this.$router.push({name:'Detail',query:{id}});
    },
    handleUpdetaInput(newVal){
      this.keyword=newVal
    },

  }
};
</script>
<style lang="less">
.shopping {
  background-color: #f4f4f4;
  .div_classification {
    border-radius: 10px;
    position: relative;
    margin: 10px 0;
    padding: 10px 0;
    width: 96vw;
    left: 2vw;
    background: white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .classification_item {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        height: 45px;
        width: 45px;
      }
      span {
        margin-top: 3px;
        font-size: 15px;
        color: rgb(59, 59, 59);
      }
    }
  }
  .div_goodList {
    .good_item_left {
      position: absolute;
      left: 2vw;
    }
    .good_item_right {
      position: absolute;
      left: 51vw;
    }
    .good_item {
      cursor: pointer;
      border-radius: 10px;
      width: 46vw;
      background-color: white;
      img {
        border-radius: 10px 10px 0 0;
        width: 100%;
      }
      h1 {
        font-size: 15px;
        padding:  5px 5px;
        line-height: 20px;
        span{
          background-color: #FC4D11;
          padding: 0 4px;
          border-radius: 5px;
          font-size: 10px;
          color: white;
        }
      }  
      .item_info{
        display: flex;
        justify-content: space-between;
        padding: 5px 5px;
        span{
          &:nth-child(1){
            color: #FA8472;
            font-weight: bold;
          }
          &:nth-child(2){
            color: grey;
            font-size: 13px;
          }
        }
      }
    }
  }
}
</style>