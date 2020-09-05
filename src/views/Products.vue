<template>
  <div class="products container">
    <loading :active.sync="isLoading"></loading>
    <!-- <h2>商品列表</h2> -->
    <div class="row">
      <div class="col-md-3">
        <div class="list-group" style="margin: 10px 0px;">
          <a href="#" class="list-group-item list-group-item-action category">招牌雪球</a>
          <a href="#" class="list-group-item list-group-item-action category">磅蛋糕</a>
          <a href="#" class="list-group-item list-group-item-action category">花生醬餅乾</a>
          <a href="#" class="list-group-item list-group-item-action category">節日禮盒</a>
          <!-- <a href="#" class="list-group-item list-group-item-action disabled"
          tabindex="-1" aria-disabled="true">Vestibulum at eros</a> -->
        </div>
      </div>
      <div class="col-md-9 showProducts">
        <div class="card cardClass" v-for="item in products" :key="item.id" >
          <img class="card-img-top" :src="item.imageUrl[0]" alt="">
          <div class="card-body">
            <h5 class="card-title">{{item.title}}</h5>
            <p class="card-text">{{item.content}}</p>
            <router-link :to="`/product/${item.id}`">商品介紹</router-link>
            <!-- <button class="btn btn-primary">詳細介紹</button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      isLoading: false,
      products: [
        {
          id: 1586934917210,
          unit: '條',
          category: '法國麵包',
          title: '跟你一樣長的法國麵包',
          origin_price: 100,
          price: 80,
          description: '過來嚐嚐我又長又硬的法國麵包',
          content: '又硬又長',
          enabled: 1,
          imageUrl: ['https://images.unsplash.com/photo-1456765447332-d79762cdcbe4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1488&q=80'],
        },
      ],
    };
  },
  props: {},
  methods: {},
  created() {
    this.isLoading = true;
    const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/products`;
    this.$http.get(url)
      .then((res) => {
        // console.log(res);
        this.products = res.data.data;
        this.isLoading = false;
      });
  },
};
</script>

<style scoped>
  .products {
    margin: auto;
    padding-bottom: 100px;
  }

  .showProducts {
    /* width: 50%; */
    display: flex;
    justify-content: center;
  }

  .cardClass {
    width: 18rem;
    margin: 10px;
    background-color: #302D2F;
    border: .1px solid #F0760F;
  }

  img {
    width: 100%;
    height: auto;
    max-height: 200px;
    overflow: hidden;
  }

  .category {
    background-color: #302D2F;
    color: white;
    border: .1px solid #F0760F;
    font-weight: 500;
    transition: all 0.5s;
  }

  .category:hover {
    background-color: #F0760F;
    color: white;
  }
</style>
