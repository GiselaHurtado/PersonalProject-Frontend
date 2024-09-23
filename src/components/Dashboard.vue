<script setup>
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
</script>

<template>
  <div class="dashboard">
    <h1>Welcome to your Dashboard</h1>
    <p>Hello, {{ authStore.user?.username }}!</p>
    <!-- Add more dashboard content here -->
  </div>
</template>