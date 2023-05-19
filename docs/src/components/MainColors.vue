<template>
    <div class="flex flex-col space-y-12 not-prose">
        <div v-for="(value, key) in colorNames" :key="key">
            <h3 class="text-headline-sm text-neutral-600 capitalize mb-4">{{ key }}</h3>
            <div class="grid grid-cols-5 gap-y-12 gap-x-2">
                <div :data-tooltip="tooltip" data-position="top"
                    class="tooltip relative p-2 rounded-md flex flex-col items-center hover:outline outline-1 outline-neutral-200 bg-white"
                    v-for="color in value" :key="color.value">
                    <div @click="copyToClipboard(color.value)" class="h-24 w-full rounded transition-all cursor-pointer"
                        :style="`background: ${color.value}`">
                    </div>
                    <div class="text-body-xl flex flex-col text-neutral-700 capitalize w-full p-2">
                        <p class="font-semibold">{{ color.name }}</p>
                        <p class="uppercase text-label-sm font-mono">{{ color.value }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { COLORS } from "../../design.config";


export default {
    name: 'MainColors',

    data() {
        return {
            colorNames: COLORS,
            tooltip: 'Click to copy'
        }
    },

    methods: {
        async copyToClipboard(value) {
            console.log(value)
            await navigator.clipboard.writeText(value);
            this.tooltip = 'Copied!'
            setTimeout(() => {
                this.tooltip = 'Click to copy'
            }, 1000)
        }
    }
}
</script>
  
<style scoped></style>
  