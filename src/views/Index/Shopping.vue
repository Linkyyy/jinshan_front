<template>
  <div class="shopping">
    <nav-bar :title="'618主会场'" :isReturn="false"></nav-bar>
    <search-input
      :backColor="'transparent'"
      @clickSearch="handleClickSearch"
      @inputUpdate="handleUpdetaInput"
    ></search-input>
    <swiper
      :imgList="imgList"
      :swiperConfigure="{ width: '96vw', height: '210px' }"
    ></swiper>
    <div class="div_classification">
      <div
        class="classification_item"
        v-for="item in classificationList"
        :key="item.keyword"
        @click="handleChooseClassfy(item.keyword)"
      >
        <img :src="item.img" alt="" />
        <span>{{ item.text }}</span>
      </div>
    </div>
 <div class="div_goodList" ref="allWrapper" v-if="goodList.length>0">
      <div class="good_item_left" ref="leftWrapper">
        <div class="good_item" v-for="item in goodList_left" :key="item.id" @click="handleCheckDetail(item.id)">
          <img :src="item.cover" alt="" />
          <h1> <span>{{item.label[0]}}</span> {{ item.title }}</h1>
          <div class="item_info">
            <span>￥{{ item.price }}</span>
            <span>库存:{{ item.stock }}</span>
          </div>
        </div>
      </div>
      <div class="good_item_right" ref="rightWrapper">
        <div class="good_item" v-for="item in goodList_right" :key="item.id" @click="handleCheckDetail(item.id)">
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
// import Slider from "../../components/Slider.vue";
import Swiper from "../../components/Swiper.vue";
export default {
  name: "Shopping",
  components: {
    NavBar,
    SearchInput,
    Swiper,
  },
  data() {
    return {
      keyword: "",
      classificationList: [
        {
          img: require("../../assets/tv.png"),
          text: "家电",
          keyword: "家电",
        },
        {
          img: require("../../assets/converse.png"),
          text: "服饰",
          keyword: "服饰",
        },
        {
          img: require("../../assets/bag.png"),
          text: "日用",
          keyword: "日用",
        },
        {
          img: require("../../assets/burger.png"),
          text: "食品",
          keyword: "食品",
        },
      ],
      updateIndex:0,
      goodList: [],
      goodList_left:[],
      goodList_right:[],
      imgList: [
        "https://aecpm.alicdn.com/simba/img/TB1lUZLJVXXXXXtXFXXSutbFXXX.jpg",
        "https://img.alicdn.com/tfs/TB1_1OLxQL0gK0jSZFtXXXQCXXa-1130-500.jpg_q100.jpg_.webp",
        "https://img.alicdn.com/imgextra/i3/O1CN01Am8Sra21Zaice06ax_!!6000000006999-2-tps-1130-500.png_q100.jpg_.webp",
      ],
    };
  },
  created() {
    let that = this;
    this.$axios.post("/api/sku/list").then((res) => {
      that.goodList = res.data.rows;
      that.goodList_left.push(that.goodList[that.updateIndex]);
      that.updateIndex=that.updateIndex+1;
    });
  },
  computed: {
    // goodList_left() {
    //   let newList = [];
    //   this.goodList.forEach((item, index) => {
    //     if (index % 2 == 0) return newList.push(item);
    //   });
    //   return newList;
    // },
    // goodList_right() {
    //   let newList = [];
    //   this.goodList.map((item, index) => {
    //     if (index % 2 == 1) newList.push(item);
    //   });

    //   return newList;
    // },
  },
  methods: {
    handleClickSearch() {
      this.$router.push({ name: "Search", query: { keyword: this.keyword } });
    },
    handleChooseClassfy(keyword) {
      this.$router.push({ name: "Classification", query: { keyword } });
    },
    handleCheckDetail(id) {
      this.$router.push({ name: "Detail", query: { id } });
    },
    handleUpdetaInput(newVal) {
      this.keyword = newVal;
    },
  },
  updated(){
    let rightWrapper=this.$refs.rightWrapper;
    let leftWrapper=this.$refs.leftWrapper;
    // let allWrapper=this.$refs.allWrapper;
    
    if(this.updateIndex>=this.goodList.length){
      return;
    }
    if(leftWrapper.offsetHeight<=rightWrapper.offsetHeight){
      
      this.goodList_left.push(this.goodList[this.updateIndex])
      this.updateIndex=this.updateIndex+1;
    }
    else{
      
      this.goodList_right.push(this.goodList[this.updateIndex])
      this.updateIndex=this.updateIndex+1;
    }
  }
};
</script>
<style lang="less">
.shopping {
  overflow: hidden;
  background-color: #f4f4f4;
  .div_classification {
    box-sizing: border-box;
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
    margin-bottom: 60px;
    display: flex;
    width: 100vw;
    align-items: flex-start;
    .good_item_left{
      left: 3vw;
      position: relative;
    }
    .good_item_right{
            left: 6vw;
      position: relative;
    }
    .good_item {
      box-shadow: 0 0 9px 1px rgba(121, 121, 121, 0.2);
      margin-bottom: 12px;
      cursor: pointer;
      border-radius: 6px;
      width: 45vw;
      background-color: white;
      img {
        border-radius: 6px 6px 0 0;
        width: 100%;
      }
      h1 {
        font-size: 15px;
        padding: 5px 5px;
        line-height: 20px;
        span {
          background-color: #fc4d11;
          padding: 0 4px;
          border-radius: 5px;
          font-size: 10px;
          color: white;
        }
      }
      .item_info {
        display: flex;
        justify-content: space-between;
        padding: 5px 5px;
        span {
          &:nth-child(1) {
            color: #fa8472;
            font-weight: bold;
          }
          &:nth-child(2) {
            color: grey;
            font-size: 13px;
          }
        }
      }
    }
  }
}
</style>