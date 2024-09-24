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
    <div class="image-container">
      <img v-for="(image, index) in images" :key="index" :src="image" :alt="`Large Image ${index + 1}`" />
    </div>
    <div v-if="images.length === 0">No se han cargado imágenes.</div>
  </div>
</template>

<style scoped>
.body-content {
  margin-top: 60px; /* Para dar espacio al navbar fijo */
  padding: 20px;
}

.image-container {
  position: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-left: 0;
}

.image-container img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  margin-bottom: 20px;
  margin-left: 0;
}
</style>