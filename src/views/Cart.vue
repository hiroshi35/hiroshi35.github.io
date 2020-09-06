<template>
  <div class="cart container">
    <!-- <h3>購物車</h3> -->
    <div class="orderProgress">
      <step-progress :steps="mySteps" :current-step="currentStep"
      icon-class="fa fa-check" active-color="#F0760F" passive-color="#F0760F"
      :active-thickness="active_thick" :passive-thickness="passive_thick"
      :line-thickness="line_thick">
      </step-progress>
    </div>
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
        <table class="table mt-4">
          <thead class="thead" style="color: #F0760F;">
            <tr>
              <th scope="col">商品名稱</th>
              <th scope="col">單價</th>
              <th scope="col">數量</th>
              <th scope="col">刪除</th>
            </tr>
          </thead>
          <tbody v-if="shoppingList.length" style="color: white;">
            <tr v-for="item in shoppingList" :key="item.id">
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
      </div>
    </div>
    <div>
      <button type="submit" class="btn btn-warning btnSubmit" :disabled="invalid">
        <i class="fas fa-cash-register"></i> 結帳
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import StepProgress from 'vue-step-progress';
import 'vue-step-progress/dist/main.css';
import { ValidationProvider, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'This field is required',
});

export default {
  name: 'Cart',
  components: {
    StepProgress,
    ValidationProvider,
  },
  data() {
    return {
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
      currentStep: 1,
      active_thick: 3,
      passive_thick: 3,
      line_thick: 3,
      invalid: false,
      shoppingList: [
        {
          product: {
            title: '鹹蛋黃雪球',
            price: 140,
          },
          quantity: 10,
        },
        {
          product: {
            title: '蛋黃酥',
            price: 250,
          },
          quantity: 5,
        },
      ],
    };
  },
  methods: {
    delFromCart() {
      console.log('0.0');
    },
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
    transition: all 0.1s;
    display: block;
    margin: auto;
    /* text-align: center !important; */
  }

  .btnSubmit:hover {
    background-color: #FFF;
    color: #F0760F;
  }

  /* .orderList {
    text-align: left;
  } */
</style>
