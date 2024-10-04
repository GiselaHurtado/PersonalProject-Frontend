<template>
  <div class="register-view">
    <AuthForm 
      :isLoginMode="false" 
      :onSubmit="handleRegister"
    />
  </div>
</template>

<script setup>
import AuthForm from '@/components/AuthForm.vue'; // Asegúrate de que esta ruta es correcta
import { useAuthStore } from '@/stores/auth';  // Usa el store de autenticación
import { useRouter } from 'vue-router';  // Usa el router para redirigir después del registro

// Crea una instancia del store y del router
const authStore = useAuthStore();
const router = useRouter();

// Función que maneja el proceso de registro
const handleRegister = async (name, username, password) => {
  try {
    // Llama al método register del store para registrar al usuario
    await authStore.register(name, username, password);

    // Redirige al login después de un registro exitoso
    router.push('/login');
  } catch (error) {
    console.error('Registration error:', error.message);  // Manejo de errores
  }
};
</script>

<style scoped>
.register-view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}
</style>
