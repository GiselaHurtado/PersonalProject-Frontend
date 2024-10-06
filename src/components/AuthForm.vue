<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  isLoginMode: {
    type: Boolean,
    default: true, 
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


const handleSubmit = async () => {
  errorMessage.value = '';
  try {
    if (props.isLoginMode) { 
      await props.onSubmit(username.value, password.value);
    } else {
      await props.onSubmit(name.value, username.value, password.value);
    }
  } catch (error) {
    errorMessage.value = error.message || 'An error occurred';
  }
};


watch(() => props.isLoginMode, () => {
  username.value = '';
  password.value = '';
  name.value = '';
  errorMessage.value = '';
});
</script>
<template>
  <div class="auth-container">
    <h2>{{ props.isLoginMode ? 'Sign in to my Website' : 'Create Account' }}</h2>
    <div class="social-icons">
      <a href="#" class="icon"><i class="fab fa-facebook-f"></i></a>
      <a href="#" class="icon"><i class="fab fa-linkedin-in"></i></a>
      <a href="#" class="icon"><i class="fab fa-twitter"></i></a>
    </div>
    <p class="subtitle">
      {{ props.isLoginMode ? 'Or use your username account' : 'or use username for registration.' }}
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
.auth-container {
  background-color: #333;
  color: #fff;
  padding: 2rem;
  justify-content: center;
  border-radius: 8px;
  width: 300px;
  margin: 15rem auto; 
  box-shadow: 0 4px 15px rgba(189, 196, 69, 0.5); 
}

h2 {
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  margin-bottom: 1.5rem;
}

.social-icons {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.icon {
  margin: 0 0.5rem;
  color: #bdc445;
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

.forgot-password {
  text-align: right;
  margin-bottom: 1rem;
  color: #bdc445;
  text-decoration: none;
  font-size: 0.9rem;
}

.btn-primary {
  padding: 0.5rem;
  font-family: 'Quicksand', sans-serif;
  border: none;
  border-radius: 4px;
  background-color: #bdc445;
  color: #333;
  cursor: pointer;
  font-weight: bold;
}

.btn-primary:hover {
  background-color: #e6e600;
}

.error {
  color: red;
  margin-top: 10px;
}

/* Responsividad */
@media (max-width: 768px) {
  .auth-container {
    width: 80%;
    padding: 1.5rem;
    margin: 14rem auto; /* Ajuste para móviles medianos */
  }

  input {
    font-size: 0.9rem;
    padding: 0.7rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  .btn-primary {
    font-size: 0.9rem;
    padding: 0.7rem;
  }
}

@media (max-width: 480px) {
  .auth-container {
    width: 90%;
    padding: 1rem;
    margin: 13rem auto; /* Ajuste para pantallas pequeñas */
  }

  input {
    font-size: 0.8rem;
    padding: 0.6rem;
  }

  h2 {
    font-size: 1.2rem;
  }

  .btn-primary {
    font-size: 0.8rem;
    padding: 0.6rem;
  }
}
</style>
