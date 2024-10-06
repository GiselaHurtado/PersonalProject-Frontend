<script setup>
import { ref, onMounted } from 'vue';

const images = ref([]);

onMounted(() => {
  const imageModules = import.meta.glob('@/assets/images/about/*.{jpg,jpeg,png,gif}');
  for (const path in imageModules) {
    imageModules[path]().then((mod) => {
      images.value.push(mod.default);
    });
  }
});
</script>

<template>
  <div class="body-content">
    <div v-if="images.length > 0" class="image-container">
      <img :src="images[0]" alt="Large Image" />
      <div class="overlay-text">
        <h1>I 'm Emiliano</h1>
        <p>I am a paddle tennis teacher living in Germany.</p>
        <button class="portfolio-button">Portfolio</button>
      </div>
    </div>
    <div v-else>No se han cargado imágenes.</div>
  </div>
</template>

<style scoped>
.body-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #1a1a1a;
}

.image-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin-bottom: 0px;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
}

.overlay-text h1 {
  font-size: 36px;
  font-weight: bold;
}

.overlay-text p {
  font-size: 18px;
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
</style>
