<template>
  <div class="oneProduct container">
    <loading :active.sync="isLoading"></loading>
    <div id="cart">
      <router-link to="/cart">
        <i class="fas fa-shopping-cart"></i>
        <label for="">購物車</label>
      </router-link>
      <div class="badge badge-pill badge-danger badgePos">{{cartNum}}</div>
    </div>
    <div class="row" style="margin-top:50px;">
      <div class="col-md-6">
        <div id="carouselExampleControls" class="carousel slide foodShow" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img v-if="product.imageUrl !== undefined" :src="image"
              class="d-block w-100" alt="">
              <div class="carousel-caption d-none d-md-block">
                <h2>{{product.title}}</h2>
                <!-- <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> -->
              </div>
            </div>
            <!-- <div class="carousel-item">
              <img src="../assets/gift2.jpg" class="d-block w-100" alt="">
              <div class="carousel-caption d-none d-md-block">
                <h4>中秋禮盒</h4>
              </div>
            </div>
            <div class="carousel-item">
              <img src="../assets/gift3.jpg" class="d-block w-100" alt="">
              <div class="carousel-caption d-none d-md-block">
                <h4>中秋禮盒</h4>
              </div>
            </div> -->
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button"
          data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button"
          data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-md-6">
        <h3 class="bottomLine"><i class="fas fa-birthday-cake"></i> {{product.title}}</h3>
        <h5 style="text-align: left; padding-top: 10px;">[產品說明]</h5>
        <p class="bottomLine" style="text-align: left; color: white;">{{product.content}}</p>
        <div class="price">
          <h3>特價NT${{product.price}}</h3>
          <h5><del>原價NT${{product.origin_price}}</del></h5>
        </div>
        <div class="pushToCart">
          <div class="btn-group mr-2" role="group" aria-label="Second group">
            <button type="button" class="btn btn-secondary" @click="setOrderNumber('-')">-</button>
            <input type="text" v-model="orderNum">
            <button type="button" class="btn btn-secondary" @click="setOrderNumber('+')">+</button>
          </div>
          <div>
            <label class="cartLabel">總價NT${{product.origin_price*orderNum}}</label>
            <button class="btn" @click="addToCart"><i class="fas fa-shopping-cart"></i> 購買</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data() {
    return {
      orderNum: 1,
      isLoading: true,
      cartNum: 0,
      product: {},
    };
  },
  created() {
    this.isLoading = true;
    const { id } = this.$route.params;
    // console.log(id);
    const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/product/${id}`;
    this.$http.get(url).then((res) => {
      // console.log(res);
      this.isLoading = false;
      this.product = res.data.data;
    });
    this.getshoppingList();
  },
  methods: {
    setOrderNumber(action) {
      if (action === '-') {
        if (this.orderNum > 1) {
          this.orderNum -= 1;
        }
      } else {
        this.orderNum += 1;
      }
    },
    getshoppingList(page) {
      // const page = 1;
      // console.log(`page = ${page}`);
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping?page=${page}`;
      this.$http.get(api).then((rsp) => {
        this.isLoading = false;
        const cart = rsp.data.data;
        this.cartNum = cart.length;
        // this.pages = rsp.data.meta.pagination;
        // console.log(`shoppingList: ${JSON.stringify(cart)}`);
        // console.log(`shoppingList: ${cart.length}`);
        // console.log(`pages: ${JSON.stringify(this.pages)}`);
        // this.pagination = response.data.meta.pagination;
      }).catch(() => {
        this.isLoading = false;
        // console.log(err);
      });
    },
    addToCart() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
      const param = {};
      param.product = this.product.id;
      param.quantity = this.orderNum;
      // console.log(JSON.stringify(param));
      this.$http.post(api, param).then(() => {
        // console.log(rsp);
        // this.isLoading = false;
        this.getshoppingList();
      }).catch(() => {
        // if (err.name === 'TypeError') {
        //   alert('check the value input!!');
        // }
        // console.log(err.name);
        this.isLoading = false;
      });
    },
  },
  computed: {
    image() {
      return this.product.imageUrl[0];
    },
  },
};
</script>

<style scoped>
  .oneProduct {
    margin: auto;
    padding-bottom: 231px;
  }

  #cart {
    padding-top: 10px;
    position: fixed;
    right: 30px;
    top: 5%;
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

  .foodShow {
    width: 100%;
    height: auto;
    margin: auto;
    transform: translateX(0);
    transition-delay: 1s;
  }

  .carousel-item img {
    border: 1px solid #F0760F;
  }

  .bottomLine {
    padding-bottom: 10px;
    border-bottom: 1px solid #F0760F;
  }

  .price {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .pushToCart {
    padding: 120px 5px;
    display: flex;
    justify-content: space-between;
  }

  .pushToCart .btn-group .btn:first-child{
    border-radius: 100px 0 0 100px;
    background-color: #F0760F;
    font-size: 20px;
    font-weight: 800;
    width: 40px;
    border-color: #F0760F;
  }

  .pushToCart .btn-group input {
    border-color: none;
    text-align: center;
    background-color: #302D2F;
    border: 2px solid #F0760F;
    color: white;
    font-weight: 800;
    font-size: 20px;
    width: 80px;
  }

  .pushToCart .btn-group .btn:last-child{
    border-radius: 0 100px 100px 0;
    width: 40px;
    background-color: #F0760F;
    font-weight: 800;
    font-size: 20px;
    border-color: #F0760F;
  }

  .pushToCart .btn {
    background-color: #F0760F;
    color: white;
  }

  .cartLabel {
    display: inline-block;
    margin: 0px 15px;
    font-weight: bold;
    font-size: 20px;
  }
</style>
