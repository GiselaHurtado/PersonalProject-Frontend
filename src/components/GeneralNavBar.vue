
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const currentLanguage = ref('ES');
const router = useRouter();

const changeLanguage = (lang) => {
  currentLanguage.value = lang;
};

const navigateTo = (route) => {
  router.push(route);
};
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
      <a @click="navigateTo('/')">HOME</a>
      <a @click="navigateTo('/about')">ABOUT ME</a>
      <a @click="navigateTo('/services')">SERVICES</a>
      <a @click="navigateTo('/contact')">CONTACT ME</a>
    </div>
    <div class="right-section">
      <div class="language-selector">
        <span :class="{ 'active': currentLanguage === 'ES' }" @click="changeLanguage('ES')">ES</span>
        <span :class="{ 'active': currentLanguage === 'EN' }" @click="changeLanguage('EN')">EN</span>
      </div>
      <div class="auth-buttons">
        <button class="auth-button" @click="navigateTo('/login')">LOGIN</button>
        <button class="auth-button register-btn" @click="navigateTo('/register')">REGISTER</button>
      </div>
    </div>
  </nav>
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
  padding-left: 20px;
  padding-right: 20px;
  overflow-x: auto;
}

.logo {
  height: 40px;
  flex-shrink: 0;
  margin-left: 30px;
}

.menu {
  display: flex;
  gap: 20px;
  flex-shrink: 0;
  white-space: nowrap;
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
  color: #bdc445;
  text-shadow: none;
  background: transparent;
  box-shadow: none;
}

.right-section {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
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

.register-btn {
  margin-right: 50px;
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
  color: #bdc445;
  font-weight: 500;
}

@media (max-width: 768px) {
  .navbar {
    white-space: nowrap;
    overflow-x: scroll;
  }

  .menu {
    display: flex;
    gap: 20px;
  }

  .right-section {
    display: flex;
    gap: 20px;
  }
}

@media (min-width: 769px) {
  .navbar {
    justify-content: space-between;
  }
}
</style>
