<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header"><h4>Editar Bookmark</h4></div>
        <div class="card-body">
          <form @submit.prevent="updateBookmark">
            <div class="row">
              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>Título</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="bookmark.title"
                  />
                </div>
              </div>
              <div class="col-12 mb-2">
                <div class="form-floating">
                  <textarea
                    class="form-control"
                    id="floatingTextarea2"
                    v-model="bookmark.url"
                    style="height: 100px"
                  ></textarea>
                  <label for="floatingTextarea2"></label>
                </div>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary">Guardar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "edit-bookmark",
  data() {
    return {
      bookmark: {
        title: "",
        url: "",
      },
    };
  },
  mounted() {
    this.showBookmarks();
  },
  methods: {
    async showBookmarks() {
      await this.axios
        .get(`/api/bookmark/${this.$route.params.id}`)
        .then((response) => {
          const { title, url } = response.data;
          this.bookmark.title = title;
          this.bookmark.url = url;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async updateBookmark() {
      await this.axios
        .put(`/api/bookmark/${this.$route.params.id}`, this.bookmark)
        .then((response) => {
          this.$router.push({ name: "index-bookmark" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
