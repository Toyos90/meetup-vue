// Importamos las dependencias necesarias
import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils' // Importamos shallowMount en lugar de mount
import LoginView from '../../views/LoginView.vue'
import Vuex from 'vuex' // Importamos Vuex
import store from '../../store' // Importamos el store

// No creamos una instancia local de Vue

// Creamos un grupo de tests para nuestra vista
describe('LoginView.vue', () => {
  // Creamos un test para verificar que el logo se renderiza correctamente
  it('renders logo correctly', () => {
    // Usamos shallowMount con la opción stubs para usar un stub para RouterLink
    const wrapper = shallowMount(LoginView, {
      props: {
        isAuthenticated: true
      },
      global: {
        plugins: [Vuex], // Instalamos Vuex como plugin global
        mocks: {
          $store: store, // Mockeamos la propiedad $store
        },
        stubs: ['router-link'] // Usamos un stub para router-link
      }
    })
    // Buscamos el elemento img dentro del componente
    const img = wrapper.find('img')
    // Verificamos que el elemento existe
    expect(img.exists()).toBe(true)
    // Verificamos que el elemento tiene el atributo src con el valor esperado
    expect(img.attributes().src).toBe('/imgs/Logo_texto.png')
    // Verificamos que el elemento tiene el atributo alt con el valor esperado
    expect(img.attributes().alt).toBe('Logo Huellitas')
  })
})
