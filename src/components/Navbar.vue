<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark text-light">
      <i class="fas fa-video fa-3x"></i>
      <a class="navbar-brand text-light" href="/">IMDB Movie Project</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <router-link to="/" class="nav-link">
            <i class="fas fa-home text-light"> Home</i>
          </router-link>
          <router-link to="/favorite" class="nav-link">
            <i class="fas fa-star text-light"> Favorite</i>
          </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
.fas {
  margin-right: 5px;
}

</style>