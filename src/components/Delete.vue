<template>
  <div id="delProductModal" class="modal fade" tabindex="-1" role="dialog"
  aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="exampleModalLabel" class="modal-title">
            <span>刪除產品</span>
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="delProduct()">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'delete',
  data() {
    return {};
  },
  props: ['tempProduct', 'user'],
  methods: {
    // delProduct(item) {
    //   this.$emit('del', item);
    // },
    delProduct() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/product/${this.tempProduct.id}`;
      console.log(this.tempProduct);
      console.log(api);
      this.$http.delete(api).then(() => {
        this.$emit('update');
      }).catch(() => {
        // console.log(err);
      });
      $('#delProductModal').modal('hide');
    },
  },
};
</script>
