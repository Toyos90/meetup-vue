import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import FooterComponent from '../FooterComponent.vue'

describe('FooterComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(FooterComponent)
    // Comprobar que el footer tiene la clase "footer"
    expect(wrapper.classes()).toContain('footer')
    // Comprobar que el footer tiene tres iconos
    expect(wrapper.findAll('.icon').length).toBe(3)
    // Comprobar que el primer icono tiene el texto "Inicio"
    expect(wrapper.findAll('.icon')[0].text()).toContain('Inicio')
    // Comprobar que el segundo icono tiene el texto "Chat"
    expect(wrapper.findAll('.icon')[1].text()).toContain('Chat')
    // Comprobar que el tercer icono tiene el texto "Donor"
    expect(wrapper.findAll('.icon')[2].text()).toContain('Donor')
  })
})
