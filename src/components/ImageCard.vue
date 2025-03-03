<template>
  <div class="photo-card" @click="$emit('click')">
    <img :src="photo.image" :alt="photo.name" class="photo-image" />
    <div class="gradient-overlay"></div>
    <div class="photo-content">
      <h3 class="photo-title">{{ photo.name }}</h3>
      <p class="photo-location">{{ photo.location }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  photo: {
    type: Object,
    required: true,
  },
});
defineEmits(["click"]);
</script>

<style lang="scss" scoped>
.photo-card {
  position: relative;
  height: 100%;
  border-radius: 0.5rem;
  overflow: hidden;

  &:hover {
    .photo-image {
      transform: scale(1.05);
    }
  }

  .photo-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .gradient-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      transparent 100%
    );
    opacity: 1;
  }

  .photo-content {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1rem;
    color: white;

    .photo-title {
      font-size: 1.125rem;
      font-weight: 500;
      margin-bottom: 0.25rem;
    }

    .photo-location {
      font-size: 0.875rem;
      opacity: 0.9;
    }
  }
}
</style>
