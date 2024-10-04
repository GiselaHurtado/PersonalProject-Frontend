<!-- <script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const username = ref('');
const email = ref('');
const password = ref('');
const error = ref('');
const router = useRouter();

const handleRegister = async () => {
  try {
    const response = await axios.post('http://localhost:8080/api/v1/register', {
      username: username.value,
      email: email.value,
      password: password.value
    });
    console.log('Registration successful:', response.data);
    router.push('/login');
  } catch (err) {
    console.error('Registration error:', err);
    error.value = err.response?.data || 'Registration failed. Please try again.';
  }
};
</script>

<template>
  <div class="register-container">
    <h2>SIGN UP</h2>
    <form @submit.prevent="handleRegister">
      <input v-model="username" type="text" placeholder="Username" required autocomplete="username">
      <input v-model="email" type="email" placeholder="Email" required autocomplete="email">
      <input v-model="password" type="password" placeholder="Password" required autocomplete="new-password">
      <button type="submit">Register</button>
    </form>
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>
<style scoped>
.register-container {
  background-color: #333;
  color: #fff;
  padding: 2rem;
  justify-content:center;
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
  justify-content: center;
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
</style> -->

<script setup>

</script>

<template>

</template>

<style scoped>


</style>