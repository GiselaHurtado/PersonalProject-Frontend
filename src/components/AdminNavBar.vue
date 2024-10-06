<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();
const authStore = useAuthStore();

const logout = () => {
  authStore.logout();
  router.push('/login');
};

const isAuthenticated = ref(authStore.isAuthenticated);
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
      <a @click="router.push('/')">DASHBOARD</a>
      <a @click="router.push('/manage-users')">MANAGE USERS</a>
      <a @click="router.push('/settings')">SETTINGS</a>
    </div>

    <div class="right-section" v-if="isAuthenticated">
      <span class="admin-greeting">Hi, Admin</span>
      <button class="auth-button logout-btn" @click="logout">LOGOUT</button>
    </div>

    <div class="auth-buttons" v-else>
      <button class="auth-button" @click="router.push('/login')">LOGIN</button>
      <button class="auth-button" @click="router.push('/register')">REGISTER</button>
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow-x: auto;
}

.logo {
  height: 40px;
  flex-shrink: 0;
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
  padding: 5px 10px;
}

.menu a:hover {
  color: #bdc445;
}

.right-section {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
}

.auth-button {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 14px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.auth-button:hover {
  background-color: #333;
}

.logout-btn {
  margin-right: 50px;
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

  .auth-button {
    padding: 6px 12px;
    font-size: 12px;
  }

  .right-section span {
    font-size: 12px;
  }
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
