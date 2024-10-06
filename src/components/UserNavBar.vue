<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth'; 

const router = useRouter();
const authStore = useAuthStore(); 

const userName = ref(authStore.userName || 'User'); 


const logout = () => {
  authStore.logout(); 
  router.push('/login'); 
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
      <a @click="router.push('/')">HOME</a>
      <a @click="router.push('/about')">ABOUT ME</a>
      <a @click="router.push('/services')">SERVICES</a>
      <a @click="router.push('/contact')">CONTACT ME</a>
    </div>
    <div class="right-section">
     
      <div class="user-section">
        <!-- Saludo al usuario -->
        <span class="user-greeting">Hi, {{ userName }}</span>
        <!-- Botón de Logout -->
        <button class="auth-button" @click="logout">LOGOUT</button>
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
  color: #bdc445; /* Verde fluorescente */
  background: transparent;
}

.right-section {
  display: flex;
  align-items: center;
  gap: 20px;
}


.user-section {
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-greeting {
  font-family: 'Quicksand', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #000;
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
  margin-right: 40px;
}

.auth-button:hover {
  background-color: #333;
}


@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    height: auto;
    padding: 10px;
  }
  .menu {
    flex-direction: column;
    gap: 10px;
  }
  .right-section {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
