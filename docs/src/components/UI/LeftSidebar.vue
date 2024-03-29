<template>
  <aside class="sticky top-0" title="Site Navigation">
    <div
      class="flex items-center gap-4 p-4 justify-start text-neutral-600 dark:text-neutral-400 sticky top-0 dark:bg-neutral-950 bg-neutral-50">
      <a
        class="font-medium flex items-center gap-4"
        href="/getting-started/install">
        <img
          src="/logo.svg"
          class="w-24 invert"
          alt="Cabana Design System Logo" />
      </a>
      <p
        class="text-body-lg pl-2 border-l leading-4 border-neutral-500 mr-auto">
        Docs
      </p>
      <!-- <ThemeSwitch /> -->
    </div>
    <nav aria-labelledby="grid-left" class="p-4">
      <ul
        class="flex flex-col justify-start gap-1 text-neutral-600 dark:text-neutral-400 text-body-sm w-full">
        <li v-for="item in SIDEBAR" :key="item.name" class="flex flex-col">
          <a
            v-if="!item.children"
            :href="item.link"
            :class="getLinkClasses(item)"
            class="">
            <p>{{ item.name }}</p>
            <ChevronRightIcon class="w-4 h-4" /> </a
          ><a
            v-if="item.children"
            @click="showChildren(item)"
            :class="getLinkClasses(item)">
            <p>{{ item.name }}</p>
            <ChevronRightIcon
              :class="[
                item.name + '-icon',
                {
                  'rotate-90': findActiveChild(item),
                },
              ]"
              class="w-4 h-4 transform transition-all ease-out duration-150" />
          </a>

          <ul
            :id="item.name"
            :style="getChildrenClasses(findActiveChild(item))"
            v-if="item.children"
            class="flex flex-col gap-1 mx-2 overflow-hidden transition-all ease-out duration-150 w-full">
            <li v-for="child in item.children" :key="child.name" class="w-full">
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
  import { SIDEBAR } from '../../../config';
  import { ChevronRightIcon } from '@heroicons/vue/24/solid';
  import type { sidebar } from '../../../config';

  const props = defineProps({
    currentPage: {
      type: String,
      default: '',
    },
  });

  const baseClass =
    '!text-neutral-600 dark:!text-neutral-400 hover:bg-neutral-200/40 dark:hover:bg-neutral-800/40 cursor-pointer px-3 py-2 rounded flex items-center justify-between w-full';

  const currentPageMatch = props.currentPage.slice(1);

  const isCurrentPage = (item: sidebar) => {
    if (item.link) {
      return item.link.includes(currentPageMatch);
    }
    return false;
  };

  const getLinkClasses = (link: sidebar) => {
    return isCurrentPage(link)
      ? baseClass +
          ' hover:!bg-primary-200/20 !text-primary-600 dark:!text-neutral-400 bg-primary-200/20 dark:bg-neutral-800/40'
      : baseClass;
  };

  const getchildLinkClasses = (link: sidebar) => {
    const baseClasses =
      '!text-neutral-600 dark:!text-neutral-400 text-label-sm block hover:bg-neutral-200/40 dark:hover:bg-neutral-800/40 cursor-pointer  px-2 py-1 rounded ml-4';
    return isCurrentPage(link)
      ? baseClasses +
          ' hover:!bg-primary-200/20 !text-primary-600 dark:!text-neutral-400 bg-primary-200/20 dark:bg-neutral-800/40'
      : baseClasses;
  };

  const showChildren = (item: sidebar) => {
    if (item.children) {
      const el = document.getElementById(item.name);
      const icon = document.getElementsByClassName(item.name + '-icon')[0];
      if (el) {
        if (el.style.height === '0px') {
          el.style.height = 'auto';
          el.style.opacity = '1';
          el.style.marginTop = '0.5rem';
          el.style.marginBottom = '0.5rem';
          icon.classList.add('rotate-90');
        } else {
          el.style.height = '0px';
          el.style.opacity = '0';
          el.style.marginTop = '0';
          el.style.marginBottom = '0';
          icon.classList.remove('rotate-90');
        }
      }
    }
  };

  const getChildrenClasses = (show: boolean) => {
    if (!show) {
      return {
        height: 0,
        opacity: 0,
        marginTop: 0,
        marginBottom: 0,
      };
    }

    return {
      height: 'auto',
      opacity: 1,
      marginTop: '0.5rem',
      marginBottom: '0.5rem',
    };
  };

  const findActiveChild = (item: sidebar) => {
    if (item.children) {
      return Boolean(item.children.find((child) => isCurrentPage(child)));
    }
    return false;
  };
</script>
