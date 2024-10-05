<template>
  <div class="form-container">
    <h2>Agregar Nuevo Usuario</h2>

    <div class="form-group">
      <label for="name">Name</label>
      <input v-model="name" type="text" placeholder="Name" />
    </div>

    <div class="form-group">
      <label for="email">Email</label>
      <input v-model="email" type="email" placeholder="Email" />
    </div>

    <button @click="addUser" class="submit-btn">Agregar Usuario</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');

const addUser = () => {
  const newUser = {
    id: Date.now(),
    name: name.value,
    email: email.value,
  };

  if (newUser.name && newUser.email) {
    $emit('add-user', newUser); // Emitimos el evento al componente padre
    alert('Usuario agregado correctamente');
    resetForm();
  } else {
    alert('Por favor, completa todos los campos.');
  }
};

const resetForm = () => {
  name.value = '';
  email.value = '';
};
</script>

<style scoped>
.form-container {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  margin: 20px auto;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.submit-btn {
  padding: 10px 15px;
  background-color: #bdc445;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 16px;
}

.submit-btn:hover {
  background-color: #a1b13c;
}
</style>
