<template>
  <AuthForm 
    :isLoginMode="true" 
    :onSubmit="handleLogin"
  />
</template>

<script setup>
import AuthForm from '@/components/AuthForm.vue';  
import { useAuthStore } from '@/stores/auth.js'; 
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const handleLogin = async (username, password) => {
  try {
    await authStore.login(username, password);
    router.push('/dashboard');
  } catch (error) {
    console.error('Login error:', error.message);
  }
};
</script>

<style scoped>
.login-view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  margin-left: 0px;
  margin-right: 0px;
  background-color:#1a1a1a;
}
</style>
