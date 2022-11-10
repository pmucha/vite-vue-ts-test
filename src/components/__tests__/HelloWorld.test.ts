import { describe, expect, it } from 'vitest';
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld component', () => {
  it('renders form component with a proper message', () => {
    const msg = 'Vue test'

    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    })

    const h1 = wrapper.find("h1")

    expect(h1.text()).toBe(msg)
  })
})
