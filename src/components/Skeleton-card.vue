<template>
  <div class="skeleton-card">
    <div class="skeleton-content">
      <div class="skeleton-title"></div>
      <div class="skeleton-location"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.skeleton-card {
  position: relative;
  height: 100%;
  min-height: 400px;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: #f3f4f6;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    animation: shimmer 2s infinite linear;
    background: linear-gradient(
      to right,
      #f3f4f6 0%,
      #e5e7eb 20%,
      #f3f4f6 40%,
      #f3f4f6 100%
    );
    background-size: 1000px 100%;
  }

  .skeleton-content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;

    .skeleton-title {
      height: 1.25rem;
      width: 60%;
      background-color: #e5e7eb;
      border-radius: 0.25rem;
      margin-bottom: 0.5rem;
    }

    .skeleton-location {
      height: 1rem;
      width: 40%;
      background-color: #e5e7eb;
      border-radius: 0.25rem;
    }
  }
}
</style>
