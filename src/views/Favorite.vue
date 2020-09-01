<template>
  <div class="favorite">
    <appTable :dataList="$store.getters.getFavorites"></appTable>
  </div>
</template>

<script>
import TableComponent from "../components/TableComponent";
export default {
  name: "Favorite",
  components: {
    appTable: TableComponent,
  },
};
</script>

<style>
</style>