import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HomeView from '../../views/HomeView.vue'
import NavbarComponent from '../../components/NavbarComponent.vue'

describe('HomeView', () => {
  it('renders NavbarComponent', () => {
    const wrapper = mount(HomeView)
    // Comprobar que el componente NavbarComponent existe dentro de la vista HomeView
    expect(wrapper.findComponent(NavbarComponent).exists()).toBe(true)
  })
})
