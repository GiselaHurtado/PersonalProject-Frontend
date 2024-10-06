<template>
  <div class="register-view">
    <AuthForm 
      :isLoginMode="false" 
      :onSubmit="handleRegister"
    />
  </div>
</template>

<script setup>
import AuthForm from '@/components/AuthForm.vue'; 
import { useAuthStore } from '@/stores/auth';  
import { useRouter } from 'vue-router';  


const authStore = useAuthStore();
const router = useRouter();


const handleRegister = async (name, username, password) => {
  try {
   
    await authStore.register(name, username, password);

    
    router.push('/login');
  } catch (error) {
    console.error('Registration error:', error.message);  
  }
};
</script>

<style scoped>
.register-view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: #2f2f2f;
}
</style>
