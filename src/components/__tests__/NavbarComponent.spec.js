import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import HomeView from '../../views/HomeView.vue'
import NavbarComponent from '../../components/NavbarComponent.vue'

describe('HomeView', () => {
  it('renders NavbarComponent', () => {
    // Importamos la función shallowMount() de Vue Test Utils
    // Esta función nos permite montar un componente sin sus dependencias

    const wrapper = shallowMount(HomeView)

    // Comprobamos que el componente NavbarComponent existe dentro de la vista HomeView
    // Para ello, usamos la función findComponent() de Vue Test Utils
    // Esta función nos permite encontrar un componente específico dentro de un wrapper

    expect(wrapper.findComponent(NavbarComponent).exists()).toBe(true)
  })
})