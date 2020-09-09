<template>
  <div class="cart container">
    <!-- <h3>購物車</h3> -->
    <loading :active.sync="isLoading"></loading>
    <div class="orderProgress">
      <step-progress :steps="mySteps" :current-step="currentStep"
      icon-class="fa fa-check" active-color="#F0760F" passive-color="#F0760F"
      :active-thickness="active_thick" :passive-thickness="passive_thick"
      :line-thickness="line_thick">
      </step-progress>
    </div>
    <div v-if="orderPage">
      <div class="row orderFile">
        <div class="col-md-7 orderInfo">
          <!-- <h4>訂單資訊</h4> -->
          <form>
            <div class="form-group">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <validation-provider v-slot="{ errors, classes }" rules="required">
                    <label for="nameInput">姓名:</label>
                    <input type="text" v-model="form.name" class="form-control" id="name"
                    placeholder="姓名" :class="classes">
                    <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
                  </validation-provider>
                </div>
                <div class="col-md-6 mb-3">
                  <validation-provider v-slot="{ errors, classes }" rules="required">
                    <label for="phone">電話:</label>
                    <input type="text" v-model="form.phone" class="form-control" id="phone"
                    placeholder="電話" :class="classes">
                    <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
                  </validation-provider>
                </div>
              </div>
              <div class="mb-3">
                <validation-provider v-slot="{ errors, classes }" rules="required">
                  <label for="email">電子郵件:</label>
                  <input type="text" class="form-control" v-model="form.email" id="email"
                  placeholder="電子郵件" :class="classes">
                  <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <div class="mb-3">
                <validation-provider v-slot="{ errors, classes }" rules="required">
                  <label for="address">地址:</label>
                  <input type="text" class="form-control" v-model="form.address" id="address"
                  placeholder="地址" :class="classes">
                  <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <div class="mb-3">
                <label for="note">備註:</label>
                <textarea type="text-area" class="form-control"></textarea>
              </div>
            </div>
          </form>
        </div>
        <div class="col-md-5 orderList">
          <!-- <h4>購物清單</h4> -->
          <table class="table mt-4" style="border-bottom: 3px solid #F0760F;">
            <thead class="thead" style="color: #F0760F;">
              <tr>
                <th scope="col">商品名稱</th>
                <th scope="col">單價</th>
                <th scope="col">數量</th>
                <th scope="col">刪除</th>
              </tr>
            </thead>
            <tbody v-if="cart.length" style="color: white;">
              <tr v-for="item in cart" :key="item.id">
                <td>{{item.product.title}}</td>
                <td>{{item.product.price}}</td>
                <td>{{item.quantity}}</td>
                <td class="align-middle">
                  <button type="button" class="btn btn-outline-danger btn-sm"
                  @click="delFromCart(item.product.id)">
                    <i class="far fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="summary">
            <h3>總計NT${{summary}}</h3>
            <button type="submit" class="btn btn-warning btnSubmit" :disabled="invalid"
            @click="nextStep('payPage')">
              <i class="fas fa-cash-register"></i> 結帳
            </button>
          </div>
        </div>
      </div>
      <!-- <div class="btGroup"> -->
      <button type="submit" class="btn btn-warning btnSubmit" :disabled="invalid"
      style="margin:auto;">
        <router-link to="/products"><i class="fas fa-cash-register"></i> 繼續購物</router-link>
      </button>
    </div>
    <pay v-if="payPage" :cart="cart" :profile="form" :summary="summary" @paidok="currentStep = 2"/>
    <!-- <pay/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import StepProgress from 'vue-step-progress';
import 'vue-step-progress/dist/main.css';
import { ValidationProvider, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import Pay from '@/components/Pay.vue';

extend('required', {
  ...required,
  message: 'This field is required',
});

export default {
  name: 'Cart',
  components: {
    StepProgress,
    ValidationProvider,
    Pay,
  },
  data() {
    return {
      isLoading: false,
      orderPage: true,
      payPage: false,
      // summaryPrice: 0,
      form: {
        name: '',
        email: '',
        phone: '',
        address: '',
        note: '',
      },
      mySteps: [
        '訂單資料',
        '付款',
        '完成',
      ],
      currentStep: 0,
      active_thick: 3,
      passive_thick: 3,
      line_thick: 3,
      invalid: false,
      pages: '',
      cart: [
        {
          product: {
            title: '鹹蛋黃雪球',
            price: 140,
          },
          quantity: 10,
        },
      ],
    };
  },
  methods: {
    getshoppingList(page) {
      // const page = 1;
      // console.log(`page = ${page}`);
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping?page=${page}`;
      this.$http.get(api).then((rsp) => {
        this.isLoading = false;
        this.cart = rsp.data.data;
        this.pages = rsp.data.meta.pagination;
        // console.log(`shoppingList: ${JSON.stringify(this.cart)}`);
        // console.log(`pages: ${JSON.stringify(this.pages)}`);
        // this.pagination = response.data.meta.pagination;
      }).catch(() => {
        this.isLoading = false;
        // console.log(err);
      });
    },
    delFromCart(id) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping/${id}`;
      this.$http.delete(api).then(() => {
        // console.log(rsp);
        this.getshoppingList(1);
        this.isLoading = false;
      }).catch(() => {
        // console.log(err);
        this.isLoading = false;
      });
    },
    nextStep(step) {
      if (step === 'payPage') {
        this.orderPage = false;
        this.payPage = true;
        this.currentStep = 1;
      }
    },
  },
  computed: {
    summary() {
      let summaryPrice = 0;
      this.cart.forEach((item) => {
        summaryPrice += item.quantity * item.product.price;
      });
      return summaryPrice;
    },
  },
  mounted() {
    this.getshoppingList();
  },
};
</script>

<style scoped>
  .cart {
    margin: auto;
    padding-bottom: 100px;
    text-align: left;
  }

  .orderProgress {
    /* border-bottom: 1px solid #F0760F; */
    padding: 30px 200px;
  }

  .orderFile {
    padding: 30px 100px;
  }

  .orderInfo h4 {
    text-align: left;
  }

  label {
    font-weight: 800;
  }

  .btnSubmit {
    background-color: #F0760F;
    border: 1px solid #F0760F;
    /* transition: all 0.1s; */
    display: block;
    /* margin: auto; */
    /* text-align: center !important; */
  }

  .btnSubmit:hover {
    background-color: #FFF;
    color: #F0760F;
  }

  .btnSubmit a {
    color: black;
    text-decoration: none;
  }

  .btnSubmit:hover a {
    color: #F0760F;
    text-decoration: none;
  }

  /* .btGroup {
    display: flex;
    justify-content: center;
  } */

  /* .btGroup a {
    color: black;
    text-decoration: none;
  } */

  /* .btGroup button:last-child:hover a {
    background-color: #FFF;
    color: #F0760F;
  } */

  .summary {
    display: flex;
    justify-content: space-between;
  }

  /* .orderList {
    text-align: left;
  } */
</style>
