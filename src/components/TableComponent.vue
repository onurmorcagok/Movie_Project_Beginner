<template>
  <table class="table bg-dark text-light">
    <thead class="bg-danger text-light">
      <tr>
        <td>TITLE</td>
        <td>TYPE</td>
        <td>YEAR</td>
        <td>POSTER</td>
        <td>IS FAVORITE</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in dataList" :key="index">
        <td>{{item.Title}}</td>
        <td>{{item.Type}}</td>
        <td>{{item.Year}}</td>
        <td>
          <img :src="item.Poster" width="200px" />
        </td>
        <td>
          <a @click.prevent="setFavorite(item)">
            <b-icon
              :icon=" isFavorite(item.imdbID) ? 'star-fill' : 'star'"
              scale="2"
              variant="warning"
            ></b-icon>
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "TableComponent",
  props: {
    dataList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    setFavorite(movieItem) {
      let message = "";
      if (this.isFavorite(movieItem.imdbID)) {
        if (confirm(`Do you want to remove the ${movieItem.Title} from favorites?`)) {
          message = `${movieItem.Title} has been removed from favorites`;
          this.$store.commit("REMOVE_FAVORITE", movieItem);
        }
      } else {
        message = `${movieItem.Title} has been added to favorites`;
        this.$store.commit("SET_FAVORITE", movieItem);
      }

      this.$bvToast.toast(message, {
        title: "ALERT",
        autoHideDelay: 2000,
      });
    },
    isFavorite(imdbID) {
      return this.$store.state.favorites.filter((item) => item.imdbID === imdbID)[0];
    },
  },
};
</script>

<style>
.table {
  text-align: center;
}
</style>