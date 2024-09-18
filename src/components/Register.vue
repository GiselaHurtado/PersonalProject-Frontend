<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const router = useRouter();
const authStore = useAuthStore();

const handleRegistration = async () => {
  if (password.value !== confirmPassword.value) {
    console.error('Passwords do not match');
    return;
  }

  try {
    await authStore.register(username.value, email.value, password.value);
    router.push('/');
  } catch (error) {
    console.error('Registration failed:', error);
  }
};

const goToLogin = () => {
  router.push('/login');
};
</script>

<template>
  <div class="register-container">
    <h2>SIGN UP</h2>
    <form @submit.prevent="handleRegistration">
      <input v-model="username" type="text" placeholder="Username" required>
      <input v-model="email" type="email" placeholder="Email" required>
      <input v-model="password" type="password" placeholder="Password" required>
      <input v-model="confirmPassword" type="password" placeholder="Confirm Password" required>
      <div class="links">
        <a href="#" @click.prevent="goToLogin">Already have an account? Login</a>
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>
<style scoped>
.register-container {
  background-color: #333;
  color: #fff;
  padding: 2rem;
  border-radius: 8px;
  width: 300px;
  margin: auto;
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
}

form {
  display: flex;
  flex-direction: column;
}

input {
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #444;
  color: #fff;
}

.links {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

a {
  color: #ffff00;
  text-decoration: none;
  font-size: 0.8rem;
}

button {
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #ffff00;
  color: #333;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: #e6e600;
}
</style>