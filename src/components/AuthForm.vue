<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  isLoginMode: {
    type: Boolean,
    default: true, // Por defecto, el formulario será de login
  },
  onSubmit: {
    type: Function,
    required: true,
  },
});

const username = ref('');
const password = ref('');
const name = ref('');
const errorMessage = ref('');

// Función que maneja el envío del formulario
const handleSubmit = async () => {
  errorMessage.value = '';
  try {
    if (props.isLoginMode) {  // Usamos props.isLoginMode
      await props.onSubmit(username.value, password.value);
    } else {
      await props.onSubmit(name.value, username.value, password.value);
    }
  } catch (error) {
    errorMessage.value = error.message || 'An error occurred';
  }
};

// Resetea los campos del formulario cuando cambie de modo (login/registro)
watch(() => props.isLoginMode, () => {
  username.value = '';
  password.value = '';
  name.value = '';
  errorMessage.value = '';
});
</script>

<template>
  <div class="auth-form">
    <h2>{{ props.isLoginMode ? 'Sign in to my Website' : 'Create Account' }}</h2>
    <div class="social-icons">
      <a href="#" class="icon"><i class="fab fa-facebook-f"></i></a>
      <a href="#" class="icon"><i class="fab fa-linkedin-in"></i></a>
      <a href="#" class="icon"><i class="fab fa-twitter"></i></a>
    </div>
    <p class="subtitle">
      {{ props.isLoginMode ? 'or use your username account' : 'or use username for registration' }}
    </p>
    <form @submit.prevent="handleSubmit">
      <template v-if="!props.isLoginMode">
        <input v-model="name" type="text" placeholder="Name" required />
      </template>
      <input v-model="username" type="text" placeholder="Username" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <a v-if="props.isLoginMode" href="#" class="forgot-password">Forgot your password?</a>
      <button type="submit" class="btn-primary">
        {{ props.isLoginMode ? 'SIGN IN' : 'SIGN UP' }}
      </button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>
  </div>
</template>


<style scoped>
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

.error {
  color: red;
}

.forgot-password {
  text-align: right;
  margin-bottom: 1rem;
  color: #bdc445;
  text-decoration: none;
  font-size: 0.9rem;
}

.btn-primary {
  padding: 0.8rem 1rem;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  transition: background-color 0.3s;
  box-shadow: 8px 8px 8px 3px rgba(224, 220, 224, 1);
  background-color: #bdc445;
  color: white;
  width: 100%;
}

.btn-primary:hover {
  background-color: #aab03d;
}
</style>
