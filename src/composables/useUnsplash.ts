import { ref } from "vue";
import axios from "axios";

const useUnsplash = () => {
  const images = ref([]);
  const loading = ref(true);

  const fetchImages = async () => {
    try {
      const response = await axios.get("https://api.unsplash.com/photos?query=African", {
        headers: {
          Authorization: `Client-ID F3txOxcuR0vXPVKkfoNVX_vLS0EKboMLBnvjQkhULUo`,
        },
      });
      images.value = response.data;
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      loading.value = false;
    }
  };

  return { images, loading, fetchImages };
};

export default useUnsplash;
