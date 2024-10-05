<script setup>
import { RouterView } from 'vue-router';
import { computed } from 'vue';
import { useAuthStore } from '@/stores/auth'; 
import GeneralNavBar from './components/GeneralNavBar.vue'; 
import UserNavBar from './components/UserNavBar.vue'; 
import AdminNavBar from './components/AdminNavBar.vue'; 

const authStore = useAuthStore();

// Computamos el rol del usuario desde la tienda
const userRole = computed(() => authStore.role);  // Ajustamos a authStore.role
const isAuthenticated = computed(() => authStore.isAuthenticated);
</script>

<template>
  <div id="app">
    <!-- Mostramos el navbar correspondiente al rol -->
    <GeneralNavBar v-if="!isAuthenticated" />
    <UserNavBar v-else-if="userRole === 'ROLE_USER'" />
    <AdminNavBar v-else-if="userRole === 'ROLE_ADMIN'" />
    
    <!-- La vista del router -->
    <RouterView />
  </div>
</template>

<style>
body, html {
  margin: 0;
  padding: 0;
  background-color: #2f2f2f; /* Fondo gris oscuro */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #ffffff; /* Cambia el color del texto a blanco para mejor contraste */
  height: 100%;
}

</style>
