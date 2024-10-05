<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';
import AddUserForm from './AddUserForm.vue';
import EditUserForm from './EditUserForm.vue';
import DeleteUserForm from './DeleteUserForm.vue';

const tableData = ref([
  { id: 1, name: 'Dakota Rice', email: 'dakota.rice@example.com' },
  { id: 2, name: 'Minerva Hooper', email: 'minerva.hooper@example.com' },
  { id: 3, name: 'Sage Rodriguez', email: 'sage.rodriguez@example.com' },
  { id: 4, name: 'Philip Chaney', email: 'philip.chaney@example.com' },
  { id: 5, name: 'Doris Greene', email: 'doris.greene@example.com' },
  { id: 6, name: 'Mason Porter', email: 'mason.porter@example.com' },
  { id: 7, name: 'Alden Chen', email: 'alden.chen@example.com' },
  { id: 8, name: 'Colton Hodges', email: 'colton.hodges@example.com' }
]);

const searchQuery = ref('');
const filteredData = computed(() => {
  return tableData.value.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const selectedUser = ref(null);
const showAddForm = ref(false); // Estado para el modal de agregar
const showEditForm = ref(false); // Estado para el modal de editar
const showDeleteForm = ref(false); // Estado para el modal de eliminación

const handleAddUser = (newUser) => {
  tableData.value.push(newUser);
  showAddForm.value = false; // Ocultar modal de agregar
};

const handleEditUser = (updatedUser) => {
  const index = tableData.value.findIndex(user => user.id === updatedUser.id);
  if (index !== -1) {
    tableData.value[index] = updatedUser;
  }
  showEditForm.value = false; // Ocultar modal de editar
};

const handleDeleteUser = (userToDelete) => {
  tableData.value = tableData.value.filter(user => user.id !== userToDelete.id);
  showDeleteForm.value = false;
  alert('Usuario eliminado correctamente');
};

const editUser = (user) => {
  selectedUser.value = user;
  showEditForm.value = true; // Mostrar modal de editar
};

const deleteUser = (user) => {
  selectedUser.value = user;
  showDeleteForm.value = true; // Mostrar modal de eliminar
};

const toggleAddForm = () => {
  showAddForm.value = !showAddForm.value; // Alternar visibilidad del modal de agregar usuario
};
</script>

<template>
  <div class="table-container">
    <h1>REGISTERED PEOPLE</h1>

    <!-- Búsqueda de usuarios -->
    <input type="text" v-model="searchQuery" placeholder="Buscar por nombre..." />

    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in filteredData" :key="row.id">
            <td>{{ row.id }}</td>
            <td>{{ row.name }}</td>
            <td>{{ row.email }}</td>
            <td class="actions">
              <button class="action-btn" @click="editUser(row)"><i class="fa fa-edit"></i></button>
              <button class="action-btn" @click="deleteUser(row)"><i class="fa fa-trash"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Botón para agregar usuario -->
    <button class="add-btn" @click="toggleAddForm">Agregar Usuario</button>

    <!-- Modal para Agregar Usuario -->
    <div v-if="showAddForm" class="modal">
      <div class="modal-content">
        <AddUserForm @add-user="handleAddUser" />
        <button @click="showAddForm = false" class="close-btn">Cerrar</button>
      </div>
    </div>

    <!-- Modal para Editar Usuario -->
    <div v-if="showEditForm" class="modal">
      <div class="modal-content">
        <EditUserForm :userToEdit="selectedUser" @edit-user="handleEditUser" />
        <button @click="showEditForm = false" class="close-btn">Cerrar</button>
      </div>
    </div>

    <!-- Modal para Eliminar Usuario -->
    <div v-if="showDeleteForm" class="modal">
      <div class="modal-content">
        <DeleteUserForm :user="selectedUser" @delete-user="handleDeleteUser" @close="showDeleteForm = false" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'); /* Importa los iconos */

/* Mantener bordes redondeados */
.table-container {
  width: 100%;
  max-width: 1100px;
  margin: 90px auto;
  padding: 20px;
  background-color: transparent;
  border-radius: 20px;
  color: black;
}

/* Hacer la tabla responsive */
.table-responsive {
  overflow-x: auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  border-radius: 20px;
  overflow: hidden;
}

.table thead {
  background-color: #bdc445;
  color: black;
}

.table th, .table td {
  padding: 14px 18px;
  border: none;
  text-align: left;
}

.table tbody tr:nth-child(even) {
  background-color: #e0e596;
}

.table tbody tr:nth-child(odd) {
  background-color: #d2d85b;
}

.table tbody tr:hover {
  background-color: #e2e2e2;
}

.actions {
  display: flex;
  gap: 10px;
}

.action-btn {
  background: none;
  border: none;
  font-size: 18px;
  color: black;
  cursor: pointer;
}

.action-btn:hover {
  color: #7d7f7a;
}

/* Estilo del botón agregar usuario */
.add-btn {
  display: block;
  width: 100%;
  padding: 14px 18px;
  margin-top: 20px;
  background-color: #bdc445;
  border: none;
  border-radius: 20px;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: black;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-btn:hover {
  background-color: #a1b13c;
}

/* Modal styles */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
}

.close-btn {
  margin-top: 10px;
  padding: 10px;
  background-color: #bdc445;
  border: none;
  cursor: pointer;
  font-size: 14px;
}

.close-btn:hover {
  background-color: #a1b13c;
}
</style>
