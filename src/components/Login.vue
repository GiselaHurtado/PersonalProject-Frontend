<template>
  <div class="auth-container">
    <div class="auth-card">
      <div v-if="isLoginView" class="auth-form">
        <h2>Sign in to my Website</h2>
        <div class="social-icons">
          <a href="#" class="icon"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="icon"><i class="fab fa-linkedin-in"></i></a>
          <a href="#" class="icon"><i class="fab fa-twitter"></i></a>
        </div>
        <p class="subtitle">or use your email account</p>
        <form @submit.prevent="handleLogin">
          <input v-model="email" type="email" placeholder="Email" required>
          <input v-model="password" type="password" placeholder="Password" required>
          <a href="#" class="forgot-password">Forgot your password?</a>
          <button type="submit" class="btn-primary">SIGN IN</button>
        </form>
      </div>
      <div v-else class="auth-form">
        <h2>Create Account</h2>
        <div class="social-icons">
          <a href="#" class="icon"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="icon"><i class="fab fa-linkedin-in"></i></a>
          <a href="#" class="icon"><i class="fab fa-twitter"></i></a>
        </div>
        <p class="subtitle">or use email for registration</p>
        <form @submit.prevent="handleRegister">
          <input v-model="name" type="text" placeholder="Name" required>
          <input v-model="email" type="email" placeholder="Email" required>
          <input v-model="password" type="password" placeholder="Password" required>
          <button type="submit" class="btn-primary">SIGN UP</button>
        </form>
      </div>
    </div>
    <div class="welcome-card">
      <div class="welcome-content">
        <h2>{{ isLoginView ? 'Hello Friend!' : 'Welcome Back!' }}</h2>
        <p>{{ isLoginView ? 'Enter your personal details and start journey with us' : 'To keep connected with us please login with your personal info' }}</p>
        <button @click="toggleView" class="btn-secondary">
          {{ isLoginView ? 'SIGN UP' : 'SIGN IN' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isLoginView = ref(true)
const email = ref('')
const password = ref('')
const name = ref('')

const toggleView = () => {
  isLoginView.value = !isLoginView.value
  email.value = ''
  password.value = ''
  name.value = ''
}

const handleLogin = () => {
  console.log('Login attempt', { email: email.value, password: password.value })
}

const handleRegister = () => {
  console.log('Register attempt', { name: name.value, email: email.value, password: password.value })
}
</script>

<style scoped>
* {
  font-family: 'Quicksand', sans-serif;
}

.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1a1a1a;
  font-family: 'Quicksand', sans-serif;
  color: #000;
  font-weight: 300;
}

.auth-card, .welcome-card {
  width: 50%;
  max-width: 500px;
  height: 500px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 13px 10px 12px 3px rgba(224, 220, 224, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  box-sizing: border-box;
  font-family: 'Quicksand', sans-serif;
  color: #000;
  font-weight: 300;
}

.auth-card {
  background-color: white;
  
}

.welcome-card {
  background-color: #bdc445;
  color: white;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  color: #000;
  font-weight: 200;
}

.welcome-content {
  max-width: 80%;
  margin: 0 auto;
}

h2 {
  margin-bottom: 1rem;
  font-size: 1.8rem;
  font-weight: bold;
  font-family: 'Quicksand', sans-serif;
  color: #000;
  font-weight: 200;
}

.subtitle {
  color: #777;
  margin-bottom: 1rem;
}

.social-icons {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.icon {
  margin: 0 0.5rem;
  color: #bdc445;
  font-size: 1.2rem;
}

.auth-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

input {
  margin-bottom: 1rem;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.forgot-password {
  text-align: right;
  margin-bottom: 1rem;
  color: #bdc445;
  text-decoration: none;
  font-size: 0.9rem;
}

.btn-primary, .btn-secondary {
  padding: 0.8rem 1rem;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  transition: background-color 0.3s;
  box-shadow: 8px 8px 8px 3px rgba(224, 220, 224, 1);
}

.btn-primary {
  background-color: #bdc445;
  color: white;
  width: 100%;
}

.btn-primary:hover {
  background-color: #aab03d;
}

.btn-secondary {
  background-color: transparent;
  border: 2px solid white;
  color: white;
  padding: 0.7rem 2rem;
  margin-top: 1rem;
}

.btn-secondary:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .auth-container {
    flex-direction: column;
    padding: 1rem;
  }

  .auth-card, .welcome-card {
    width: 100%;
    max-width: none;
    height: auto;
    margin-bottom: 1rem;
  }
}
</style>
