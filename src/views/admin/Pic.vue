<template>
  <div class="picture">
    <h3>圖片上傳</h3>
    <div id="file">
      <input
        id="fileInput"
        type="file"
        class="form-control"
        style="width: 300px;"
      >
      <button class="btn btn-primary" @click="uploadFile">UPLOAD</button>
    </div>
    <div>
      <table class="table mt-3">
        <thead>
          <tr>
            <th>圖片</th>
            <th>Path</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in file" :key="item.id">
            <td><img :src="item.path" alt="" style="width: 100px; height:auto;"></td>
            <td style="text-align: left;">{{item.path}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <img :src="filePath" alt="">
    {{ filePath }} -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: [],
      // filePath: '',
      token: 'fPBdx0oexIXVOIuOuHXglkGf9mzk0yJnszfLJHzUItwN8e17LinKmXBQ9Qos',
    };
  },
  created() {
    this.getFileList();
  },
  methods: {
    getFileList() {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/storage`;
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;
      this.$http.get(url).then((rsp) => {
        // console.log(rsp.data.data);
        this.file = rsp.data.data;
      }).catch(() => {
        // console.log(err);
      });
    },
    uploadFile() {
      // this.token = document.cookie.replace(/(?:(?:^|.*;\s*)
      // hexHomeworkToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
      const uploadedfile = document.querySelector('#fileInput').files[0];
      const formData = new FormData();
      formData.append('file', uploadedfile);
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/storage`;
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;

      this.$http.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then(() => {
        this.getFileList();
      }).catch(() => {
        // console.log(err);
      });
    },
  },
};
</script>
<style scoped>
  #file {
    display: flex;
    justify-content: center;
  }
</style>
