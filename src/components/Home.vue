<script setup>
import Header from './Header.vue';
import Body from './Body.vue';
</script>

<template>
  <div class="home">
    <Header />
    <Body />
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>