<template>
  <div class="backProduct">
    <h2>半吊子廚房產品管理頁面</h2>
    <div class="mt-3">
      <button class="btn btn-primary" @click="openModal('new')">新產品上架</button>
      <!-- <button class="btn btn-primary" onclick="location.href='index.html'">購物頁面</button> -->
    </div>
    <table class="table mt-3">
      <thead>
        <tr>
          <th>分類</th>
          <th>縮圖</th>
          <th>名稱</th>
          <th>原價</th>
          <th>售價</th>
          <th>啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody v-for="(item) in products" :key="item.id">
        <tr>
          <td>{{item.unit}}</td>
          <td><a href="#" type="button" @click="getImgUrl(item.id)">點擊看圖</a></td>
          <td>{{item.title}}</td>
          <td>{{item.origin_price}}</td>
          <td>{{item.price}}</td>
          <td>
            <span v-if="item.enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" @click="openModal('edit', item)">
                編輯
              </button>
              <button class="btn btn-outline-danger btn-sm" @click="openModal('delete', item)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Modal -->
    <div id="productModal" class="modal fade" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 id="exampleModalLabel" class="modal-title">
              <span>新增產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="imageUrl">輸入圖片網址</label>
                  <input id="imageUrl" v-model="tempProduct.imageUrl"
                  type="text" class="form-control"
                    placeholder="請輸入圖片連結">
                </div>
                <img class="img-fluid" :src="tempProduct.imageUrl" alt>
              </div>
              <!-- 主要參數內容 -->
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input id="title" v-model="tempProduct.title" type="text"
                  class="form-control" placeholder="請輸入標題">
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input id="category" v-model="tempProduct.category"
                    type="text" class="form-control" placeholder="請輸入分類" >
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input id="unit" v-model="tempProduct.unit"
                    type="unit" class="form-control" placeholder="請輸入單位">
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input id="origin_price" v-model="tempProduct.origin_price"
                    type="number" class="form-control" placeholder="請輸入原價">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input id="price" v-model="tempProduct.price"
                    type="number" class="form-control" placeholder="請輸入售價">
                  </div>
                </div>
                <hr>
                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea id="description" v-model="tempProduct.description"
                  type="text" class="form-control" placeholder="請輸入產品描述" >
                  </textarea>
                </div>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <textarea id="description" v-model="tempProduct.content"
                  type="text" class="form-control" placeholder="請輸入說明內容" >
                  </textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input id="is_enabled" v-model="tempProduct.enabled"
                    class="form-check-input" type="checkbox" :true-value="true"
                    :false-value="false">
                    <label class="form-check-label" for="is_enabled">是否啟用</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">
              取消
            </button>
            <button type="button" class="btn btn-primary" @click="updateProduct">
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 產品圖片 -->
    <div id="productPicModal" class="modal" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLongTitle" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">產品照片</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" style="padding: 0px;">
            <img :src="tempImgUrl" alt="" style="width: 100%; height: 100%;">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
            <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
          </div>
        </div>
      </div>
    </div>
    <!-- <pagination :pages="meta" @showpage="getProducts"></pagination> -->
    <delete :temp-product="tempProduct" :user="user" @update="getProducts">
      </delete>
  </div>
</template>

<script>
// @ is an alias to /src
import $ from 'jquery';
import Delete from '@/components/Delete.vue';

export default {
  components: {
    Delete,
  },
  data() {
    return {
      products: [
        {
          id: 1586934917210,
          unit: '條',
          category: '法國麵包',
          title: '跟你一樣長的法國麵包',
          origin_price: 100,
          price: 80,
          description: '過來嚐嚐我又長又硬的法國麵包',
          content: '又硬又長',
          enabled: 1,
          imageUrl: ['https://images.unsplash.com/photo-1456765447332-d79762cdcbe4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1488&q=80'],
        },
      ],
      user: {
        token: 'fPBdx0oexIXVOIuOuHXglkGf9mzk0yJnszfLJHzUItwN8e17LinKmXBQ9Qos',
      },
      tempProduct: {},
      tempImgUrl: '',
      meta: {},
    };
  },
  created() {
    // eslint-disable-next-line
    // this.user.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, '$1');
    if (this.user.token === '') {
      console.log(this.user.token);
    }
    this.$http.defaults.headers.common.Authorization = `Bearer ${this.user.token}`;
    this.getProducts(1);
  },
  methods: {
    getProducts(page) {
      // const page = 1;
      // console.log(`page = ${page}`);
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/products?page=${page}`;
      this.$http.get(api).then((rsp) => {
        this.products = rsp.data.data;
        this.meta = rsp.data.meta.pagination;
        // console.log(`product: ${JSON.stringify(this.products[0])}`);
        // console.log(`product: ${JSON.stringify(this.meta)}`);
        // this.pagination = response.data.meta.pagination;
      }).catch(() => {
        // console.log(err);
      });
    },
    updateProduct() {
      // PATCH api/{uuid}/admin/ec/product/{id}
      if (this.tempProduct.id !== undefined) {
        // let idx = this.products.findIndex(el => el.id == this.tempProduct.id);
        // this.products[idx] = this.tempProduct;
        const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/product/${this.tempProduct.id}`;
        const temp = this.tempProduct;
        console.log(`product: ${JSON.stringify(temp)}`);
        this.$http.patch(api, temp).then(() => {
          // console.log(rsp);
          this.getProducts();
        }).catch(() => {
          // console.log(err);
        });
      } else {
        this.tempProduct.id = new Date().getTime();
        // this.tempProduct.comments = [];
        const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/product`;
        const temp = this.tempProduct;
        const tempurl = temp.imageUrl;
        temp.imageUrl = [];
        temp.imageUrl.push(tempurl);
        console.log(`${JSON.stringify(temp)}`);
        // this.checkProductModalValue()
        // .then(() => {
        //   return axios.post(api,temp);
        // })
        this.$http.post(api, temp).then(() => {
          // console.log(rsp);
          this.getProducts();
        }).catch((err) => {
          if (err.name === 'TypeError') {
            alert('check the value input!!');
          }
          console.log(err.name);
        });
      }
      this.tempProduct = {};
      $('#productModal').modal('hide');
    },
    getImgUrl(id) {
      const idx = this.products.findIndex((el) => el.id === id);
      this.tempImgUrl = this.products[idx].imageUrl;
      $('#productPicModal').modal('show');
    },
    openModal(isNew, item) {
      if (isNew === 'new') {
        $('#productModal').modal('show');
        this.tempProduct = {};
      } else if (isNew === 'edit') {
        $('#productModal').modal('show');
        // eslint-disable-next-line
        this.tempProduct = Object.assign({}, item);
        // this.tempProduct = Object.assign(...item);
        console.log(this.tempProduct);
      } else {
        // eslint-disable-next-line
        this.tempProduct = Object.assign({}, item);
        console.log(`DoReMo: ${JSON.stringify(this.tempProduct)}`);
        console.log(`DoReMo: ${JSON.stringify(this.user)}`);
        $('#delProductModal').modal('show');
      }
    },
    checkProductModalValue(tempProduct) {
      const err = new Error('Error value');
      return new Promise((resolve, reject) => {
        if (tempProduct.title === undefined) {
          reject(err);
        } else if (tempProduct.category === undefined) {
          reject(err);
        } else if (tempProduct.content === undefined) {
          reject(err);
        } else if (tempProduct.description === undefined) {
          reject(err);
        } else if (tempProduct.imageUrl[0] === undefined) {
          reject(err);
        } else {
          resolve();
        }
      });
    },
  },
};
</script>
