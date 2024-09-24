<script setup>
import { ref } from 'vue';

const isLogin = ref(true);

const toggleForm = () => {
  isLogin.value = !isLogin.value;
};
</script>

<template>
  <div class="container">
    <div class="toggle-section" :class="{ active: !isLogin }">
      <div v-if="isLogin">
        <h2>Don't have an account?</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <button @click="toggleForm" class="toggle-btn">Register</button>
      </div>
      <div v-else>
        <h2>Have an account?</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <button @click="toggleForm" class="toggle-btn">Login</button>
      </div>
    </div>
    <div class="form-box" :class="{ active: !isLogin }">
      <div v-if="isLogin">
        <h2>LOGIN</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="#" class="forgot">Forgot password?</a>
        <button class="login-btn">LOGIN</button>
      </div>
      <div v-else>
        <h2>REGISTER</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button class="register-btn">REGISTER</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

* {
  font-family: 'Quicksand', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  background-color: #2f2f2f; /* Fondo gris oscuro */
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  justify-content: space-between; /* Espacio entre los cuadros */
  align-items: center;
  min-height: 100vh;
  padding: 0 50px; /* Espaciado lateral */
}

.toggle-section {
  background-color: #bdc445;
  padding: 60px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 450px;
  border-radius: 30px;
  text-align: center;
  transition: transform 0.5s ease;
  margin-right: 50px; /* Espacio entre los cuadros */
}

.form-box {
  background-color: white;
  padding: 60px;
  width: 550px;
  height: 500px;
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s ease;
}

.form-box.active {
  transform: translateX(-600px);
}

.toggle-section.active {
  transform: translateX(600px);
}

h2 {
  margin-bottom: 20px;
  font-size: 28px;
  word-spacing: 5px; /* Espacio entre palabras */
}

p {
  margin-bottom: 20px;
  word-spacing: 2px; /* Espacio entre palabras */
}

input {
  display: block;
  width: 100%;
  padding: 18px;
  margin: 20px 0;
  border: 1px solid #ccc;
  border-radius: 15px;
}

button {
  padding: 18px 40px;
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 15px;
}

button:hover {
  background-color: #555;
}

.toggle-btn {
  background-color: transparent;
  border: 2px solid white;
  padding: 18px 40px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  border-radius: 15px;
}

.toggle-btn:hover {
  background-color: white;
  color: #e94e42;
}

.forgot {
  display: block;
  margin-top: 10px;
  color: green;
}

</style>
