<script lang="ts" setup>
const props = defineProps<{
    icon: string
    title: string
    subtitle: string
}>()
</script>
<template>
    <div
        class="flex h-56 w-full flex-col items-center justify-center rounded-lg text-2xl text-gray-700 shadow"
    >
        <span class="text-3xl">{{ props.icon }}</span>
        <div class="text-3xl font-semibold">{{ props.title }}</div>
        <div class="text-sm">{{ props.subtitle }}</div>
    </div>
</template>
