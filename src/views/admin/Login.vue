<template>
  <div class="login">
    <form class="form-signin" @submit.prevent="signin">
      <h1 class="h3 mb-3 font-weight-normal">
        半吊子廚房後台管理系統
      </h1>
      <div class="form-group">
        <label for="inputEmail" class="sr-only">Email address</label>
        <input id="inputEmail" v-model="user.email" type="email"
          class="form-control" placeholder="Email address"
          required autofocus>
      </div>
      <div class="form-group">
        <label for="inputPassword" class="sr-only">Password</label>
        <input id="inputPassword" v-model="user.password" type="password" class="form-control"
          placeholder="Password" required>
      </div>
      <button class="btn btn-lg btn-info btn-block" type="submit">
        登入
      </button>
      <br>
      <p class="mt-5 mb-3 text-muted">
        &copy; 2020
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      token: '',
    };
  },
  methods: {
    signin() {
      const api = `${process.env.VUE_APP_APIPATH}/api/auth/login`;
      this.$http.post(api, this.user).then((response) => {
        const { token } = response.data;
        const { expired } = response.data;
        document.cookie = `hexToken=${token};expires=${new Date(expired * 1000)};`;
        this.$router.push('/admin/products');
      }).catch((error) => {
        console.log(error);
      });
    },
    signout() {
      document.cookie = 'hexToken=;expires=;';
      console.log('token 已清除');
    },
  },
};
</script>

<style scoped>
  .login {
    width: 20%;
    padding-top: 20%;
    margin: auto;
  }
</style>
