<script setup>
import { ref, onMounted } from 'vue';

const currentLanguage = ref('ES');
const images = ref([]);

const changeLanguage = (lang) => {
  currentLanguage.value = lang;
  
};

onMounted(async () => {
  const imageModules = import.meta.glob('@/assets/images/*.{jpg,jpeg,png,gif}');
  for (const path in imageModules) {
    const mod = await imageModules[path]();
    images.value.push(mod.default);
  }
});
</script>

<template>
  <nav class="navbar">
    <div class="logo">
      <svg width="40" height="40" viewBox="0 0 100 100">
        <path d="M50 10 L90 90 L10 90 Z" fill="black" />
        <path d="M50 30 L70 70 L30 70 Z" fill="white" />
      </svg>
    </div>
    <div class="menu">
      <a href="#home">HOME</a>
      <a href="#about">ABOUT ME</a>
      <a href="#classes">PRIVATE CLASSES</a>
      <a href="#contactme">CONTACT ME</a>
    </div>
    <div class="right-section">
      <div class="language-selector">
        <span :class="{ 'active': currentLanguage === 'ES' }" @click="changeLanguage('ES')">ES</span>
        <span :class="{ 'active': currentLanguage === 'EN' }" @click="changeLanguage('EN')">EN</span>
      </div>
      <div class="auth-buttons">
        <button class="auth-button">LOGIN</button>
        <button class="auth-button">REGISTER</button>
      </div>
    </div>
  </nav>
  <div class="image-container">
    <img v-for="(image, index) in images" :key="index" :src="image" :alt="`Large Image ${index + 1}`" />
  </div>
  <div v-if="images.length === 0">No se han cargado imágenes.</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=swap');

.navbar {
  background-color: #fff;
  color: #000;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 1000;
}

.logo {
  height: 40px;
}

.menu {
  display: flex;
  gap: 20px;
}

.menu a {
  color: #000;
  text-decoration: none;
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  font-size: 16px;
  transition: color 0.3s ease;
  background: transparent;
  padding: 5px 10px;
}

.menu a:hover {
  color: #00ff40; /* Verde fluorescente */
  text-shadow: none;
  background: transparent;
  box-shadow: none;
}

.right-section {
  display: flex;
  align-items: center;
  gap: 20px;
}

.auth-buttons {
  display: flex;
  gap: 10px;
}

.auth-button {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 14px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #000000;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.auth-button:hover {
  background-color: #333;
}

.language-selector {
  display: flex;
  gap: 10px;
}

.language-selector span {
  cursor: pointer;
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  font-size: 14px;
}

.language-selector .active {
  color: #00ff40;
  font-weight: 500;
}

.image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px; /* Para dar espacio al navbar fijo */
  padding: 20px;
}

.image-container img {
  width: 1200px;
  height: 800px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  margin-bottom: 20px;
}
</style>