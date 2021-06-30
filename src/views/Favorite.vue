<template>
  <div class="cart">
    <nav-bar :title="'我的收藏'" :isReturn="true"></nav-bar>
    <div class="top">
      <div class="total">共{{ rows.length }}件宝贝</div>
      <div class="delete" @click="removeItem">取消收藏</div>
    </div>
    <div class="item_wrapper">
      <div
        class="item"
        :class="{ active_item: rows[index].choose != false }"
        v-for="(item, index) in rows"
        :key="item.id"
        
      >
        <div class="choose" @click="choose(index)">
          <img
            v-if="rows[index].choose == false"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAMAAAAPzWOAAAAANlBMVEVHcEzMzMzNzc3V1dXOzs7Nzc3Nzc3Nzc3Nzc3Nzc3b29vMzMz////19fXu7u7a2trk5OTR0dG06x/LAAAAC3RSTlMAN84GVqG36X8jB0no5zwAAAGJSURBVFjDrVjZtoQgDFOEqUvZ/v9nRwGvy1UHMHmdMadNWmhpmlsMsleCaJqIhOrl0JRilGr++ghSciygaP8zrDxtLsVnesAnh2bYKKwzWvMMrY2zG80vdbo+/dO78Pke2vn0Y989hiFSDIYvYVI84iEYGfW0mm+hIw3JO46Yijf8CBOT6p84LP+EvWeJHI4z4O5YIofhLJhrFhnk0JwJHYQ5qTsEX7I5Zpbg0cHpThTksstIdGdBHBfBnWQZMr29cHpLaOk5z8VYxP389X6xIDtZ2l0glitgt1DaQndPPsdQVG0gMRQVzmSqU2RVhcZU8J4r4VPxq/I6O1bckg/VyrpKS6lauRqxamW9N6s/MvSeqydxoQtVvcGryaoRb3SNyop35qz20Ctzgj3UTO9JJgwJJB2IsBCLIcUGKXtIA0KOAsihhDkeIQc15MqAXF6YaxRyoWNGC8iQgxm3IIMfZgSFDMOYsRyzIGBWFczShFnfMIskZqXFLNeYNR/04AB6+gA9wpQ+B30B3RGo3Y8v7Z8AAAAASUVORK5CYII="
            alt=""
          />
          <img
            v-else
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABEBAMAAADKPY6BAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFZaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CkzCJ1kAAAAqUExURUdwTP9rAP9xAP9vAP9pAP9tAP9rAP9tAP9fAP90AP9XAP99AP9nAP9tACJieToAAAAIdFJOUwCH6CSqRmbMw7TcXwAAAy1JREFUSMd1lr+LE0EUxzdeFMuAdnfCgYIecqAiIlwTPQRBhHioaHd4ZRrxKrlOPBlCqhM8hmWLmJAsU1oIy1RayBax0EYC2f/F92tmZ5Lc1o/PfN+b73zfJkn43bv8bvvn9QcHyVnf+YdVVf2eTqfltc7qittbWQY1UDJVHy6tqniutRbKtK/Uo+WKu1Axm1XVfA4HlUqp3cWKRgoleA4d1AdM3oor1t4XGjFOL2Imt6KSvaKQijnJxc8chxUXbKGhJhNKSZRevh+UrBdIybSj9LFCmUGg1VqtQy0KKaZnasVdW1jXEVFEjBn7wVubotoMp+vnghTjLuKOhRqk6GguKjdmKCVH1lLPuvJzcZSJF+tr3Fy4Bj4WvIPn6FQa4rk4ipz0BCHUNY6OKFhDWsxI+oFPc0tLFOqpSVJsGkwu0GLaIiWYLs6FOuoxBcWse0oW+UWRFhJzs9aio5tminFquaPYL6wF9JJaOKbQtV8A8/HljV5P9J6zjElDvyi1n7xiLWZTGiqKWMunJLnIEGipa+WkyC9gyfs9poy5Z/BLEfrlF3T6WLQM6IbwoMgvAGkqOWiEZvEHOb8IhGsmMrki8ksLITJd81VKbOiXHwjx0zWJQEK/MCSX6UoJUE4O3vA9OkhNES32e7K2xfkiSpwW47V8hsdCfiFI6f0CHR0J5QskyDbKRUg/uOmJjM7qb5Ame0D5A5CN0C8jfwHpVfBORpCG+CWXC+i60Z0A5jVD6AnIcOEad8QvujgEDEMiylAsha47BcwzgQRaNsWYNN1DfuLukUhHbbE3hccplWzUWSf2duPFO3orEMo6d0fuqaUUQYi54nOXtQz8g6U3AphG8I5y92CbNWX278XTxdfYduHBposSU7R0XARxTZ0vfUcZ+SDjxJwF+0i0DH0cpgv54v3S8qFq43zxyTCpo5nlLufLMAz4aB+VTkunXhOcddE+Qr+Mg2XDWafjlAqXDdxTvI8oDk24smDxxfuI/RItvmTPxvuIao4XlnC8j9TyEk4a8T5CSmvVD0HU0e7K34p6H5Wrfivo58Tvo9U/J/KLQ1rO+sWRH6W/iz9K/wEP1oz20WaXfgAAAABJRU5ErkJggg=="
            alt=""
          />
        </div>
        <img @click="handleCheckDetail(item.id)" :src="item.cover" alt="" />
        <div @click="handleCheckDetail(item.id)" class="miaoshu">
          <div class="summary">
            {{ item.title }}
          </div>
          <div class="label_wrapper">
            <div class="label" v-for="label in item.label" :key="label">
              {{ label }}
            </div>
          </div>
          <div class="cat_wrapper">
            <div class="cat" v-for="cat in item.cat" :key="cat">
              {{ cat }}
            </div>
          </div>
          <div class="buy">
            <div class="price">￥{{ item.price }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "../components/NavBar.vue";
export default {
  name: "Cart",
  beforeRouteEnter: (to, from, next) => {
    let isLogin = localStorage.getItem("isLogin");
    if (isLogin) next();
    else next("/login");
  },
  components: {
    NavBar,
  },
  created() {
    this.$axios.post("/api/star/list").then((res) => {
      this.rows = res.data.rows;
      this.setNumber();
    });
  },
  data() {
    return {
      rows: [],
    };
  },
  methods: {
    //判断是否全选
    allChoose() {
      for (var i in this.rows) {
        if (this.rows[i].choose == false) {
          return false;
        }
      }
      if (this.rows.length == 0) {
        return false;
      }
      return true;
    },
    //判断是否有商品选中
    IshaveGood() {
      var sum = 0;
      for (var i of this.rows) {
        if (i.choose == true) {
          sum++;
        }
      }
      return sum;
    },
    handleCheckDetail(id) {
      this.$router.push({ name: "Detail", query: { id } });
    },
    //切换选中
    choose(index) {
      this.rows[index].choose = !this.rows[index].choose;
      this.$forceUpdate();
    },
    setNumber() {
      for (var i of this.rows) {
        i["number"] = 1;
        i["choose"] = false;
      }
    },
    //加减商品数量
    jian(index) {
      if (this.rows[index].number >= 2) {
        this.rows[index].number--;
      }
      this.$forceUpdate();
    },
    jia(index) {
      this.rows[index].number++;
      this.$forceUpdate();
    },
    //删除商品
    removeItem() {
      let temp = [];
      let ids = [];
      for (let i in this.rows) {
        if (this.rows[i].choose == true) {
          temp.push(i);
          ids.push(this.rows[i].id);
        }
      }

      this.$axios.post("/api/star/remove", { ids }).then(() => {
        temp = temp.reverse();
        for (var j of temp) {
          this.rows.splice(j, 1);
        }
      });

      this.$forceUpdate();
    },
    //计算商品价格
    sumPrice() {
      var sum = 0;
      for (var i in this.rows) {
        if (this.rows[i].choose == true) {
          sum += this.rows[i].price * this.rows[i].number;
        }
      }
      return parseFloat(sum).toFixed(2);
    },
    //全选
    chooseAll() {
      for (var i in this.rows) {
        this.rows[i].choose = true;
      }
      this.allChoose();
      this.$forceUpdate();
    },
    //全不选
    RemoveAll() {
      for (var i in this.rows) {
        this.rows[i].choose = false;
      }
      this.allChoose();
      this.$forceUpdate();
    },
  },
};
</script>
<style lang="less">
.cart {
  background-color: #f4f4f4;
  .top {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    line-height: 22px;
    margin: 0 2vw;
    margin-top: 8px;
    color: black;
    .title {
      font-size: 20px;
      font-weight: 500;
    }
    .delete {
      font-size: 16px;
    }
  }
  .total {
    color: gray;
    margin: 0 2vw;
    margin-top: 10px;
    font-size: 14px;
  }
  .item_wrapper {
    display: flex;
    flex-direction: column;
    border: 0px solid black;
    position: relative;
    box-sizing: border-box;
    display: flex;
    -webkit-box-orient: vertical;
    flex-direction: column;
    align-content: flex-start;
    flex-shrink: 0;
    .active_item {
      background-color: #f9f9f9 !important;
    }
    .item {
      margin: 0 auto;
      width: 94vw;
      // padding: 6px 0;
      border-radius: 12px;
      background-color: white;
      margin: 8px auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      .choose {
        width: 12vw;
        display: flex;
        height: 28vw;
        padding: 0 3vw;
        align-items: center;
        justify-content: center;
        img {
          width: 5.5vw;
          height: 5.5vw;
        }
      }

      img:nth-child(2) {
        width: 28vw;
        border-radius: 10px;
        // height: 90px;
        background-color: rgba(0, 0, 0, 0.02);
      }
      .miaoshu {
        display: flex;
        flex-direction: column;
        margin-top: 5px;
        margin-left: 12px;
        align-self: start;
        .summary {
          width: 95%;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          font-size: 15px;
          -webkit-box-orient: vertical;
          line-height: 5.5vw;
          color: rgb(51, 51, 51);
        }
        .label_wrapper {
          margin: 6px 0;
          display: flex;
          flex-direction: row;
          .label {
            color: rgb(219, 14, 15);
            margin: 0 2px;
            font-size: 13px;
          }
        }
        .cat_wrapper {
          display: flex;
          width: fit-content;
          flex-direction: row;
          color: rgb(153, 153, 153);
          margin: 4px 2px;
          height: auto;
          padding: 3px;
          border-radius: 3px;
          background-color: rgba(236, 236, 236, 0.298);
          .cat {
            margin: 0 2px;
            font-size: 13px;
          }
        }
        .buy {
          align-items: center;
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          .price {
            color: rgb(219, 14, 15);
            font-size: 14px;
          }
          .number {
            margin: 10px;
            display: flex;
            flex-direction: row;
            .jian,
            .jia {
              width: 25px;
              height: 22px;
            }
            input {
              outline: none;
              border: 1px solid rgb(240, 240, 240);
              width: 30px;
              display: flex;
              align-items: center;
              justify-content: center;
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>