<template>
  <div class="flex flex-col gap-2 not-prose">
    <!-- Toolbar -->
    <div class="flex w-full gap-2 items-center">
      <ol class="breadcrumb breadcrumb-neutral">
        <li class="dark:!text-neutral-400 !text-neutral-500">
          <p>Home</p>
          <ChevronRightIcon class="w-4 h-4" />
        </li>
        <li class="dark:!text-neutral-400 !text-neutral-500">
          <p>Library</p>
        </li>
      </ol>

      <!-- switch -->
      <CodeSwitch @toggle-tab="toggleTab" />
      <div
        class="h-6 border-l-2 dark:border-neutral-700 border-neutral-300 w-1"></div>
      <codeTypeSelect v-model="codeType" :options="options" />
    </div>
    <div v-show="activeTab === 0" class="component-preview">
      <slot />
    </div>
    <div v-show="activeTab === 1 && codeType === 'html'" class="code">
      <slot name="html" />
    </div>
    <div v-show="activeTab === 1 && codeType === 'vue'" class="code">
      <slot name="vue" />
    </div>
    <div v-show="activeTab === 1 && codeType === 'jsx'" class="code">
      <slot name="jsx" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {
    ChevronRightIcon,
    ClipboardDocumentIcon,
  } from '@heroicons/vue/24/solid';
  import CodeSwitch from '../UI/CodeSwitch.vue';
  import codeTypeSelect from '../UI/codeTypeSelect.vue';
  import { ref } from 'vue';
  type currentTabT = 'preview' | 'code';

  const options = ref([
    { label: 'html', value: 'html' },
    // { label: 'vue', value: 'vue' },
  ]);

  const codeType = ref('html');
  const activeTab = ref(0);
  const toggleTab = (v: currentTabT) => {
    if (v === 'code') {
      activeTab.value = 1;
    } else {
      activeTab.value = 0;
    }
  };
</script>
