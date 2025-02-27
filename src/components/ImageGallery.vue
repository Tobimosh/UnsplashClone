<!-- <script setup>
import { onMounted } from "vue";
import useUnsplash from "@/composables/useUnsplash";

import ImageCard from "./ImageCard.vue";

const { images, loading, fetchImages } = useUnsplash();

onMounted(fetchImages);
</script>

<template>
  <div v-if="loading">
    <Loader />
  </div>

  <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <ImageCard v-for="image in images" :key="image.id" :image="image" />
  </div>
</template>

<style scoped>
.grid {
  column-gap: 10px;
  row-gap: 10px;
}
</style> -->

<template>
  <div class="gallery-container">
    <div class="gallery-grid">
      <ImageCard
        v-for="photo in photos"
        :key="photo.id"
        :photo="photo"
        :class="['gallery-item', `gallery-item--${photo.size}`]"
      />
    </div>
  </div>
</template>

<script>
import ImageCard from "./ImageCard.vue";

export default {
  name: "ImageGallery",
  components: {
    ImageCard,
  },
  data() {
    return {
      photos: [
        {
          id: 1,
          name: "Jordan Okeke",
          location: "Pretoria, South Africa",
          image: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fD
            B8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80`,
          size: "medium",
        },
        {
          id: 2,
          name: "Roland Olagbaye",
          location: "London, United Kingdom",
          image: `https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG9
            0by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80`,
          size: "large",
        },
        {
          id: 3,
          name: "Roland Olagbaye",
          location: "London, United Kingdom",
          image: `https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG9
            0by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80`,
          size: "medium",
        },
        {
          id: 4,
          name: "Jordan Okeke",
          location: "Pretoria, South Africa",
          image: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fD
            B8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80`,
          size: "medium",
        },
        {
          id: 5,
          name: "Jordan Okeke",
          location: "Pretoria, South Africa",
          image: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fD
            B8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80`,
          size: "large",
        },
        {
          id: 6,
          name: "Jordan Okeke",
          location: "Pretoria, South Africa",
          image: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fD
            B8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80`,
          size: "large",
        },
        // ... add the rest of your photos here
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.gallery-container {
  margin-top: 2rem;

  .gallery-grid {
    display: grid;
    gap: 1.5rem;

    // Mobile layout
    grid-template-columns: 1fr;

    // Tablet layout
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    // Desktop layout
    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }

    .gallery-item {
      width: 100%;
      min-height: 300px;

      // Size variations
      &--small {
        grid-row: span 1;
      }

      &--medium {
        grid-row: span 1;
      }

      &--large {
        @media (min-width: 768px) {
          grid-row: span 2;
        }
      }
    }
  }
}
</style>
