<template>
  <div class="products container">
    <loading :active.sync="isLoading"></loading>
    <div id="cart">
      <router-link to="/cart">
        <i class="fas fa-shopping-cart"></i>
        <label for="">購物車</label>
      </router-link>
      <div class="badge badge-pill badge-danger badgePos">0</div>
    </div>
    <!-- <h2>商品列表</h2> -->
    <div class="row">
      <div class="col-md-3">
        <div class="list-group" style="margin: 10px 0px; border-radius: 10px;">
          <a href="#" class="list-group-item list-group-item-action category">
            <i class="fas fa-cookie-bite"></i>&emsp;&emsp;&emsp;全部商品</a>
          <a href="#" class="list-group-item list-group-item-action category">
            <i class="fas fa-cookie-bite"></i>&emsp;&emsp;&emsp;招牌雪球</a>
          <a href="#" class="list-group-item list-group-item-action category">
            <i class="fas fa-cookie-bite"></i>&emsp;&emsp;&emsp;磅蛋糕</a>
          <a href="#" class="list-group-item list-group-item-action category">
            <i class="fas fa-cookie-bite"></i>&emsp;&emsp;&emsp;花生醬餅乾</a>
          <a href="#" class="list-group-item list-group-item-action category">
            <i class="fas fa-cookie-bite"></i>&emsp;&emsp;&emsp;節日禮盒</a>
          <!-- <a href="#" class="list-group-item list-group-item-action disabled"
          tabindex="-1" aria-disabled="true">Vestibulum at eros</a> -->
        </div>
      </div>
      <div class="col-md-9 showProducts">
        <div class="card cardClass" v-for="item in products" :key="item.id" >
          <img class="card-img-top" :src="item.imageUrl[0]" alt="">
          <div class="card-body">
            <h5 class="card-title">
              {{item.title}}   <span class="badge badge-pill badge-warning">
              {{item.category}}</span></h5>
            <p class="card-text">{{item.content}}</p>
            <router-link :to="`/product/${item.id}`" style="color: #FFF;">商品介紹</router-link>
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
  #cart {
    padding-top: 10px;
    position: fixed;
    right: 30px;
    top: 50%;
    height: 70px;
    width: 70px;
    border: 2px solid #ced4da;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #cart a {
    text-decoration: none;
  }

  #cart i {
    font-size: 30px;
    color: #FFF;
    z-index: 1001;
  }

  #cart .badgePos {
    position: absolute;
    top: 5px;
    right: 5px;
  }

  #cart label {
    display: block;
    color: #FFF;
    font-size: 8px;
  }

  .products {
    margin: auto;
    padding-bottom: 100px;
  }

  .showProducts {
    /* width: 50%; */
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    /* box-shadow: 0 0 10px rgba(0,0,0,1.00); */
  }

  .showProducts::after {
    content: "";
    width: 30%;
  }

  .cardClass {
    width: 30%;
    height: auto;
    /* height: 400px; */
    margin: 10px 0px;
    background-color: #302D2F;
    border: .1px solid #F0760F;
    overflow: hidden;
  }

  .card-body p {
    /* height: 100px; */
    padding: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  img {
    height: 200px;
    width: auto;
    /* max-height: 100px; */
    overflow: hidden;
  }

  .category {
    text-align: left;
    background-color: #302D2F;
    color: white;
    border: .1px solid #F0760F;
    border-bottom: none;
    font-weight: 500;
    transition: all 0.5s;
    /* border-radius: 5px; */
  }

  .category:last-child {
    background-color: #302D2F;
    color: white;
    border: .1px solid #F0760F;
    /* border-bottom: none; */
    font-weight: 500;
    transition: all 0.5s;
  }

  .category:hover {
    background-color: #F0760F;
    color: white;
  }
</style>
