<script>
export default {
data() {
  return {
    selectedButton: 'todos',
  };
},
methods: {
  filterData(status) {
    this.$emit('filter', status);
    this.selectedButton = status;
  },
},
};
</script>

<template>
  <div class="btn_container">
    <button @click="filterData('todos')" :class="{ 'btn_filter': true, 'selected': selectedButton === 'todos' }">
      Todos
    </button>
    <button @click="filterData('gatos')" :class="{ 'btn_filter': true, 'selected': selectedButton === 'gatos' }">
      Gatos
    </button>
    <button @click="filterData('perros')" :class="{ 'btn_filter': true, 'selected': selectedButton === 'perros' }">
      Perros
    </button>
  </div>
</template>

<style scoped>
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