import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import HomeView from '../../views/HomeView.vue'
import FooterComponent from '../../components/FooterComponent.vue'

describe('HomeView', () => {
  it('renders FooterComponent', () => {
    // Importamos la función shallowMount() de Vue Test Utils
    // Esta función nos permite montar un componente sin sus dependencias

    const wrapper = shallowMount(HomeView)

    // Comprobamos que el componente FooterComponent existe dentro de la vista HomeView
    // Para ello, usamos la función findComponent() de Vue Test Utils
    // Esta función nos permite encontrar un componente específico dentro de un wrapper

    expect(wrapper.findComponent(FooterComponent).exists()).toBe(true)
  })
})