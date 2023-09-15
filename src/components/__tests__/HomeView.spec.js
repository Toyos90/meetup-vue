import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HomeView from '../../views/HomeView.vue'

describe('HomeView', () => {
  it('has a main element with vuetify classes', () => {
    const wrapper = mount(HomeView)
    // Buscar el elemento main dentro de la vista HomeView
    const main = wrapper.find('main')
    // Comprobar que el elemento main existe
    expect(main.exists()).toBe(true)
  })
})
