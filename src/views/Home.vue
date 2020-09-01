<template>
  <div class="home">
    <div class="search">
      <br />
      <div class="d-flex flex-column w-100">
        <div class="position-relative">
          <input
            class="search-input form-control"
            v-model="searchText"
            type="text"
            placeholder="Search by movie title"/>
        </div>
      </div>
    </div>
    <br />

    <div class="movies" v-if="searchText">
      <appTable :dataList="searchMovies"></appTable>
    </div>
  </div>
</template>

<script>
import debounce from "lodash/debounce";
import TableComponent from "../components/TableComponent";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    appTable: TableComponent,
  },
  data() {
    return {
      searchText: "",
    };
  },
  watch: {
    searchText: debounce(function (newVal) {
      this.$store.dispatch("searchMovie", newVal);
    }, 500),
  },
  computed: {
    ...mapState(["searchMovies"]),
  },
};
</script>

<style>
.home {
  text-align: center;
}
</style>
