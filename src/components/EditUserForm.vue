<template>
  <div class="form-container">
    <h2>Editar Usuario</h2>

    <div class="form-group">
      <label for="userId">User ID</label>
      <input v-model="user.id" type="text" placeholder="User ID" readonly />
    </div>

    <div class="form-group">
      <label for="name">Username</label>
      <input v-model="user.username" type="text" placeholder="Username" />
    </div>

    <div class="form-group">
      <label for="email">Email</label>
      <input v-model="user.email" type="email" placeholder="Email" />
    </div>

    <div class="form-group">
      <label for="role">Role</label>
      <select v-model="user.roles[0]">
        <option value="ROLE_USER">Usuario</option>
        <option value="ROLE_ADMIN">Administrador</option>
      </select>
    </div>

    <div class="form-group">
      <label for="password">Password</label>
      <input v-model="user.password" type="password" placeholder="Password (Opcional)" />
    </div>

    <button @click="editUser" class="submit-btn">Actualizar Usuario</button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  userToEdit: Object
});

const emit = defineEmits(['edit-user']);
const user = ref({ id: '', username: '', email: '', roles: ['ROLE_USER'], password: '' });

watch(
  () => props.userToEdit,
  (newUser) => {
    if (newUser) {
      user.value = { ...newUser, roles: [...newUser.roles], password: '' }; // Password opcional
    }
  },
  { immediate: true }
);

const editUser = () => {
  if (user.value.username && user.value.email) {
    emit('edit-user', user.value); // Emitimos el evento al componente padre con los datos actualizados
    alert('Usuario actualizado correctamente');
  } else {
    alert('Por favor, completa todos los campos.');
  }
};
</script>

<style scoped>
/* Mantiene los estilos anteriores */
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
