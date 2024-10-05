<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';

const tableData = ref([
  { id: 1, registrationDate: '2023-01-15', name: 'Dakota Rice', email: 'dakota.rice@example.com', student: 'Yes' },
  { id: 2, registrationDate: '2023-03-12', name: 'Minerva Hooper', email: 'minerva.hooper@example.com', student: 'No' },
  { id: 3, registrationDate: '2023-02-22', name: 'Sage Rodriguez', email: 'sage.rodriguez@example.com', student: 'Yes' },
  { id: 4, registrationDate: '2023-04-18', name: 'Philip Chaney', email: 'philip.chaney@example.com', student: 'No' },
  { id: 5, registrationDate: '2023-05-05', name: 'Doris Greene', email: 'doris.greene@example.com', student: 'Yes' },
  { id: 6, registrationDate: '2023-06-25', name: 'Mason Porter', email: 'mason.porter@example.com', student: 'No' },
  { id: 7, registrationDate: '2023-07-12', name: 'Alden Chen', email: 'alden.chen@example.com', student: 'Yes' },
  { id: 8, registrationDate: '2023-08-14', name: 'Colton Hodges', email: 'colton.hodges@example.com', student: 'No' }
]);

const searchQuery = ref('');
const filteredData = computed(() => {
  return tableData.value.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const deleteUser = async (id) => {
  try {
    await axios.delete(`/api/v1/users/${id}`, {
      auth: {
        username: 'admin',
        password: 'admin_password'
      }
    });
    tableData.value = tableData.value.filter(user => user.id !== id);
    alert('Usuario eliminado correctamente');
  } catch (error) {
    console.error('Error al eliminar el usuario:', error);
    alert('No se pudo eliminar el usuario');
  }
};

const editUser = (user) => {
  alert(`Editando usuario: ${user.name}`);
};

const addUser = async () => {
  const newUser = { id: Date.now(), registrationDate: '2024-01-01', name: 'New User', email: 'new.user@example.com', student: 'Yes' };
  try {
    await axios.post('/api/v1/users', newUser, {
      auth: {
        username: 'admin',
        password: 'admin_password'
      }
    });
    tableData.value.push(newUser);
    alert('Usuario agregado correctamente');
  } catch (error) {
    console.error('Error al agregar el usuario:', error);
    alert('No se pudo agregar el usuario');
  }
};
</script>

<template>
  <div class="table-container">
    <h1>REGISTERED PEOPLE</h1>

    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Registration Date</th>
            <th>Name</th>
            <th>Email</th>
            <th>Student</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in filteredData" :key="row.id">
            <td>{{ row.id }}</td>
            <td>{{ row.registrationDate }}</td>
            <td>{{ row.name }}</td>
            <td>{{ row.email }}</td>
            <td>{{ row.student }}</td>
            <td class="actions">
              <button class="action-btn" @click="editUser(row)"><i class="fa fa-edit"></i></button>
              <button class="action-btn" @click="deleteUser(row.id)"><i class="fa fa-trash"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <button class="add-btn" @click="addUser">Agregar Usuario</button>
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
  overflow-x: auto; /* Permite el scroll horizontal en pantallas pequeñas */
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

/* Estilos para dispositivos móviles */
@media (max-width: 768px) {
  .table th, .table td {
    font-size: 14px;
    padding: 10px;
  }

  .add-btn {
    font-size: 14px;
    padding: 12px 16px;
  }
}

@media (max-width: 480px) {
  .table th, .table td {
    font-size: 12px;
    padding: 8px;
  }

  .add-btn {
    font-size: 12px;
    padding: 10px 14px;
  }

  .actions {
    gap: 5px;
  }
}
</style>
