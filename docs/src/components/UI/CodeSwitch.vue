<template>
  <div
    class="ml-auto flex rounded p-0.5 dark:bg-neutral-800 bg-neutral-100 dark:text-400 text-neutral-500 relative">
    <div ref="activeIndicator" class="activeIndicator"></div>
    <div
      @click="toggleTab('preview')"
      :class="['switchPill', { active: currentTab == 'preview' }]">
      <EyeIcon class="w-4 h-4" />
      <span>Preview</span>
    </div>
    <div
      @click="toggleTab('code')"
      :class="['switchPill', { active: currentTab == 'code' }]">
      <CodeBracketIcon class="w-4 h-4" />
      <span>Code</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { CodeBracketIcon, EyeIcon } from '@heroicons/vue/24/solid';
  import { ref } from 'vue';
  type currentTabT = 'preview' | 'code';
  const activeIndicator = ref<HTMLElement | null>(null);
  const currentTab = ref<'preview' | 'code'>('preview');

  const toggleTab = (v: currentTabT) => {
    currentTab.value = v;
    if (v === 'code') {
      activeIndicator.value?.style.setProperty('transform', 'translateX(100%)');
    } else {
      activeIndicator.value?.style.setProperty('transform', 'translateX(0%)');
    }
    emit('toggleTab', v);
  };

  const emit = defineEmits(['toggleTab']);
</script>

<style scoped>
  .switchPill {
    transition: all 0.2s ease-in-out;
    @apply flex gap-1 items-center justify-center p-1.5 leading-3 rounded !bg-none !bg-opacity-0 w-20 cursor-pointer z-10 text-label-sm;
  }

  .activeIndicator {
    transition: all 0.2s ease-in-out;
    @apply absolute top-0.5 left-0.5 bottom-0.5 w-20 rounded bg-neutral-50 dark:bg-neutral-950 z-0;
  }

  .active {
    @apply !text-neutral-900 dark:!text-neutral-100;
  }
</style>
