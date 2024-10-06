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
    <div class="image-container" v-if="images.length > 0">
      <img :src="images[0]" alt="Large Image 1" />
    </div>
    <div v-else>No se han cargado imágenes.</div>
  </div>
</template>

<style scoped>
.home-view {
  padding-top: 60px;
  padding-bottom: 60px;
  min-height: calc(100vh - 120px); 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1a;
}

.image-container {
  position: absolute;
 margin: auto;
  top: 0;
  left: 0;
  width: 30%;
  height: 30%;

}

.image-container img {
  width: 350%;
  height: auto;
  object-fit: contain;
  margin-bottom: 40px;
  margin-left: 0%;
  margin-right: 0%;
}
</style>