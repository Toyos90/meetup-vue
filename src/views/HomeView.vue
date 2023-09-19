<script setup>
import { ref, computed } from 'vue';
import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import FilterButtons from '@/components/FilterButtons.vue';
import PetCard from '@/components/PetCard.vue';

// Datos
/*Esta parte del código está creando una variable llamada pets utilizando la función ref de Vue 3. ref se utiliza para crear una referencia reactiva a un valor, lo que significa que cualquier cambio en ese valor será reactivo y actualizará automáticamente las vistas que dependan de él. En este caso, pets es una referencia reactiva a un arreglo de objetos, donde cada objeto representa una mascota con las siguientes propiedades:

id: Un identificador único para la mascota.
imageUrl: La URL de la imagen de la mascota.
name: El nombre de la mascota.
category: La categoría de la mascota, que puede ser "perros" o "gatos".
description: Una descripción opcional de la mascota.
Esta estructura de datos se utiliza para almacenar la lista de mascotas en tu componente. Al utilizar ref, cualquier cambio en pets se reflejará automáticamente en las vistas que dependan de él, lo que facilita la actualización dinámica de la lista de mascotas en la interfaz de usuario cuando sea necesario.*/

const pets = ref([
  { id: 1, imageUrl: '/imgs/dog3.png', name: 'Simba', category: 'perros' },
  { id: 2, imageUrl: '/imgs/_cat1.png', name: 'Cleo', category: 'gatos' },
  { id: 3, imageUrl: '/imgs/dog4.png', name: 'Coca', category: 'perros' },
  { id: 4, imageUrl: '/imgs/cat4.png', name: 'Luna', category: 'gatos' },
]);

// Categoría seleccionada
const filterCategory = ref('todos');

// Propiedades computadas
/*las propiedades computadas se crean utilizando la función computed. Estas propiedades calculadas se actualizan automáticamente cuando alguna de las dependencias utilizadas en ellas cambia. En este caso, la propiedad computada filteredPets se calcula en función del valor de filterCategory y pets.

filterCategory es una referencia reactiva que almacena la categoría seleccionada para filtrar las mascotas (por ejemplo, "perros" o "gatos"). Para acceder al valor de una referencia reactiva, usamos .value.

pets es una referencia reactiva que almacena la lista de mascotas.

El código dentro de la función pasada a computed se ejecutará cada vez que cualquiera de las dependencias (en este caso, filterCategory o pets) cambie. El objetivo de filteredPets es proporcionar una lista de mascotas filtradas según la categoría seleccionada.

El código dentro de la función computed realiza lo siguiente:

Si filterCategory es "perros", filtra la lista de mascotas (pets) para obtener solo las mascotas que tienen la categoría "perros".

Si filterCategory es "gatos", filtra la lista de mascotas para obtener solo las mascotas que tienen la categoría "gatos".

Si filterCategory no es ni "perros" ni "gatos" (por ejemplo, "todos" u otra categoría), devuelve la lista completa de mascotas (pets) sin ningún filtro.

En resumen, filteredPets es una propiedad computada que proporciona una lista de mascotas filtrada en función de la categoría seleccionada, y esta lista se actualizará automáticamente cuando cambie la categoría o la lista de mascotas. Esto es especialmente útil para mostrar dinámicamente las mascotas en la interfaz de usuario según el filtro seleccionado.*/
const filteredPets = computed(() => {
  if (filterCategory.value === 'perros') {
    return pets.value.filter(pet => pet.category === 'perros');
  } else if (filterCategory.value === 'gatos') {
    return pets.value.filter(pet => pet.category === 'gatos');
  } else {
    return pets.value; // Si se selecciona "Todos" o cualquier otra categoría, muestra todas las mascotas
  }
});

// Métodos
const applyFilter = (category) => {
  filterCategory.value = category;
};
</script>

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


<style scoped>
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
    max-width: 60%;
    max-height: 60%; 
  }
  .petCards__container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;}
  
 main{ 
    background-color: var(--light);}
</style>