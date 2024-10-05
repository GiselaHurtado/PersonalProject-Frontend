<script setup>
import UserNavBar from '@/components/UserNavBar.vue';
import Appointment from '@/components/Appointment.vue';
</script>

<template>
  
    <UserNavBar />
    <Appointment />

</template>

<style scoped>
.login-view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>