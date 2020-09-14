<template>
  <div class="conpon">
    <h2>優惠卷管理</h2>
    <div id="createCoupon">
      <div class="form-group row">
        <label for="">名稱:</label>
        <input type="text" v-model="title">
      </div>
      <div class="form-group row">
        <label for="">序號:</label>
        <input type="text" v-model="code">
      </div>
      <div class="form-group row">
        <label for="">折扣百分比:</label>
        <input type="text" v-model="percent">
      </div>
      <div class="form-check form-check-inline">
        <label class="form-check-label" for="">是否開放:</label>
        <input class="form-check-input" type="checkbox" v-model="enable">
      </div>
      <div class="form-group row">
        <label for="">到期日:</label>
        <input type="date" v-model="deadline">
      </div>
      <button class="btn btn-primary" @click="createCouponItem">UPLOAD</button>
    </div>
    <table class="table mt-3">
      <thead>
        <tr>
          <th>名稱</th>
          <th>序號</th>
          <th>折扣百分比</th>
          <th>是否開放</th>
          <th>到期日</th>
          <th>刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item.title">
          <td>{{item.title}}</td>
          <td>{{item.code}}</td>
          <td>{{item.percent}}</td>
          <td>{{item.enabled}}</td>
          <td>{{item.deadline_at}}</td>
          <td>
            <button type="button" class="btn btn-outline-danger btn-sm"
            @click="deleteCouponItem">
              <i class="far fa-trash-alt"></i></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: 'fPBdx0oexIXVOIuOuHXglkGf9mzk0yJnszfLJHzUItwN8e17LinKmXBQ9Qos',
      coupons: [],
      title: '',
      code: '',
      percent: 0,
      enable: '',
      deadline: '2020-12-31 23:59:59',
    };
  },
  created() {
    this.getCouponList();
  },
  methods: {
    getCouponList() {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/coupons`;
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;
      this.$http.get(url).then((rsp) => {
        // console.log(rsp.data);
        this.coupons = rsp.data.data;
      }).catch(() => {
        // console.log(err);
      });
    },
    createCouponItem() {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/coupon`;
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;
      this.$http.post(url, {
        title: this.title,
        code: this.code,
        percent: this.percent,
        enabled: this.enable,
        deadline_at: this.deadline,
      }).then(() => {
        // console.log(rsp.data.data);
        console.log(`${this.title} ${this.code} ${this.percent} ${this.enable} ${this.deadline}`);
        this.getCouponList();
      }).catch(() => {
        console.log(`${this.title} ${this.code} ${this.percent} ${this.enable} ${this.deadline}`);
        console.log(`${typeof this.title} ${typeof this.code} ${typeof this.percent} ${typeof this.enable} ${typeof this.deadline}`);
        // console.log(err);
      });
    },
    deleteCouponItem() {
      console.log('Delete');
    },
  },
};
</script>

<style scoped>
  #createCoupon {
    display: flex;
    justify-content: space-around;
    align-content : center;
  }
</style>
