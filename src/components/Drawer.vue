<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import Logo from './Logo.vue'
import useScreenSize from '../composables/useScreenSize'

const { screenWidth } = useScreenSize()

const isOpen = ref(true)

const items = ref([
    { name: 'Home', icon: 'fa-home', active: true },
    { name: 'Services', icon: 'fa-wrench', active: false },
    { name: 'Products', icon: 'fa-socks', active: false },
    { name: 'Gallery', icon: 'fa-image', active: false },
    { name: 'Contact Us', icon: 'fa-phone', active: false },
    { name: 'About Us', icon: 'fa-info', active: false },
])

watchEffect(() => {
    screenWidth.value < 768 ? (isOpen.value = false) : (isOpen.value = true)
})
</script>

<template>
    <div
        class="relative min-h-screen rounded-r-2xl bg-white duration-75 dark:bg-gray-700"
        :class="isOpen ? 'w-1/6 p-4' : 'w-16 p-2'"
    >
        <div class="h-full w-full flex-col items-center justify-center">
            <div
                @click="isOpen = !isOpen"
                class="absolute -right-4 top-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-primary-500 text-white"
                :class="!isOpen && 'rotate-180'"
            >
                <v-icon class="h-4 w-4 text-white" name="fa-chevron-left" />
            </div>
            <ul class="h-full flex-row space-y-2 overflow-y-auto">
                <div class="flex h-32 items-center justify-center">
                    <Logo
                        class="text-primary-500 dark:text-white"
                        :class="!isOpen && 'hidden h-32'"
                    />
                </div>
                <li
                    v-for="item in items"
                    :key="item.name"
                    class="flex flex-row items-center gap-2 rounded-md p-2"
                    :class="item.active && 'bg-primary-500'"
                >
                    <span
                        class="rounded bg-white/20 text-xl"
                        :class="!isOpen && 'flex-1 text-center'"
                    >
                        <v-icon
                            :class="
                                item.active ? 'text-white' : 'text-gray-600'
                            "
                            class="h-8 w-8 p-2 text-gray-600 dark:text-gray-50"
                            :name="item.icon"
                    /></span>
                    <label
                        :class="item.active ? 'text-white' : 'text-gray-600'"
                        class="flex-1 text-gray-600 dark:text-gray-50"
                        v-if="isOpen"
                        for=""
                        >{{ item.name }}</label
                    >
                </li>
            </ul>
        </div>
    </div>
</template>
