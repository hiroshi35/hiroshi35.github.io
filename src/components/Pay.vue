<template>
  <div class="pay">
    <h3>購物清單</h3>
    <table class="table mt-4" style="border-bottom: 3px solid #F0760F;">
      <thead class="thead" style="color: #F0760F;">
        <tr>
          <th scope="col">商品名稱</th>
          <th scope="col">單價</th>
          <th scope="col">數量</th>
        </tr>
      </thead>
      <tbody v-if="cart.length" style="color: white;">
        <tr v-for="item in cart" :key="item.id">
          <td>{{item.product.title}}</td>
          <td>{{item.product.price}}</td>
          <td>{{item.quantity}}</td>
        </tr>
      </tbody>
    </table>
    <h3 class="mb-5">總計NT${{summary}}</h3>
    <h3>個人資訊</h3>
    <table class="table mt-4" style="border-bottom: 3px solid #F0760F;">
      <thead class="thead" style="color: #F0760F;">
        <tr>
          <th scope="col">訂單資訊</th>
          <th scope="col" :class="{}">內容</th>
        </tr>
      </thead>
      <tbody style="color: white;">
        <tr>
          <td>姓名</td>
          <td>{{profile.name}}</td>
        </tr>
        <tr>
          <td>電話</td>
          <td>{{profile.phone}}</td>
        </tr>
        <tr>
          <td>地址</td>
          <td>{{profile.address}}</td>
        </tr>
        <tr>
          <td>電子郵件</td>
          <td>{{profile.email}}</td>
        </tr>
        <tr>
          <td>備註</td>
          <td>{{profile.note}}</td>
        </tr>
        <tr>
          <td>付款狀態</td>
          <!-- <td :class="[paiedFlag ? notPaid : '', alreadyPaid]">{{paied}}</td> -->
          <td :style="{color: payColor, fontWeight: payFont}">{{paied}}</td>
        </tr>
      </tbody>
    </table>
    <button type="submit" class="btn btn-warning btnSubmit" @click="doPaid">
      <i class="fas fa-cash-register"></i> 確認付款
    </button>
  </div>
</template>

<script>
export default {
  name: 'pay',
  data() {
    return {
      paied: '尚未付款',
      payColor: 'red',
      payFont: 800,
    };
  },
  props: {
    profile: Object,
    cart: Array,
    summary: Number,
  },
  methods: {
    doPaid() {
      this.payColor = 'green';
      this.paied = '付款成功';
      this.$emit('paidok');
    },
  },
};
</script>

<style scoped>
  .pay {
    margin: auto;
    width: 50%;
    padding-bottom: 100px;
    text-align: left;
  }

  .btnSubmit {
    margin: auto;
    background-color: #F0760F;
    border: 1px solid #F0760F;
    display: block;
  }
</style>
