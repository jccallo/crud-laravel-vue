<template>
  <div class="row">
    <div class="col-12 mb-2">
      <!-- llamamos al componente para Crear   -->
      <router-link :to="{ name: 'create-bookmark' }" class="btn btn-success"
        ><i class="bi bi-plus-circle"></i> Nuevo</router-link
      >
      <router-link to="/create" class="btn btn-success"
        ><i class="bi bi-plus-circle"></i> Nuevo</router-link
      >
    </div>
    <div class="col-12">
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead class="bg-primary text-white">
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Url</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="bookmark in bookmarks" :key="bookmark.id">
              <td>{{ bookmark.id }}</td>
              <td>{{ bookmark.title }}</td>
              <td>{{ bookmark.url }}</td>
              <td>
                <!-- llamamos al componente para Editar     -->
                <router-link
                  :to="{ name: 'edit-bookmark', params: { id: bookmark.id } }"
                  class="btn btn-info"
                  >Editar</router-link
                >
                <a
                  type="button"
                  @click="deleteBookmark(bookmark.id)"
                  class="btn btn-danger"
                  >Eliminar</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index-bookmark",
  data() {
    return {
      bookmarks: [],
    };
  },
  mounted() {
    this.showBookmarks();
  },
  methods: {
    async showBookmarks() {
      await this.axios
        .get("/api/bookmark")
        .then((response) => {
          this.bookmarks = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.bookmarks = [];
        });
    },
    deleteBookmark(id) {
      if (confirm("¿Confirma eliminar el registro?")) {
        this.axios
          .delete(`/api/bookmark/${id}`)
          .then((response) => {
            this.showBookmarks();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>
