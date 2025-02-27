<template>
  <div class="search-bar-container">
    <div class="search-bar">
      <div class="search-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input type="text" class="search-input" placeholder="Search for photo" />
    </div>
  </div>
</template>

<!-- <script setup>
// Component logic here if needed
</script> -->

<style lang="scss" scoped>
.search-bar-container {
  margin-bottom: 2rem;
  max-width: 1200px;
  width: 100%;

  .search-bar {
    position: relative;
    overflow: hidden;
    width: 100%;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

    .search-icon {
      position: absolute;
      top: 50%;
      left: 1rem;
      transform: translateY(-50%);
      pointer-events: none;

      svg {
        height: 1.25rem;
        width: 1.25rem;
        color: #9ca3af;
      }
    }

    .search-input {
      width: 100%;
      padding: 1rem 1rem 1rem 3rem;
      background-color: white;
      border: none;
      border-radius: 0.5rem;
      font-size: 1rem;

      &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(209, 213, 219, 0.5);
      }

      &::placeholder {
        color: #9ca3af;
      }
    }
  }
}
</style>
