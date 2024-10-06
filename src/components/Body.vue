<script setup>
import { ref, onMounted } from 'vue';

const images = ref([]);

onMounted(async () => {
  const imageModules = import.meta.glob('../assets/images/homeview/*.{jpg,jpeg,png,gif}');
  for (const path in imageModules) {
    const mod = await imageModules[path]();
    images.value.push(mod.default);
  }
});
</script>

<template>
  <div class="body-content">
    <div class="text-container">
      <h1>I 'm Emiliano</h1>
      <p>I am a paddle tennis teacher living in Germany.</p>
      <button class="portfolio-button">Portfolio</button>
    </div>
    <div class="image-container">
      <img v-for="(image, index) in images" :key="index" :src="image" :alt="`Large Image ${index + 1}`" />
    </div>
    <div v-if="images.length === 0">No se han cargado imágenes.</div>
  </div>
</template>

<style scoped>
.body-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
  padding: 20px;
  width: 100vw;
  height: 100vh;
  background-color: #1a1a1a; /* Fondo negro */
  box-sizing: border-box;
}

.text-container {
  text-align: center;
  margin-bottom: 40px;
}

.text-container h1 {
  color: #ffffff;
  font-size: 48px;
  font-weight: bold;
}

.text-container p {
  color: #ffffff;
  font-size: 24px;
  margin-bottom: 20px;
}

.portfolio-button {
  background-color: #bdc445;
  color: #000;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.portfolio-button:hover {
  background-color: #a8b33a;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
}

.image-container img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}
</style>
