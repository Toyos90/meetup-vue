<template>
  <main>
    <NavbarComponent />
    <h3>Nuevas huellitas en adopción</h3>
    <PetFilterButtons @filter="applyFilter" />
    <div>
      <!-- Mostrar las mascotas filtradas -->
      <div v-for="pet in filteredPets" :key="pet.id">
        <PetCard :imageUrl="pet.imageUrl" :title="pet.name" :subtitle="pet.category" />
      </div>
    </div>
    <FooterComponent />
  </main>
</template>

<script>
import NavbarComponent from '../components/NavbarComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import PetCard from '../components/PetCard.vue'
import PetFilterButtons from '../components/PetFilterButtons.vue'

export default {
  components: {
    PetCard,
    PetFilterButtons,
    NavbarComponent,
    FooterComponent,
  },
  data() {
    return {
      pets: [
        { id: 1, imageUrl: 'url_de_imagen_1.jpg', name: 'Mascota 1', category: 'Perros' },
        { id: 2, imageUrl: 'url_de_imagen_2.jpg', name: 'Mascota 2', category: 'Gatos' },
        { id: 3, imageUrl: 'url_de_imagen_3.jpg', name: 'Mascota 3', category: 'Perros' },
        
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
