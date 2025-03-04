<script setup>
import { computed, ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  show: Boolean,
  images: Array,
  currentIndex: Number,
});

const emit = defineEmits(["update:currentIndex", "close"]);

const currentImage = computed(() => props.images[props.currentIndex]);
const direction = ref("next");
const isAnimating = ref(false);

const next = () => {
  if (props.currentIndex < props.images.length - 1 && !isAnimating.value) {
    direction.value = "next";
    isAnimating.value = true;
    setTimeout(() => {
      emit("update:currentIndex", props.currentIndex + 1);
      setTimeout(() => {
        isAnimating.value = false;
      }, 300);
    }, 10);
  }
};

const prev = () => {
  if (props.currentIndex > 0 && !isAnimating.value) {
    direction.value = "prev";
    isAnimating.value = true;
    setTimeout(() => {
      emit("update:currentIndex", props.currentIndex - 1);
      setTimeout(() => {
        isAnimating.value = false;
      }, 300);
    }, 10);
  }
};

const close = () => {
  emit("close");
};

const handleKeydown = (e) => {
  if (!props.show) return;

  switch (e.key) {
    case "ArrowRight":
      next();
      break;
    case "ArrowLeft":
      prev();
      break;
    case "Escape":
      close();
      break;
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
});
</script>

<template>
  <transition name="fade">
    <div v-if="show" class="slider-overlay" @click.self="close">
      <div class="slider-container">
        <button
          class="nav-button prev"
          @click="prev"
          :disabled="props.currentIndex === 0 || isAnimating"
          :class="{ disabled: props.currentIndex === 0 || isAnimating }"
          aria-label="Previous image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <transition name="slide" mode="out-in">
          <div
            :key="props.currentIndex"
            class="slider-content"
            :class="{
              'slide-next': direction === 'next',
              'slide-prev': direction === 'prev',
            }"
          >
            <div class="image-wrapper">
              <img
                :src="currentImage.urls.regular"
                :alt="currentImage.user.name"
                class="slider-image"
              />
            </div>
            <div class="image-info">
              <h2>{{ currentImage.user.name }}</h2>
              <p>
                {{ currentImage.user.location || "Unknown Location" }}
              </p>
            </div>
          </div>
        </transition>

        <button
          class="nav-button next"
          @click="next"
          :disabled="
            props.currentIndex === props.images.length - 1 || isAnimating
          "
          :class="{
            disabled:
              props.currentIndex === props.images.length - 1 || isAnimating,
          }"
          aria-label="Next image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-out;
}
.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-prev.slide-enter-from {
  transform: translateX(-30px);
}
.slide-prev.slide-leave-to {
  transform: translateX(30px);
}

.slider-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.1s ease-out;

  .slider-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 2rem;
    animation: scaleIn 0.3s ease-out;
  }

  .slider-content {
    width: 100%;
    max-width: 500px;
    background-color: white;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    transition: transform 0.5s ease-in;

    .image-wrapper {
      width: 100%;
      height: 500px;
      overflow: hidden;
      position: relative;

      @media (min-width: 768px) {
        height: 600px;
      }
    }

    .slider-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .image-info {
      padding: 1.5rem;
      background-color: white;
      transition: transform 0.3s ease 0.1s, opacity 0.3s ease 0.1s;

      h2 {
        font-size: 1rem;
        margin: 0;
        font-weight: 600;
        color: #0a2b50;
      }

      p {
        margin: 0.5rem 0 0;
        color: #6e88a1;
        font-size: 0.9rem;
      }
    }
  }

  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: white;
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 10;

    &:hover:not(.disabled) {
      background: #f3f4f6;
      transform: translateY(-50%) scale(1.1);
    }

    &.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &.prev {
      left: 10rem;
    }

    &.next {
      right: 10rem;
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}

@keyframes scaleIn {
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
}
</style>
