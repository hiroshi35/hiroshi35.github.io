<template>
  <div class="picture">
    <div>
      <h1>這是後台上傳素材平台的啦！</h1>
      <input
        id="fileInput"
        type="file"
        class="form-control"
      >
    </div>
    <div>
      <table class="table mt-3">
        <thead>
          <tr>
            <th>id</th>
            <th>Path</th>
          </tr>
        </thead>
        <tbody>
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
      token: '',
    };
  },
  methods: {
    uploadFile() {
      // this.token = document.cookie.replace(/(?:(?:^|.*;\s*)
      // hexHomeworkToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
      const uploadedfile = document.querySelector('#fileInput').file[0];

      const formData = new FormData();
      formData.append('file', uploadedfile);
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/storage`;
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;

      this.$http.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
  },
};
</script>
