<script setup>
import { RouterView } from 'vue-router';
import Header from "./components/Header.vue";
</script>

<template>
  <div id="app">
    <Header />
    <RouterView />
  </div>
</template>

<style>
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #2f2f2f; /* Fondo gris oscuro */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff; /* Cambia el color del texto a blanco para mejor contraste */
  height: 100%;
}

</style>
