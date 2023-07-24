<script setup>
    import {RouterLink} from 'vue-router'

    defineProps({
        to: {
            type: String
        }
    })

</script>
<template>
        <RouterLink 
            :to="{name: to}"
            class="block md:inline-block rounded bg-blue-600 py-2 text-white uppercase  px-3 font-bold text-sm shadow hover:bg-blue-500" 
        > 
            <slot></slot>
        </RouterLink>
</template>