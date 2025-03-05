<template>
  <div class="profile-grid">
    <div
      v-for="(profile, index) in profiles"
      :key="index"
      class="profile-item"
      :class="getGridClass(index)"
    >
      <ImageCard :photo="profile" @click="handleProfileClick(index)" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import ImageCard from "./ImageCard.vue";

defineProps({
  profiles: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["profile-click"]);

const handleProfileClick = (index) => {
  emit("profile-click", index);
};

const getGridClass = (index) => {
  const position = index % 6;
  return `grid-item-${position + 1}`;
};
</script>

<style lang="scss" scoped>
.profile-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(160px, auto);
  row-gap: 2.5rem;
  column-gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  .profile-item {
    overflow: hidden;
    border-radius: 10px;
  }

  & .grid-item-1 {
    grid-row: span 2;
  }

  & .grid-item-2 {
    grid-row: span 3;
  }

  & .grid-item-3 {
    grid-row: span 2;
  }

  & .grid-item-4 {
    grid-row: span 2;
  }

  & .grid-item-5 {
    grid-row: span 3;
  }

  & .grid-item-6 {
    grid-row: span 2;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);

    & .grid-item-3,
    & .grid-item-6 {
      margin-top: 0;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: auto;

    & .grid-item-1,
    & .grid-item-2,
    & .grid-item-3,
    & .grid-item-4,
    & .grid-item-5,
    & .grid-item-6 {
      margin-top: 0;
      grid-row: span 1;
    }
  }
}
</style>
