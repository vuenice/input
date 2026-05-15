import { DefineComponent } from 'vue';

declare const Input: DefineComponent<object, object, unknown>;
export default Input;

export interface InputProps {
  id: string;
  modelValue?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  error?: string;
  hintText?: string;
  label?: string;
  required?: boolean;
  minlength?: number;
  maxlength?: number;
}

export interface InputEmits {
  (e: 'update:modelValue', value: string): void;
  (e: 'focus', event: FocusEvent): void;
  (e: 'blur', event: FocusEvent): void;
  (e: 'change', event: Event): void;
  (e: 'keydown', event: KeyboardEvent): void;
}