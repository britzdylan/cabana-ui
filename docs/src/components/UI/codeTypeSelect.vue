<template>
  <select
    :value="modelValue"
    @input="updateValue"
    style="background: none"
    class="bg-opacity-0 text-neutral-400 w-14 border-none outline-none">
    <option
      :selected="option.value == 'html'"
      v-for="option in options"
      :key="option.value"
      :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';

  defineProps({
    modelValue: {
      type: String,
      required: false,
      default: '',
    },
    options: {
      type: Array as () => Array<{ label: string; value: string }>,
      required: true,
    },
  });

  const emits = defineEmits(['update:modelValue']);

  const updateValue = (event: Event) => {
    emits('update:modelValue', (event.target as HTMLSelectElement).value);
  };
</script>

<style scoped>
  /* You can add your styles here */
</style>
