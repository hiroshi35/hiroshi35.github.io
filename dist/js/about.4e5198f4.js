(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"01ae":function(t,a,s){},1703:function(t,a,s){t.exports=s.p+"img/gift1.449432fe.jpg"},"1dde":function(t,a,s){var e=s("d039"),i=s("b622"),r=s("2d00"),c=i("species");t.exports=function(t){return r>=51||!e((function(){var a=[],s=a.constructor={};return s[c]=function(){return{foo:1}},1!==a[t](Boolean).foo}))}},2637:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"oneProduct"},[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),s("h1",[t._v("這是"+t._s(t.product.title)+"商品的頁面哦")])],1)},i=[],r=(s("99af"),{name:"Product",data:function(){return{isLoading:!1,product:{}}},created:function(){var t=this;this.isLoading=!0;var a=this.$route.params.id,s="".concat("https://course-ec-api.hexschool.io","/api/").concat("a9a46d73-6eff-41f5-bb73-707e23f5af30","/ec/product/").concat(a);this.$http.get(s).then((function(a){t.isLoading=!1,t.product=a.data.data}))}}),c=r,n=s("2877"),o=Object(n["a"])(c,e,i,!1,null,null,null);a["default"]=o.exports},"459d":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"admin"}},[s("div",{attrs:{id:"nav"}},[s("router-link",{attrs:{to:"/"}},[t._v("回前台")]),t._v(" | "),s("router-link",{attrs:{to:"/admin/products"}},[t._v("產品列表")]),t._v(" | "),s("router-link",{attrs:{to:"/admin/order"}},[t._v("訂單")]),t._v(" | "),s("router-link",{attrs:{to:"/admin/coupon"}},[t._v("優惠卷")]),t._v(" | "),s("router-link",{attrs:{to:"/admin/pic"}},[t._v("圖庫")])],1),s("router-view")],1)},i=[],r={},c=r,n=s("2877"),o=Object(n["a"])(c,e,i,!1,null,null,null);a["default"]=o.exports},5922:function(t,a,s){"use strict";var e=s("01ae"),i=s.n(e);i.a},"5f2c":function(t,a,s){t.exports=s.p+"img/gift3.47e8c45e.jpg"},"5fce":function(t,a,s){"use strict";var e=s("f7ef"),i=s.n(e);i.a},"65f0":function(t,a,s){var e=s("861d"),i=s("e8b5"),r=s("b622"),c=r("species");t.exports=function(t,a){var s;return i(t)&&(s=t.constructor,"function"!=typeof s||s!==Array&&!i(s.prototype)?e(s)&&(s=s[c],null===s&&(s=void 0)):s=void 0),new(void 0===s?Array:s)(0===a?0:a)}},8418:function(t,a,s){"use strict";var e=s("c04e"),i=s("9bf2"),r=s("5c6c");t.exports=function(t,a,s){var c=e(a);c in t?i.f(t,c,r(0,s)):t[c]=s}},"99af":function(t,a,s){"use strict";var e=s("23e7"),i=s("d039"),r=s("e8b5"),c=s("861d"),n=s("7b0b"),o=s("50c4"),l=s("8418"),d=s("65f0"),u=s("1dde"),f=s("b622"),v=s("2d00"),p=f("isConcatSpreadable"),m=9007199254740991,h="Maximum allowed index exceeded",_=v>=51||!i((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),b=u("concat"),C=function(t){if(!c(t))return!1;var a=t[p];return void 0!==a?!!a:r(t)},g=!_||!b;e({target:"Array",proto:!0,forced:g},{concat:function(t){var a,s,e,i,r,c=n(this),u=d(c,0),f=0;for(a=-1,e=arguments.length;a<e;a++)if(r=-1===a?c:arguments[a],C(r)){if(i=o(r.length),f+i>m)throw TypeError(h);for(s=0;s<i;s++,f++)s in r&&l(u,f,r[s])}else{if(f>=m)throw TypeError(h);l(u,f++,r)}return u.length=f,u}})},"9d04":function(t,a,s){t.exports=s.p+"img/half-kitchen.4246d828.jpg"},b028:function(t,a,s){t.exports=s.p+"img/food1.2f49cd0a.jpg"},b789:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"cart"},[s("h1",[t._v("購物車的啦！")])])}],r={name:"Cart",components:{}},c=r,n=s("2877"),o=Object(n["a"])(c,e,i,!1,null,null,null);a["default"]=o.exports},bb51:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("div",{staticClass:"carousel slide foodShow",attrs:{id:"carouselExampleControls","data-ride":"carousel"}},[e("div",{staticClass:"carousel-inner"},[e("div",{staticClass:"carousel-item active"},[e("img",{staticClass:"d-block w-100",attrs:{src:s("1703"),alt:""}}),e("div",{staticClass:"carousel-caption d-none d-md-block"},[e("h2",[t._v("中秋禮盒")])])]),e("div",{staticClass:"carousel-item"},[e("img",{staticClass:"d-block w-100",attrs:{src:s("c52f"),alt:""}}),e("div",{staticClass:"carousel-caption d-none d-md-block"},[e("h4",[t._v("中秋禮盒")])])]),e("div",{staticClass:"carousel-item"},[e("img",{staticClass:"d-block w-100",attrs:{src:s("5f2c"),alt:""}}),e("div",{staticClass:"carousel-caption d-none d-md-block"},[e("h4",[t._v("中秋禮盒")])])])]),e("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"prev"}},[e("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"sr-only"},[t._v("Previous")])]),e("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"next"}},[e("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"sr-only"},[t._v("Next")])])]),e("h1",{staticStyle:{"margin-top":"80px"}},[t._v("季節商品")]),e("div",{staticClass:"hotProducts"},[e("div",{staticClass:"card border-0 mb-4 hotItem"},[e("img",{staticClass:"card-img-top",attrs:{src:s("b028"),alt:""}}),e("div",{staticClass:"card-body text-center"},[e("h4",[t._v("芋頭酥")]),e("div",{staticClass:"d-flex justify-content-between"},[e("p",{staticClass:"card-text text-muted mb-0"},[t._v(" 半吊子招牌的甜點，傳統西方的婚禮必備點心，希臘雪球，由半吊子加入東方元素「鹹蛋」， 巧妙的結合，非常值得一試，一放入口，雪球如雪般化開. ")])])])]),e("div",{staticClass:"card border-0 mb-4 hotItem"},[e("img",{staticClass:"card-img-top rounded-3",attrs:{src:s("eec7"),alt:""}}),e("div",{staticClass:"card-body text-center"},[e("h4",[t._v("蛋黃酥")]),e("div",{staticClass:"d-flex justify-content-between"},[e("p",{staticClass:"card-text text-muted mb-0"},[t._v(" 半吊子招牌的甜點，傳統西方的婚禮必備點心，希臘雪球，由半吊子加入東方元素「鹹蛋」， 巧妙的結合，非常值得一試，一放入口，雪球如雪般化開. ")])])])]),e("div",{staticClass:"card border-0 mb-4 hotItem"},[e("img",{staticClass:"card-img-top rounded-3",attrs:{src:s("d5f5"),alt:""}}),e("div",{staticClass:"card-body text-center"},[e("h4",[t._v("鹹蛋黃雪球")]),e("div",{staticClass:"d-flex justify-content-between"},[e("p",{staticClass:"card-text text-muted mb-0"},[t._v(" 半吊子招牌的甜點，傳統西方的婚禮必備點心，希臘雪球，由半吊子加入東方元素「鹹蛋」， 巧妙的結合，非常值得一試，一放入口，雪球如雪般化開. ")])])])])])])}],r={name:"Home",data:function(){return{hotItems:[]}}},c=r,n=(s("5fce"),s("2877")),o=Object(n["a"])(c,e,i,!1,null,"2e5ec81b",null);a["default"]=o.exports},c52f:function(t,a,s){t.exports=s.p+"img/gift2.2a788645.jpg"},d504:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"index"},[s("div",{staticStyle:{display:"flex"},attrs:{id:"nav"}},[s("div",{staticClass:"col-md-4",staticStyle:{display:"flex","justify-content":"flex-start"}},[s("div",{staticClass:"linkIcon"},[s("i",{staticClass:"fas fa-home"}),t._v(" "),s("router-link",{attrs:{to:"/"}},[t._v("首頁")])],1),s("div",{staticClass:"linkIcon"},[s("i",{staticClass:"fas fa-address-card"}),t._v(" "),s("router-link",{attrs:{to:"/about"}},[t._v("品牌故事")])],1)]),t._m(0),s("div",{staticClass:"col-md-4",staticStyle:{display:"flex","justify-content":"flex-end"}},[s("div",{staticClass:"linkIcon"},[s("i",{staticClass:"fas fa-list-alt"}),t._v(" "),s("router-link",{attrs:{to:"/products"}},[t._v("商品列表")])],1),s("div",{staticClass:"linkIcon"},[s("i",{staticClass:"fas fa-shopping-cart"}),t._v(" "),s("router-link",{attrs:{to:"/cart"}},[t._v("購物車")])],1)])]),s("router-view"),t._m(1),s("p",{staticClass:"copyRight"},[t._v("©Copright 2020 ")])],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-4",staticStyle:{margin:"auto"}},[e("img",{attrs:{alt:"",src:s("9d04")}}),e("p",[e("strong",[t._v("半吊子廚房")])]),e("p",{staticStyle:{"font-size":"13px"}},[t._v("The Half Kitchen")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"footer"}},[s("div",[s("a",{attrs:{href:"https://www.facebook.com/search/top?q=%E5%8D%8A%E5%90%8A%E5%AD%90%E5%BB%9A%E6%88%BF"}},[s("i",{staticClass:"fab fa-facebook-square"})])]),s("div",[s("a",{attrs:{href:"https://www.instagram.com/the_half_kitchen/"}},[s("i",{staticClass:"fab fa-instagram-square"})])]),s("div",[s("a",{attrs:{href:""}},[s("i",{staticClass:"fab fa-github"})])])])}],r={},c=r,n=(s("5922"),s("2877")),o=Object(n["a"])(c,e,i,!1,null,"53369d84",null);a["default"]=o.exports},d5f5:function(t,a,s){t.exports=s.p+"img/food3.70339c5c.jpg"},e6dc:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"home container"},[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),s("h2",[t._v("產品列表的啦")]),t._l(t.products,(function(a){return s("div",{key:a.id,staticStyle:{display:"inline-block"}},[s("div",{staticClass:"card",staticStyle:{width:"18rem"}},[s("img",{staticClass:"card-img-top",attrs:{src:a.imageUrl[0],alt:"Card image cap"}}),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v(t._s(a.title))]),s("p",{staticClass:"card-text"},[t._v(t._s(a.content))]),s("router-link",{attrs:{to:"/product/"+a.id}},[t._v("商品介紹")])],1)])])}))],2)},i=[],r=(s("99af"),{name:"Products",data:function(){return{isLoading:!1,products:[{id:1586934917210,unit:"條",category:"法國麵包",title:"跟你一樣長的法國麵包",origin_price:100,price:80,description:"過來嚐嚐我又長又硬的法國麵包",content:"又硬又長",enabled:1,imageUrl:["https://images.unsplash.com/photo-1456765447332-d79762cdcbe4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1488&q=80"]}]}},props:{},methods:{},created:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io","/api/").concat("a9a46d73-6eff-41f5-bb73-707e23f5af30","/ec/products");this.$http.get(a).then((function(a){t.products=a.data.data,t.isLoading=!1}))}}),c=r,n=s("2877"),o=Object(n["a"])(c,e,i,!1,null,null,null);a["default"]=o.exports},e8b5:function(t,a,s){var e=s("c6b6");t.exports=Array.isArray||function(t){return"Array"==e(t)}},eec7:function(t,a,s){t.exports=s.p+"img/food2.5cfea5f4.jpg"},f7ef:function(t,a,s){},f820:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"about"},[s("h1",[t._v("這是關於我們頁面的啦！")])])}],r=s("2877"),c={},n=Object(r["a"])(c,e,i,!1,null,null,null);a["default"]=n.exports}}]);
//# sourceMappingURL=about.4e5198f4.js.map