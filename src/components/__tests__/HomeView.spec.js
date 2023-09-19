// HomeView.spec.js
// Importamos las funciones necesarias para realizar las pruebas
import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import HomeView from '../../views/HomeView.vue'
// Definimos una suite de pruebas para el componente HomeView
describe('HomeView', () => {
    // **Prueba 1:** Verifica que el componente tiene un elemento `main` con la clase `home`
  it('has a main element with the class home', () => {
    // Creamos una instancia superficial del componente HomeView
    const wrapper = shallowMount(HomeView)
    // Buscamos el elemento `main` dentro del componente renderizado
    const main = wrapper.find('main')
    // Verificamos que el elemento `main` existe
    expect(main.exists()).toBe(true)
    // Verificamos que el elemento `main` tiene la clase `home`
    expect(main.classes()).toContain('home')
  })

  // **Prueba 2:** Verifica que el componente filtra la lista de mascotas correctamente
  // Creamos una instancia superficial del componente HomeView
  it('filters the pet list correctly', () => {
    const wrapper = shallowMount(HomeView)
    // Verificamos que la lista de mascotas filtrada tiene 4 elementos
    const petCards = wrapper.findAll('article')
    expect(petCards.length).toBe(4)

  })
})