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
  position: center;
  margin-left: 0%;
  margin-right: 0%;
  top: 0;
  left: 0;
  width: 20%;
  height: 20%;
}

.image-container img {
  width: 450%;
  height: auto;
  object-fit: contain;
  margin-bottom: 40px;
}
</style>