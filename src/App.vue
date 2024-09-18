<script setup>
import { RouterView } from 'vue-router'
import Header from "./components/Header.vue";
</script>

<template>
  <div id="app">
    <Header />
    <RouterView />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #1a1a1a; /* Un negro menos intenso */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff; /* Cambia el color del texto a blanco para mejor contraste */
}
</style>