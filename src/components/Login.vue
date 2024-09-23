<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { useAuthStore } from '@/stores/auth'; // Asegúrate de que la ruta sea correcta

const username = ref('');
const password = ref('');
const error = ref('');
const router = useRouter();
const authStore = useAuthStore();

const handleLogin = async () => {
  try {
    const encodedCredentials = btoa(`${username.value}:${password.value}`);
    const response = await axios.get('http://localhost:8080/api/v1/login', {
      headers: {
        'Authorization': `Basic ${encodedCredentials}`
      }
    });
    
    console.log('Login successful:', response.data);
    authStore.setUser(response.data);
    router.push('/dashboard'); // O a donde quieras redirigir después del login
  } catch (err) {
    console.error('Login error:', err);
    error.value = 'Invalid credentials. Please try again.';
  }
};
</script>

<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="username" type="text" placeholder="Username" required>
      <input v-model="password" type="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>

  <style scoped>
  .login-container {
    background-color: #333;
    color: #fff;
    padding: 2rem;
    border-radius: 8px;
    width: 300px;
    margin: auto;
  }
  
  h2 {
    text-align: center;
    font-family: 'Quicksand', sans-serif;
    margin-bottom: 1.5rem;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  input {
    margin-bottom: 1rem;
    font-family: 'Quicksand', sans-serif;
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    background-color: #444;
    color: #fff;
  }
  
  .links {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  
  a {
    color: #bdc445;
    text-decoration: none;
    font-size: 0.8rem;
  }
  
  button {
    padding: 0.5rem;
    font-family: 'Quicksand', sans-serif;
    border: none;
    border-radius: 4px;
    background-color: #bdc445;
    color: #333;
    cursor: pointer;
    font-weight: bold;
  }
  
  button:hover {
    background-color: #e6e600;
  }
  .error-message {
  color: red;
  margin-top: 10px;
}
  </style>

