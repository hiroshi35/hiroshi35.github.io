<template>
  <div class="home">
    <!-- <h1>半吊子廚房</h1>
    <h4>The Half Kitchen</h4> -->
    <div id="carouselExampleControls" class="carousel slide foodShow" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/gift1.jpg" class="d-block w-100" alt="">
          <div class="carousel-caption d-none d-md-block">
            <h2>中秋禮盒</h2>
            <!-- <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> -->
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/gift2.jpg" class="d-block w-100" alt="">
          <div class="carousel-caption d-none d-md-block">
            <h4>中秋禮盒</h4>
            <!-- <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> -->
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/gift3.jpg" class="d-block w-100" alt="">
          <div class="carousel-caption d-none d-md-block">
            <h4>中秋禮盒</h4>
            <!-- <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> -->
          </div>
        </div>
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
    <h1 style="margin-top: 80px">季節商品</h1>
    <div class="hotProducts">
      <!-- <div class="hotItem" v-for="item in hotItems" :key="item.id">
        <img :src="item.url" alt="">
        <label>{{item.title}}</label>
      </div> -->
      <div class="card border-0 mb-4 hotItem">
        <img
          src="../assets/food1.jpg"
          class="card-img-top"
          alt=""
        />
        <div class="card-body text-center">
          <h4>芋頭酥</h4>
          <div class="d-flex justify-content-between">
            <p class="card-text text-muted mb-0">
              半吊子招牌的甜點，傳統西方的婚禮必備點心，希臘雪球，由半吊子加入東方元素「鹹蛋」，
              巧妙的結合，非常值得一試，一放入口，雪球如雪般化開.
            </p>
          </div>
        </div>
      </div>
      <div class="card border-0 mb-4 hotItem">
        <img
          src="../assets/food2.jpg"
          class="card-img-top rounded-3"
          alt=""
        />
        <div class="card-body text-center">
          <h4>蛋黃酥</h4>
          <div class="d-flex justify-content-between">
            <p class="card-text text-muted mb-0">
              半吊子招牌的甜點，傳統西方的婚禮必備點心，希臘雪球，由半吊子加入東方元素「鹹蛋」，
              巧妙的結合，非常值得一試，一放入口，雪球如雪般化開.
            </p>
          </div>
        </div>
      </div>
      <div class="card border-0 mb-4 hotItem">
        <img
          src="../assets/food3.jpg"
          class="card-img-top rounded-3"
          alt=""
        />
        <div class="card-body text-center">
          <h4>鹹蛋黃雪球</h4>
          <div class="d-flex justify-content-between">
            <p class="card-text text-muted mb-0">
              半吊子招牌的甜點，傳統西方的婚禮必備點心，希臘雪球，由半吊子加入東方元素「鹹蛋」，
              巧妙的結合，非常值得一試，一放入口，雪球如雪般化開.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
export default {
  name: 'Home',
  // components: {
  //   HelloWorld,
  // },
  data() {
    return {
      hotItems: [
        // {
        //   id: 1,
        //   imageUrl: '../assets/food1.jpg',
        //   title: '芋頭酥',
        //   // cat: '',
        //   description: '',
        // },
        // {
        //   id: 2,
        //   imageUrl: '../assets/food2.jpg',
        //   title: '蛋黃酥',
        //   // cat: '',
        //   description: '',
        // },
        // {
        //   id: 3,
        //   imageUrl: '../assets/food3.jpg',
        //   title: '蛋黃雪球',
        //   // cat: '',
        //   description: '',
        // },
      ],
    };
  },
};
</script>

<style scoped>
.home {
  /* background-color: #442B2E; */
  /* background-color: #302D2F; */
  /* background: linear-gradient(to bottom, rgba(92, 77, 66, 0.6) 0%, */
  /* rgba(92, 77, 66, 0.6) 100%), url("/assets/food1.jpg"); */
  color: #F0760F;
  padding-bottom: 100px;
}

.foodShow {
  width: 65%;
  height: auto;
  margin: auto;
  transform: translateX(0);
  transition-delay: 1s;
  /* overflow: hidden; */
}

.carousel-item img {
  border: 1px solid #F0760F;
}

.hotProducts {
  padding-top: 10px;
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: center;
}

.hotItem {
  width: 400px;
  margin: 0px 10px;
  height: auto;
  background-color: #302D2F;
}

.hotItem img{
  border-radius: 10px;
  border: 1px solid #F0760F;
}

.hotItem p{
  color: #FFF !important;
  overflow: hidden;
  height: 100px;
}

/* img {
  width: 300px;
  height: auto;
} */
</style>
