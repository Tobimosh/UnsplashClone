<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  image: Object,
  show: Boolean,
});

const emit = defineEmits(["close"]);
</script>

<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center"
  >
    <div class="relative max-w-3xl w-full">
      <button
        class="absolute top-4 right-4 text-white text-2xl"
        @click="emit('close')"
      >
        ✕
      </button>
      <img :src="image.urls.regular" class="w-full h-auto rounded-lg" />
    </div>
  </div>
</template>
