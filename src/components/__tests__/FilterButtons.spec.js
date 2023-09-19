import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import FilterButtons from '../../components/FilterButtons.vue'

describe('FilterButtons', () => {
  it('has three buttons, one for each category', () => {

    const wrapper = shallowMount(FilterButtons)
    const buttons = wrapper.findAll('button')

    expect(buttons.length).toBe(3)
    expect(buttons[0].text()).toBe('Todos')
    expect(buttons[1].text()).toBe('Gatos')
    expect(buttons[2].text()).toBe('Perros')
  })
})