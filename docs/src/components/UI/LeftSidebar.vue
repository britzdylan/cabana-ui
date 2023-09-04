<template>
  <aside class="sticky top-0" title="Site Navigation">
    <div
      class="flex items-center gap-4 p-4 justify-between text-slate-500 sticky top-0 dark:bg-slate-950 bg-slate-50">
      <a class="font-medium flex items-center gap-4 text-white" href="/">
        <img src="/logo.svg" class="w-24" alt="Cabana Design System Logo" />
      </a>
      <p class="text-body-lg pl-2 border-l leading-4 border-slate-500">Docs</p>
    </div>
    <nav aria-labelledby="grid-left" class="p-4">
      <ul
        class="flex flex-col justify-start gap-1 text-slate-500 dark:text-slate-400 text-body-sm w-full">
        <li v-for="item in SIDEBAR" :key="item.name" class="flex flex-col">
          <div
            class="hover:bg-slate-800/40 dark:hover:bg-slate-800/40 cursor-pointer px-3 py-2 rounded flex items-center justify-between w-full">
            <a :href="item.link">{{ item.name }}</a>
            <ChevronRightIcon class="w-4 h-4" />
          </div>
          <ul
            v-if="item.children"
            class="flex flex-col gap-1 ml-2 my-2 overflow-hidden">
            <li
              v-for="child in item.children"
              :key="child.name"
              class="w-full ml-2">
              <a :class="getchildLinkClasses(child)" :href="child.link">{{
                child.name
              }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { SIDEBAR, sidebar } from '../../../config';
  import Logo from '../content/Logo.astro';
  import { ChevronRightIcon } from '@heroicons/vue/24/solid';

  const currentPage = ref<string>(''); // You can set the default value or fetch it from the route
  const currentPageMatch = currentPage.value.slice(1);

  const isCurrentPage = (item: sidebar) => {
    if (item.link) {
      return item.link.includes(currentPageMatch);
    }
    return false;
  };

  const getLinkClasses = (link: sidebar) => {
    const baseClasses =
      'text-label-sm block py-1.5 text-neutral-500 hover:text-neutral-900 ml-2';
    return isCurrentPage(link)
      ? baseClasses + ' !text-primary-400'
      : baseClasses;
  };

  const getchildLinkClasses = (link: sidebar) => {
    const baseClasses =
      'text-label-sm block hover:bg-slate-800/40 dark:hover:bg-slate-800/40 cursor-pointer !hover:text-slate-300 px-2 py-1 rounded';
    return isCurrentPage(link)
      ? baseClasses + ' bg-slate-200 dark:bg-slate-800/40'
      : baseClasses;
  };
</script>

<style scoped>
  /* Add any component-specific styles here */
</style>
