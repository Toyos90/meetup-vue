import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HomeView from '../../views/HomeView.vue'
import NavbarComponent from '../NavbarComponent.vue'

describe('HomeView', () => {
  it('renders NavbarComponent', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.findComponent(NavbarComponent).exists()).toBe(true)
  })
})

