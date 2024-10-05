<template>
    <div class="form-container">
      <h2>Editar Usuario</h2>
  
      <div class="form-group">
        <label for="userId">User ID</label>
        <input v-model="user.id" type="text" placeholder="User ID" readonly />
      </div>
  
      <div class="form-group">
        <label for="name">Name</label>
        <input v-model="user.name" type="text" placeholder="Name" />
      </div>
  
      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="user.email" type="email" placeholder="Email" />
      </div>
  
      <button @click="editUser" class="submit-btn">Actualizar Usuario</button>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  // Recibimos la prop 'userToEdit' directamente
  const props = defineProps({
    userToEdit: Object
  });
  
  const user = ref({ id: '', name: '', email: '' });
  
  // Observamos los cambios en la prop 'userToEdit' y actualizamos el form con los valores
  watch(() => props.userToEdit, (newUser) => {
    if (newUser) {
      user.value = { ...newUser }; // Copiamos el nuevo usuario al state
    }
  }, { immediate: true });
  
  const editUser = () => {
    if (user.value.name && user.value.email) {
      // Emitimos el evento 'edit-user' al componente padre con los datos actualizados
      emit('edit-user', user.value);
      alert('Usuario actualizado correctamente');
    } else {
      alert('Por favor, completa todos los campos.');
    }
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
  