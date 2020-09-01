<template>
  <div id="app">
    <div id="nav">
      <appNavbar></appNavbar>
    </div>
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    appNavbar: Navbar,
  },
  created() {
    window.vueInstance = this;
  },
};
</script>

<style>

</style>