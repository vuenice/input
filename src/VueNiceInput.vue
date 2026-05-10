
<template>
  <div :class="width">
    <div
      class="relative rounded-md"
      :class="width"
    >
      <div
        v-if="props.imageLeft || props.iconLeft"
        class="absolute left-3 top-1/2 transform -translate-y-1/2 text-grayCust-500"
      >
        <img
          v-if="props.imageLeft"
          v-lazy="cdn(props.imageLeft)"
          class="w-5 h-5"
          alt=""
        >
        <component
          :is="props.iconLeft"
          v-if="props.iconLeft"
          class="w-5 h-5 text-grayCust-500"
          aria-hidden="true"
        />
      </div>
      <input
        :id="props.id"
        v-model="inputValue"
        :type="props.type"
        :placeholder="props.placeholder"
        :disabled="props.disabled"
        class="form-control"
        :class="[{
          '!border-red-500 !text-red-500 !placeholder-red-500 focus:!ring-redCust-100 focus:!border-red-500 transition-colors duration-200': props.error,
          '!pl-10': props.iconLeft || props.imageLeft,
          '!pr-10': props.iconRight || props.imageRight,
          '!cursor-not-allowed opacity-50': props.disabled,
        }, props.extraClass, props.width]"
        :min="props.min"
        :max="props.max"
        @blur="emit('blur', $event)"
        @focus="emit('focus', $event)"
        @input="emit('input', $event)"
        @keypress.enter="emit('keypress.enter', $event)"
        @keyup="emit('keyup', $event)"
      >
      <div
        v-if="props.imageRight || props.iconRight"
        class="absolute right-3 top-1/2 transform -translate-y-1/2 text-grayCust-500"
      >
        <img
          v-if="props.imageRight"
          v-lazy="cdn(props.imageRight)"
          alt=""
        >
        <component
          :is="props.iconRight"
          v-if="props.iconRight"
          class="w-5 h-5 text-grayCust-500"
          aria-hidden="true"
        />
      </div>
    </div>
    <p
      v-if="props.error"
      class="mt-2 text-sm text-redCust-600"
    >
      {{ props.error }}
    </p>
    <p
      v-if="props.hintText && !props.error"
      class="mt-2 text-sm text-gray-500"
    >
      {{ props.hintText }}
    </p>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue';

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  error: {
    type: String,
    default: '',
  },
  hintText: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  iconLeft: {
    type: String,
    default: '',
  },
  imageLeft: {
    type: String,
    default: '',
  },
  iconRight: {
    type: String,
    default: '',
  },
  imageRight: {
    type: String,
    default: '',
  },
  extraClass: {
    type: String,
    default: '',
  },
  min: {
    type: Number,
    default: null,
  },
  max: {
    type: Number,
    default: null,
  },
  width: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue', 'blur', 'focus', 'input', 'keypress.enter', 'keyup']);

// const appStore = useAppStore();
const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});

// watch(() => appStore.refreshTable, (newValue) => {
//   if (newValue) {
//     fetchData();
//     appStore.toggleRefreshTable();
//   }
// });

watch(() => props.modelValue, () => {
  // Uncomment the next line if you want to implement filterSites
  // filterSites();
});

// Assuming you have a cdn function defined somewhere in your project
const cdn = (url) => {
  // Implement your cdn logic here
  return url;
};

</script>
<style>
::-webkit-search-cancel-button {
  -webkit-appearance: none;
  appearance: none;
  height: 16px;
  width: 16px;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cline x1='18' y1='6' x2='6' y2='18'%3e%3c/line%3e%3cline x1='6' y1='6' x2='18' y2='18'%3e%3c/line%3e%3c/svg%3e");
  background-size: contain;
  cursor: pointer;
  margin-right: 2px;
  opacity: 1;
}
</style>
