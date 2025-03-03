<script setup>
import ImageCard from "./ImageCard.vue";
import SkeletonCard from "./Skeleton-card.vue";

defineProps({
  images: Array,
  loading: Boolean,
});

defineEmits(["image-click"]);
</script>

<template>
  <div class="gallery-container">
    <div class="gallery-grid">
      <template v-if="loading">
        <SkeletonCard
          v-for="n in 6"
          :key="n"
          :class="[
            'gallery-item',
            `gallery-item--${n === 2 ? 'large' : 'medium'}`,
          ]"
        />
      </template>
      <template v-else>
        <ImageCard
          v-for="(photo, index) in images"
          :key="photo.id"
          :photo="{
            id: photo.id,
            name: photo.user.name,
            location: photo.user.location || 'Unknown Location',
            image: photo.urls.regular,
            size: index === 1 ? 'large' : 'medium',
          }"
          @click="$emit('image-click', index)"
          :class="[
            'gallery-item',
            `gallery-item--${
              index === 0 ? 'small' : index === 1 ? 'large' : 'medium'
            }`,
            `gallery-item-position-${index}`,
          ]"
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

    // Tablet and Desktop layout
    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, minmax(250px, auto));
      grid-auto-flow: dense;

      .gallery-item {
        &-position-0 {
          grid-column: 1;
          grid-row: 1;
        }

        &-position-1 {
          grid-column: 2;
          grid-row: 1;
        }

        &-position-2 {
          grid-column: 3;
          grid-row: 1;
        }

        &-position-3 {
          grid-column: 1;
          grid-row: 2;
        }

        &-position-4 {
          grid-column: 3;
          grid-row: 1;
        }

        &-position-5 {
          grid-column: 1;
          grid-row: 2;
        }
      }
    }

    .gallery-item {
      width: 100%;
      vertical-align: middle;
      min-height: 300px;

      @media (min-width: 768px) {
        &--large {
          // height: 100%;
          // grid-row: span 2;
          height: 450px;
        }

        &--medium {
          height: 400px;
        }

        &--small {
          height: 350px;
        }
      }
    }
  }
}
</style>
