<script setup>
import { defineProps, defineEmits, ref } from "vue";

const props = defineProps({
  images: Array,
  currentIndex: Number,
});

const emit = defineEmits(["close"]);
const index = ref(props.currentIndex);

const prevImage = () => {
  if (index.value > 0) index.value--;
};

const nextImage = () => {
  if (index.value < props.images.length - 1) index.value++;
};
</script>

<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center"
  >
    <button
      class="absolute top-4 right-4 text-white text-2xl"
      @click="emit('close')"
    >
      ✕
    </button>

    <button class="absolute left-4 text-white text-3xl" @click="prevImage">
      ⬅
    </button>

    <img
      :src="images[index].urls.regular"
      class="max-w-3xl w-full rounded-lg"
    />

    <button class="absolute right-4 text-white text-3xl" @click="nextImage">
      ➡
    </button>
  </div>
</template>
