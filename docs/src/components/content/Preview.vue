<template>
  <div class="flex flex-col gap-2 not-prose">
    <!-- Toolbar -->
    <div class="flex w-full gap-2">
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
      <CodeSwitch />
    </div>
    <div class="component-preview">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ChevronRightIcon } from '@heroicons/vue/24/solid';
  import CodeSwitch from '../UI/CodeSwitch.vue';
</script>
