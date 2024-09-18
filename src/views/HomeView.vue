<script setup>
import { ref, onMounted } from 'vue';

const images = ref([]);

onMounted(async () => {
  const imageModules = import.meta.glob('@/assets/images/*.{jpg,jpeg,png,gif}');
  for (const path in imageModules) {
    const mod = await imageModules[path]();
    images.value.push(mod.default);
  }
});
</script>

<template>
  <div class="home-view">
    <div class="image-container">
      <img v-for="(image, index) in images" :key="index" :src="image" :alt="`Large Image ${index + 1}`" />
    </div>
    <div v-if="images.length === 0">No se han cargado imágenes.</div>
  </div>
</template>

<style scoped>
.home-view {
  padding-top: 60px;
  padding-bottom: 60px; /* Para dar espacio al footer */
  min-height: calc(100vh - 120px); /* 100vh - (header + footer) */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1a;
}

.image-container {
  width: 450%;
  max-width: 2000px; /* Ajusta este valor según prefieras */
  margin: 0 auto;
}

.image-container img {
  width: 450%;
  height: auto;
  object-fit: contain;
  margin-bottom: 40px;
}
</style>