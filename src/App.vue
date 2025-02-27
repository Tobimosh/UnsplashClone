<template>
  <div class="app-container">
    <main class="main-content">
      <header class="top-content">
        <Searchbar />
      </header>
      <div class="gallery-wrapper">
        <ImageGallery />
      </div>
    </main>
  </div>
</template>

<script>
import ImageGallery from "./components/ImageGallery.vue";
import Searchbar from "./components/Search-bar.vue";

export default {
  name: "App",
  components: {
    ImageGallery,
    Searchbar,
  },
};
</script>

<style lang="scss" scoped>
.app-container {
  min-height: 100vh;

  .top-content {
    background-color: #dde3eb;
    width: 100%;
    margin: 0 auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 250px;
    padding: 3rem 1rem;
  }
  .gallery-wrapper {
    max-width: 1000px;
    margin: -120px auto 0 auto;
    padding: 3rem 1rem;
  }
}
</style>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}
</style>
