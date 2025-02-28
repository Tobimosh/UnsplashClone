<script setup>
import { onMounted } from "vue";
import useUnsplash from "@/composables/useUnsplash";
import ImageCard from "./ImageCard.vue";
import SkeletonCard from "./Skeleton-card.vue";

const { images, loading, fetchImages } = useUnsplash();

onMounted(fetchImages);
</script>

<template>
  <div class="gallery-container">
    <div class="gallery-grid">
      <template v-if="loading">
        <SkeletonCard
          v-for="n in 5"
          :key="n"
          :class="['gallery-item', `gallery-item--medium`]"
        />
      </template>
      <template v-else>
        <ImageCard
          v-for="photo in images"
          :key="photo.id"
          :photo="{
            id: photo.id,
            name: photo.user.name,
            location: photo.user.location || 'Unknown Location',
            image: photo.urls.regular,
            size: 'medium',
          }"
          :class="['gallery-item', `gallery-item--large`]"
        />
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gallery-container {
  margin-top: 2rem;

  .gallery-grid {
    display: grid;
    gap: 3rem;

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
