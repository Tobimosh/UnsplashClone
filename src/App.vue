<script setup>
import { ref, onMounted } from "vue";
import ImageGallery from "./components/ImageGallery.vue";
import Searchbar from "./components/Search-bar.vue";
import ImageSlider from "./components/Image-slider.vue";
import useUnsplash from "@/composables/useUnsplash";

const { images, loading, fetchImages } = useUnsplash();
const searchQuery = ref("");
const searchState = ref("idle");

const showSlider = ref(false);
const currentImageIndex = ref(0);

const handleImageClick = (index) => {
  currentImageIndex.value = index;
  showSlider.value = true;
};

const closeSlider = () => {
  showSlider.value = false;
};

const handleSearch = async (query) => {
  searchQuery.value = query;
  searchState.value = "searching";

  try {
    await fetchImages(query);
    if (images.value.length > 0) {
      searchState.value = "success";
    } else {
      searchState.value = "error";
    }
  } catch (error) {
    searchState.value = "error";
  }
};
const resetSearch = () => {
  searchQuery.value = "";
  searchState.value = "idle";
  fetchImages(); // Fetch default images
};
onMounted(() => fetchImages());
</script>

<template>
  <div class="app-container">
    <main class="main-content">
      <header class="top-content">
        <div v-if="searchState === 'idle'">
          <Searchbar @search="handleSearch" />
        </div>
        <div v-else class="search-status">
          <h1 v-if="searchState === 'searching'">
            Searching for
            <span class="searchWord">"{{ searchQuery }}"</span> ...
          </h1>
          <h1 v-else-if="searchState === 'success'">
            <button @click="resetSearch" class="back">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="
      M19 11H7.83
      l4.88-4.88c.39-.39.39-1.03 0-1.42
      a.996.996 0 0 0-1.41 0l-6.59 6.59
      a.996.996 0 0 0 0 1.41l6.59 6.59
      a.996.996 0 1 0 1.41-1.41L7.83 13H19
      c.55 0 1-.45 1-1s-.45-1-1-1
    "
                />
              </svg>
            </button>
            Search Results for
            <span class="searchWord">"{{ searchQuery }}"</span>
          </h1>
          <h1 v-else-if="searchState === 'error'">
            No results found for
            <span class="searchWord">"{{ searchQuery }}"</span>
          </h1>
        </div>
      </header>
      <div class="gallery-wrapper">
        <ImageGallery
          :images="images"
          :loading="loading"
          @reset-search="resetSearch"
          @image-click="handleImageClick"
        />
      </div>
    </main>

    <ImageSlider
      v-model:currentIndex="currentImageIndex"
      :show="showSlider"
      :images="images"
      @close="closeSlider"
    />
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  min-height: 100vh;

  .top-content {
    background-color: #dde3eb;
    width: 100%;
    height: auto;
    min-height: 220px;
    padding: 2.5rem 1rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      min-height: 180px;
      padding: 2rem 1rem;
    }

    @media (max-width: 480px) {
      min-height: 150px;
      padding: 1.5rem 0.75rem;
    }
  }

  .gallery-wrapper {
    max-width: 1100px;
    margin: -100px auto 0 auto;
    padding: 2.5rem 1rem;

    @media (max-width: 768px) {
      margin-top: -80px;
      padding: 2rem 1rem;
    }

    @media (max-width: 480px) {
      margin-top: -70px;
      padding: 1.5rem 0.75rem;
    }
  }

  .search-status {
    font-size: 3rem;
    font-weight: 300;
    max-width: 1200px;
    margin: 0 auto;
    color: #22354b;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media (max-width: 480px) {
      font-size: 1.3rem;
    }

    h1 {
      font-size: 3rem;
      display: flex;
      align-items: center;
      margin: 0;

      @media (max-width: 768px) {
        font-size: 2rem;
      }

      @media (max-width: 480px) {
        font-size: 1.5rem;
      }
    }

    .searchWord {
      opacity: 50%;
      text-transform: capitalize;
    }
  }
}
</style>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

* {
  box-sizing: border-box;
}

html {
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 15.5px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }

  .back {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    cursor: pointer;
    display: flex;
    margin-right: 1rem;
    align-items: center;
  }
}
</style>
