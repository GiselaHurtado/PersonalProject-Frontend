<template>
  <div class="form-container">
    <h2>Agregar Nuevo Usuario</h2>

    <div class="form-group">
      <label for="name">Username</label>
      <input v-model="username" type="text" placeholder="Username" />
    </div>

    <div class="form-group">
      <label for="email">Email</label>
      <input v-model="email" type="email" placeholder="Email" />
    </div>

    <div class="form-group">
      <label for="role">Role</label>
      <select v-model="role">
        <option value="ROLE_USER">Usuario</option>
        <option value="ROLE_ADMIN">Administrador</option>
      </select>
    </div>

    <div class="form-group">
      <label for="password">Password</label>
      <input v-model="password" type="password" placeholder="Password" />
    </div>

    <button @click="addUser" class="submit-btn">Agregar Usuario</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const email = ref('');
const password = ref('');
const role = ref('ROLE_USER');

const emit = defineEmits(['add-user']);

const addUser = () => {
  const newUser = {
    username: username.value,
    email: email.value,
    password: password.value,
    roles: [role.value], // Enviamos el rol seleccionado como un array
  };

  if (newUser.username && newUser.email && newUser.password) {
    emit('add-user', newUser); // Emitimos el evento al componente padre
    alert('Usuario agregado correctamente');
    resetForm();
  } else {
    alert('Por favor, completa todos los campos.');
  }
};

const resetForm = () => {
  username.value = '';
  email.value = '';
  password.value = '';
  role.value = 'ROLE_USER';
};
</script>

<style scoped>
/* Estilos manteniendo los que ya tienes */
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

.form-group input, .form-group select {
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
