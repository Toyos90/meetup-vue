<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import FilterButtons from '@/components/FilterButtons.vue';
import PetCard from '@/components/PetCard.vue'


export default {
  components: {
    PetCard,
    FilterButtons,
    NavbarComponent,
    FooterComponent
  },
  data() {
    return {
      // Lista de mascotas
      pets: [
        { id: 1, imageUrl: '/imgs/dog3.png', name: 'Simba', category: 'perros', description:'' },
        { id: 2, imageUrl: '/imgs/_cat1.png', name: 'Cleo', category: 'gatos' },
        { id: 3, imageUrl: '/imgs/dog4.png', name: 'Coca', category: 'perros' },
        { id: 2, imageUrl: '/imgs/cat4.png', name: 'Luna', category: 'gatos' },
      ],
      // Categoría seleccionada
      filterCategory: 'todos',
    };
  },
  // Propiedades computadas
  computed: {
    // Devuelve la lista de mascotas filtradas por categoría
    filteredPets() {
      if (this.filterCategory === 'perros') {
        return this.pets.filter(pet => pet.category === 'perros');
      } else if (this.filterCategory === 'gatos') {
        return this.pets.filter(pet => pet.category === 'gatos');
      } else {
        return this.pets; // Si se selecciona "Todos" o cualquier otra categoría, muestra todas las mascotas
      }
    },
  },
  // Métodos
  methods: {
    // Aplica el filtro de categoría seleccionada
    applyFilter(category) {
      this.filterCategory = category;
    },
  },
};
</script>


<!-- Este template define el contenido principal de la página de inicio. -->

<template>
  <!-- Componente de navegación -->
  <NavbarComponent />

  <!-- Sección principal -->
  <main class="home">
    <!-- Título de la sección -->
    <h3 class="home__title">Nuevas huellitas en adopción</h3>

    <!-- Carrusel con imágenes de mascotas nuevas -->
    <div class="newPets">
      <img src="imgs/cat0.png" alt="Gatete asustado">
      <img src="imgs/dog0.png" alt="Shiba">
    </div>

    <!-- Título de la sección -->
    <h3 class="home__title">Adopta una huellita</h3>

    <!-- Componentes para filtrar las mascotas por categoría -->
    <FilterButtons @filter="applyFilter" />

    <!-- Sección con las mascotas filtradas -->
    <section class="petCards__container">
      <!-- Iterar sobre la lista de mascotas filtradas y mostrar cada una como una tarjeta de mascota -->
      <article v-for="pet in filteredPets" :key="pet.id">
        <PetCard :imageUrl="pet.imageUrl" :title="pet.name" :subtitle="pet.category" />
      </article>
    </section>
  </main>

  <!-- Componente de pie de página -->
  <FooterComponent />
</template>


<style>
  .home{
    padding: 1.5rem;
  }

  .home__title{
    font-size: 1rem;
    font-weight: 300;
  }
  .newPets{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 1rem 2rem;
    padding: 0 0.3rem;
    }

  .newPets img {
    max-width: 60%; /* Ajusta el ancho de las imágenes para centrarlas horizontalmente */
    max-height: 60%; /* Ajusta la altura de las imágenes para centrarlas verticalmente */
  }
  .petCards__container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;}
  
 main{ 
    background-color: var(--light);}
</style>