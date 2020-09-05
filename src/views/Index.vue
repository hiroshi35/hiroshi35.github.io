<template>
  <div class="index">
    <div id="nav" style="display: flex;">
      <div class="col-md-4" style="display: flex; justify-content: flex-start">
        <div class="linkIcon">
          <i class="fas fa-home"></i>&emsp;
          <router-link to="/">首頁</router-link>
        </div>
        <div class="linkIcon">
          <i class="fas fa-address-card"></i>&emsp;
          <router-link to="/about">品牌故事</router-link>
        </div>
      </div>
      <div class="col-md-4" style="margin: auto;">
        <img alt="" src="../assets/half-kitchen.jpg">
        <p><strong>半吊子廚房</strong></p>
        <p style="font-size:13px;">The Half Kitchen</p>
      </div>
      <div class="col-md-4" style="display: flex; justify-content: flex-end;">
        <div class="linkIcon">
          <i class="fas fa-list-alt"></i>&emsp;
          <router-link to="/products">商品列表</router-link>
        </div>
        <div class="linkIcon">
          <i class="fas fa-shopping-cart"></i>&emsp;
          <router-link to="/cart">購物車</router-link>
        </div>
        <!-- <div class="linkIcon">
          <i class="fas fa-users-cog"></i>&emsp;
          <router-link to="/admin/products">Admin</router-link>
        </div> -->
      </div>
    </div>
    <router-view/>
    <div id="footer">
      <div><a href="https://www.facebook.com/search/top?q=%E5%8D%8A%E5%90%8A%E5%AD%90%E5%BB%9A%E6%88%BF"><i class="fab fa-facebook-square"></i></a></div>
      <div><a href="https://www.instagram.com/the_half_kitchen/"><i class="fab fa-instagram-square"></i></a></div>
      <div><a href=""><i class="fab fa-github"></i></a></div>
    </div>
    <p class="copyRight">©Copright 2020   </p>
  </div>
</template>

<script>
// @ is an alias to /src
export default {

};
</script>

<style scoped>

* {
  color: #F0760F;
  padding: 0px;
  margin: 0px;
}
.index {
  /* width: 80%; */
  background-color: #302D2F;
  color: #F0760F;
  /* padding-bottom: 200px; */
  /* padding: 100px; */
}

#nav {
  width: 80%;
  margin: auto;
  padding: 20px !important;
}

#nav a {
  color: #F0760F;
}

#footer {
  /* margin: 100px 0px; */
  display: flex;
  justify-content: center;
  border-top: .5px solid #F0760F;
  padding: 45px 0px 10px 0px;
  background-color: #302D2F;
}

#footer div {
  margin: 0px 20px;
}

i {
  font-size: 30px;
}

.linkIcon {
  display: flex;
  flex-direction: column;
  margin:auto;
}

img {
  width: 90px;
  height: auto;
  border-radius: 50%;
  border: 2px solid #F0760F;
  /* margin-bottom: 10px; */
}

.copyRight {
  font-size: 15px;
  padding-bottom: 10px;
}

</style>
