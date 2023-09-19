// FilterButtons.spec.ts

// Importamos las funciones necesarias para realizar las pruebas
import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import FilterButtons from '../../components/FilterButtons.vue'

// Definimos una suite de pruebas para el componente FilterButtons
describe('FilterButtons', () => {

  // **Prueba 1:** Verifica que el componente tiene tres botones, uno para cada categoría
  it('has three buttons, one for each category', () => {

    // Creamos una instancia superficial del componente FilterButtons
    const wrapper = shallowMount(FilterButtons)

    // Buscamos todos los elementos `button` dentro del componente renderizado
    const buttons = wrapper.findAll('button')

    // Verificamos que hay tres botones
    expect(buttons.length).toBe(3)

    // Verificamos que los botones tienen el texto correcto
    expect(buttons[0].text()).toBe('Todos')
    expect(buttons[1].text()).toBe('Gatos')
    expect(buttons[2].text()).toBe('Perros')
  })
})