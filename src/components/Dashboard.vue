<script setup>
import { ref, computed } from 'vue';

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
</script>

<template>
  <div class="table-container">
    <h1>REGISTERED PEOPLE</h1>
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
          <td>
            <button class="action-btn"><i class="fa fa-heart"></i></button>
            <button class="action-btn"><i class="fa fa-edit"></i></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'); /* Importa los iconos */

/* Aplica el color verde al h1 */
.table-container h1 {
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  color: #bdc445; /* Verde */
  text-align: center;
}

.table-container {
  width: 100%;
  max-width: 1100px; /* Hacemos la tabla más grande */
  margin: 90px auto; /* Aumentamos el margen superior a 50px */
  padding: 20px;
  background-color: transparent;
  border-radius: 20px; /* Bordes más redondeados */
  box-shadow: none; /* Eliminamos cualquier sombra de borde */
  color: black;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
}

.search-input {
  padding: 10px;
  width: 300px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 16px;
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  border-radius: 20px; /* Bordes redondeados de la tabla */
  overflow: hidden; /* Asegurarse que el contenido respete los bordes redondeados */
}

.table thead {
  background-color: #bdc445; /* Color amarillo */
  color: black;
}

.table th,
.table td {
  padding: 14px 18px; /* Hacemos las celdas un poco más grandes */
  border: none; /* Eliminamos cualquier recuadro alrededor de las celdas */
  text-align: left;
}

.table tbody tr:nth-child(even) {
  background-color: #e0e596; /* Amarillo claro */
}

.table tbody tr:nth-child(odd) {
  background-color: #d2d85b; /* Amarillo intermedio */
}

.table tbody tr:hover {
  background-color: #e2e2e2; /* Gris al pasar el mouse */
}

.action-btn {
  background: none;
  border: none;
  font-size: 18px;
  color: black; /* Íconos en blanco */
  cursor: pointer;
  margin-right: 5px;
}

.action-btn:hover {
  color: #ff4d4d; /* Color al pasar sobre el ícono */
}
</style>
