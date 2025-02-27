import { ref } from "vue";
import axios from "axios"; 


const useUnsplash = () => {
  const images = ref([]);
  const loading = ref(true);

  const fetchImages = async () => {
    try {
      const response = await axios.get("https://api.unsplash.com/photos", {
        headers: {
          Authorization: `Client-ID ${process.env.ACCESS_TOKEN}`,
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
