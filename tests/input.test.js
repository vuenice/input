import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import VueNiceInput from '../src/VueNiceInput.vue';

describe('VueNiceInput', () => {
  it('renders with basic props', () => {
    const wrapper = mount(VueNiceInput, {
      props: {
        id: 'test-input',
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('renders with placeholder', () => {
    const wrapper = mount(VueNiceInput, {
      props: {
        id: 'test-input',
        placeholder: 'Enter text...',
      },
    });
    const input = wrapper.find('input');
    expect(input.exists()).toBe(true);
    expect(input.attributes('placeholder')).toBe('Enter text...');
  });

  it('handles v-model', async () => {
    const wrapper = mount(VueNiceInput, {
      props: {
        id: 'test-input',
        modelValue: 'initial',
      },
    });
    expect(wrapper.props('modelValue')).toBe('initial');
    
    await wrapper.setProps({ modelValue: 'updated' });
    expect(wrapper.props('modelValue')).toBe('updated');
  });

  it('displays error message', () => {
    const wrapper = mount(VueNiceInput, {
      props: {
        id: 'test-input',
        error: 'This field is required',
      },
    });
    expect(wrapper.text()).toContain('This field is required');
  });

  it('displays hint text', () => {
    const wrapper = mount(VueNiceInput, {
      props: {
        id: 'test-input',
        hintText: 'Enter your email',
      },
    });
    expect(wrapper.text()).toContain('Enter your email');
  });

  it('emits events', async () => {
    const wrapper = mount(VueNiceInput, {
      props: {
        id: 'test-input',
      },
    });
    
    // Test focus event
    await wrapper.find('input').trigger('focus');
    expect(wrapper.emitted('focus')).toBeTruthy();
    
    // Test blur event
    await wrapper.find('input').trigger('blur');
    expect(wrapper.emitted('blur')).toBeTruthy();
    
    // Test input event
    await wrapper.find('input').setValue('test');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
  });

  it('respects disabled prop', () => {
    const wrapper = mount(VueNiceInput, {
      props: {
        id: 'test-input',
        disabled: true,
      },
    });
    const input = wrapper.find('input');
    expect(input.attributes('disabled')).toBeDefined();
  });
});