import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import HomeView from '../../views/HomeView.vue'
import NavbarComponent from '../../components/NavbarComponent.vue'

describe('HomeView', () => {
  it('renders NavbarComponent', () => {
    const wrapper = shallowMount(HomeView)
    expect(wrapper.findComponent(NavbarComponent).exists()).toBe(true)
  })
})