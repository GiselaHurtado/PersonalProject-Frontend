<template>
    <div class="form-container">
      <h2>Confirmar Eliminación</h2>
      <p>¿Estás seguro de que deseas eliminar el usuario <strong>{{ user.name }}</strong>?</p>
  
      <div class="form-actions">
        <button @click="deleteUser" class="submit-btn">Eliminar</button>
        <button @click="closeModal" class="cancel-btn">Cancelar</button>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    user: Object,
  });
  
  const emit = defineEmits(['delete-user', 'close']);
  
  const deleteUser = () => {
    // Emitimos el evento 'delete-user' para que el componente padre realice la acción de eliminación
    emit('delete-user', user);
  };
  
  const closeModal = () => {
    emit('close');
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
    text-align: center;
  }
  
  .form-actions {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
  
  .submit-btn {
    padding: 10px 15px;
    background-color: #e74c3c;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-size: 16px;
  }
  
  .submit-btn:hover {
    background-color: #c0392b;
  }
  
  .cancel-btn {
    padding: 10px 15px;
    background-color: #bdc445;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-size: 16px;
  }
  
  .cancel-btn:hover {
    background-color: #a1b13c;
  }
  </style>
  