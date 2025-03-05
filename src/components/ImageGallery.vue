<script setup>
import { computed } from "vue";
import ProfileGrid from "./ProfileGrid.vue";
import SkeletonCard from "./Skeleton-card.vue";

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["image-click"]);

const formattedProfiles = computed(() =>
  props.images.map((image) => ({
    name: image.user?.name || "Unknown",
    location: image.user?.location || "Unknown location",
    image: image.urls.regular,
  }))
);

const handleProfileClick = (index) => {
  emit("image-click", index);
};

const skeletonPlaceholders = computed(() => {
  return Array.from({ length: props.images.length || 6 }, (_, index) => ({
    class: getGridClass(index),
  }));
});

const getGridClass = (index) => {
  const position = index % 6;
  return `grid-item-${position + 1}`;
};
</script>

<template>
  <div class="gallery-container">
    <div v-if="loading" class="gallery-grid">
      <SkeletonCard
        v-for="(skeleton, index) in skeletonPlaceholders"
        :key="index"
        :class="['gallery-item', skeleton.class]"
      />
    </div>

    <div v-else-if="images.length === 0" class="no-results">
      <p>No images found. Try a different search term.</p>
    </div>

    <ProfileGrid
      v-else
      :profiles="formattedProfiles"
      @profile-click="handleProfileClick"
    />
  </div>
</template>

<style lang="scss" scoped>
.gallery-container {
  width: 100%;

  .gallery-grid {
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(160px, auto);
    justify-content: center;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
      grid-auto-rows: auto;
    }
  }

  .gallery-item {
    width: 100%;
    min-height: 300px;
    border-radius: 10px;
    background: #f3f3f3;
    animation: pulse 1.5s infinite ease-in-out;

    &--large {
      height: 450px;
    }

    &--medium {
      height: 400px;
    }

    @media (max-width: 1024px) {
      &--large,
      &--medium {
        height: auto; /* Allow flexibility */
      }
    }

    @media (max-width: 768px) {
      min-height: 250px; /* Adjust for mobile */
    }
  }

  .grid-item-1 {
    grid-row: span 2;
  }

  .grid-item-2 {
    grid-row: span 3;
  }

  .grid-item-3 {
    grid-row: span 2;
  }

  .grid-item-4 {
    grid-row: span 2;
  }

  .grid-item-5 {
    grid-row: span 3;
  }

  .grid-item-6 {
    grid-row: span 2;
  }

  .no-results {
    text-align: center;
    padding: 50px 0;
    font-size: 1.2rem;
    color: #666;
  }
}
</style>
