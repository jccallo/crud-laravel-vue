<template>
  <div class="row">
    <div class="col-12">
      <router-link exact-active-class="active" to="/index" class="nav-link"
        >Bookmarks</router-link
      >
      <div class="card">
        <div class="card-header"><h4>Crear Bookmark</h4></div>
        <div class="card-body">
          <form @submit.prevent="createBookmark">
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
  name: "create-bookmark",
  data() {
    return {
      bookmark: {
        title: "",
        url: "",
      },
    };
  },
  methods: {
    async createBookmark() {
      await this.axios
        .post("/api/bookmark", this.bookmark)
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
