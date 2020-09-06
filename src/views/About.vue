<template>
  <div class="about">
    <!-- <h1 style="margin: 0px;">我們是半吊子廚房</h1> -->
    <!-- <h3>Brand Story</h3> -->
    <div class="card mb-3" style="background-color: #302D2F; border: none;">
      <div class="circle">
        <img class="card-img-top cardImg" src="../assets/half-kitchen.jpg" alt="Card image cap">
      </div>
      <div class="card-body">
        <h3 class="card-title">品牌故事</h3>
        <p class="card-text" style="color: #FFF; text-align:left;">
          由於創辦人非科班出生，自嘲為甜點路的「半吊子」，原意是嘲諷不專精的人，卻成為激勵半吊子持續進步的品牌意義。
        </p>
        <p class="card-text" style="color: #FFF; text-align:left;">創辦人原來分別在科技業與金融業工作，擁有不錯的收入與穩定的薪水。
在一場朋友邀約的義賣市集中，擺攤販售手工甜點，因而啟發了兩人分享甜點的樂趣，利用下班之餘接單，慢慢的訂單越來越多，在蠟燭兩頭燒的情況下，決定離職自創品牌。
成立第一年就歷經海外市場籌備的試煉，最終決定返回新竹家鄉紮根，以在地食材創造中西合併的甜點。</p>
        <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
      </div>
      <!-- <div class="card-body">
        <h3 class="card-title">品牌故事</h3>
        <p class="card-text" style="color: #FFF; text-align:left;">創辦人原來分別在科技業與金融業工作，擁有不錯的收入與穩定的薪水。
在一場朋友邀約的義賣市集中，擺攤販售手工甜點，因而啟發了兩人分享甜點的樂趣，利用下班之餘接單，慢慢的訂單越來越多，在蠟燭兩頭燒的情況下，決定離職自創品牌。
成立第一年就歷經海外市場籌備的試煉，最終決定返回新竹家鄉紮根，以在地食材創造中西合併的甜點。</p>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style scoped>
  .about {
    width: 50%;
    margin: auto;
    padding-bottom: 100px;
  }

  .cardImg {
    border-radius: 10px;
    /* box-shadow: 0 0 10px rgba(0,0,0,1.00); */
  }

  .circle {
    margin: auto;
    display:inline-block;
    position:relative;
    width:350px;
    height:350px;
    overflow:hidden;
    border-radius:50%;
    border: 2px solid #F0760F;
  }

  .circle img {
    width:auto;
    height:100%;
  }
</style>
