<script>
// import NavbarComponent from '../components/NavbarComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import FilterButtons from '../components/filterButtons.vue';
import PetCard from '../components/PetCard.vue'


export default {
  components: {
    PetCard,
    FilterButtons,
    //NavbarComponent,
    FooterComponent,
  },
  data() {
    return {
      pets: [
        { id: 1, imageUrl: '/imgs/dog3.png', name: 'Simba', category: 'perros' },
        { id: 2, imageUrl: '/imgs/cat3.png', name: 'Pinche', category: 'gatos' },
        { id: 3, imageUrl: '/imgs/dog4.png', name: 'Coca', category: 'perros' },
        { id: 2, imageUrl: '/imgs/cat4.png', name: 'Luna', category: 'gatos' },
      ],
      filterCategory: 'todos',
    };
  },
  computed: {
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
  methods: {
    applyFilter(category) {
      this.filterCategory = category;
    },
  },
};
</script>


<template>
  <main>
    <!-- <NavbarComponent /> -->
    <h3>Nuevas huellitas en adopción</h3>
    <div class="newPets">
      <img src="imgs/cat0.png" alt="Gatete asustado">
      <img src="imgs/dog0.png" alt="Shiba">
    </div>

    <h3>Adopta una huellita</h3>
    <FilterButtons @filter="applyFilter" />
    <div>
      <!-- Mostrar las mascotas filtradas -->
      <div v-for="pet in filteredPets" :key="pet.id">
        <PetCard :imageUrl="pet.imageUrl" :title="pet.name" :subtitle="pet.category" />
      </div>
    </div>
    <FooterComponent />
  </main>
</template>

<style>
@import '../assets/main.css';

main{
  background-color: #E7E0DA;
}

h3{
  font-family: 'Poppins';
  margin: 2rem;
  letter-spacing: 1px;
  font-weight: none;
}
.newPets{
  display: flex;
  justify-content: center;
  align-items: center;
  gap:1.3rem;
  margin: 2rem 4rem;
  }

.newPets img {
  max-width: 60%; /* Ajusta el ancho de las imágenes para centrarlas horizontalmente */
  max-height: 60%; /* Ajusta la altura de las imágenes para centrarlas verticalmente */
}

</style>