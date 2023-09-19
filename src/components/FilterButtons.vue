<script>
// Este código crea un componente Vue que permite al usuario filtrar una lista de datos según el estado de un botón.

export default {

// Definición de los datos de la clase
data() {
  // Variable que almacena el estado del botón seleccionado
  return {
    selectedButton: 'todos',
  };
},

// Definición de los métodos de la clase
methods: {

  // Método para aplicar el filtro
  filterData(status) {
    // Lógica para aplicar el filtro según el estado seleccionado
    this.$emit('filter', status);
    // Actualiza el estado del botón seleccionado
    this.selectedButton = status;
  },
},
};
</script>

<!-- Este template define una lista de botones que permiten al usuario filtrar una lista de datos. -->
<template>
  <div class="btn_container">
    <button @click="filterData('todos')" :class="{ 'btn_filter': true, 'selected': selectedButton === 'todos' }">
      <!-- Este botón representa el estado "Todos". -->
      Todos
    </button>
    <button @click="filterData('gatos')" :class="{ 'btn_filter': true, 'selected': selectedButton === 'gatos' }">
      <!-- Este botón representa el estado "Gatos". -->
      Gatos
    </button>
    <button @click="filterData('perros')" :class="{ 'btn_filter': true, 'selected': selectedButton === 'perros' }">
      <!-- Este botón representa el estado "Perros". -->
      Perros
    </button>
  </div>
</template>

<style>
  .btn_container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30px; 
  padding: 1rem 0;
  }

  .btn_filter{
    padding: 0.6rem;
  }

  .btn_filter:hover{
    width: 100px;
    background-color: var(--contraste);
    border-radius: 25px;
    color: var(--white);
  }

  .selected {
    background-color: var(--contraste);
    color: var(--white);
    border-radius: 25px;
  }
</style>