<template>
    <div class="flex flex-col space-y-12">
        <div v-for="(value, key) in colorNames" :key="key">
            <h3 class="capitalize">{{ key }}</h3>
            <div class="grid grid-cols-5 md:grid-cols-10 gap-y-12 gap-x-2">
                <div v-for="color in value" :key="color.value">
                    <div @click="copyToClipboard(color.value)"
                        class="h-16  rounded border border-neutral-200 transition-all cursor-pointer hover:outline-1 outline-neutral-100"
                        :style="`background: ${color.value}`"></div>
                    <div class="text-label flex flex-col text-center font-mono text-neutral-700 capitalize">
                        <span>{{ color.name }}</span>
                        <span class="uppercase text-label-sm">{{ color.value }}</span>
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
            colorNames: COLORS
        }
    },

    methods: {
        copyToClipboard(value) {
            console.log(value)
        }
    }
}
</script>
  
<style scoped></style>
  