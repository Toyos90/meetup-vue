<script>
import NavbarComponent from '../components/NavbarComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import FilterButtons from '../components/filterButtons.vue';
import PetCard from '../components/PetCard.vue'


export default {
  components: {
    PetCard,
    FilterButtons,
    NavbarComponent,
    FooterComponent,
  },
  data() {
    return {
      pets: [
        { id: 1, imageUrl: 'public/imgs/dog3.png', name: 'Mascota 1', category: 'Perros' },
        { id: 2, imageUrl: 'public/imgs/cat3.png', name: 'Mascota 2', category: 'Gatos' },
        { id: 3, imageUrl: 'public/imgs/dog4.png', name: 'Mascota 3', category: 'Perros' },
        
      ],
      filterCategory: 'todos',
    };
  },
  computed: {
    filteredPets() {
      if (this.filterCategory === 'todos') {
        return this.pets;
      } else {
        return this.pets.filter(pet => pet.category === this.filterCategory);
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
    <NavbarComponent />
    <h3>Nuevas huellitas en adopción</h3>
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
