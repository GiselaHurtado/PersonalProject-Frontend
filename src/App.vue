<script setup>
import { RouterView } from 'vue-router';
import { computed } from 'vue';
import { useAuthStore } from '@/stores/auth'; 
import GeneralNavBar from './components/GeneralNavBar.vue'; 
import UserNavBar from './components/UserNavBar.vue'; 
import AdminNavBar from './components/AdminNavBar.vue'; 

const authStore = useAuthStore();


const userRole = computed(() => authStore.role);  
const isAuthenticated = computed(() => authStore.isAuthenticated);
</script>

<template>
  <div id="app">

    <GeneralNavBar v-if="!isAuthenticated" />
    <UserNavBar v-else-if="userRole === 'ROLE_USER'" />
    <AdminNavBar v-else-if="userRole === 'ROLE_ADMIN'" />
    

    <RouterView />
  </div>
</template>

<style>
body, html {
  margin: 0px;
  padding: 0px;
  background-color: #2f2f2f;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #ffffff; 
  height: 100%;
}

</style>
