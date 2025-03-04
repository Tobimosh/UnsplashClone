import { ref } from "vue";
import axios from "axios";

const useUnsplash = () => {
  const images = ref([]);
  const loading = ref(false);

  const fetchImages = async (query = "African") => {
    loading.value = true;
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}`,
        {
          headers: {
            Authorization: `Client-ID ${process.env.VUE_APP_UNSPLASH_ACCESS_TOKEN}`,
          },
        }
      );
      images.value = response.data.results;
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      loading.value = false;
    }
  };

  return { images, loading, fetchImages };
};

export default useUnsplash;
