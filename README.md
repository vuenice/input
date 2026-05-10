# @vuenice/input

Vue 3 Input component with validation and custom styling.

## Installation

```bash
npm install @vuenice/input
```

## Usage

### Composition API (Recommended)

```vue
<script setup>
import VueNiceInput from '@vuenice/input';
</script>

<template>
  <VueNiceInput id="username" v-model="username" placeholder="Enter username" />
</template>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | String, Number | `''` | v-model value |
| `id` | String | required | Unique input identifier |
| `type` | String | `'text'` | Input type: text, email, password, number, etc. |
| `placeholder` | String | `''` | Placeholder text |
| `label` | String | `''` | Input label |
| `disabled` | Boolean | `false` | Disable the input |
| `error` | String | `''` | Error message to display |
| `hintText` | String | `''` | Hint text below input |
| `width` | String | `'w-full'` | Input width class |
| `extraClass` | String | `''` | Additional CSS classes |
| `imageLeft` | String | `''` | Image path for left icon |
| `iconLeft` | String | `''` | Icon component name for left |
| `imageRight` | String | `''` | Image path for right icon |
| `iconRight` | String | `''` | Icon component name for right |
| `min` | Number | `''` | Minimum value for number type |
| `max` | Number | `''` | Maximum value for number type |

### Slots

- Default slot: Input content (takes precedence over label)

### Events/Emits

The component emits all native input events. You can listen to them using the `@` prefix:

```vue
<VueNiceInput id="email" v-model="email" @input="handleInput" @blur="handleBlur" @focus="handleFocus" />
```

Common emits:
- `@input` - Emitted on input
- `@blur` - Emitted when input loses focus
- `@focus` - Emitted when input gains focus
- `@keypress.enter` - Emitted on Enter key
- `@keyup` - Emitted on keyup
- `@update:modelValue` - v-model update

## Examples

### Basic Usage

```vue
<VueNiceInput id="username" v-model="username" placeholder="Enter username" />
```

### With Error

```vue
<VueNiceInput 
  id="email" 
  v-model="email" 
  type="email"
  placeholder="Enter email"
  error="Invalid email address"
/>
```

### With Icons

```vue
<VueNiceInput 
  id="password" 
  v-model="password" 
  type="password"
  placeholder="Enter password"
  icon-left="LockClosedIcon"
  icon-right="EyeIcon"
/>
```

### With Hint

```vue
<VueNiceInput 
  id="username" 
  v-model="username" 
  placeholder="Enter username"
  hint-text="Username must be at least 3 characters"
/>
```

## License

MIT