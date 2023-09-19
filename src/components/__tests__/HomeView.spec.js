import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import HomeView from '../../views/HomeView.vue'
describe('HomeView', () => {

  it('has a main element with the class home', () => {

    const wrapper = shallowMount(HomeView)
    const main = wrapper.find('main')

    expect(main.exists()).toBe(true)
    expect(main.classes()).toContain('home')
  })
  it('filters the pet list correctly', () => {
    
    const wrapper = shallowMount(HomeView)
    const petCards = wrapper.findAll('article')

    expect(petCards.length).toBe(4)

  })
})