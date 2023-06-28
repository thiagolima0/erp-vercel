<script lang="ts" setup>
import { ref } from 'vue'
import useCookies from '../composables/useCookies'

const { setCookie, getCookie } = useCookies()

const darkModeEnabled = ref(getCookie('darkMode') === 'true')

document.documentElement.classList.toggle('dark', darkModeEnabled.value)

const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark', !darkModeEnabled.value)
    setCookie('darkMode', !darkModeEnabled.value, 7)
    darkModeEnabled.value = !darkModeEnabled.value
}
</script>

<template>
    <div
        @click="toggleDarkMode()"
        class="flex cursor-pointer select-none items-center justify-center rounded-md border border-gray-900 p-2 text-center dark:border-white"
    >
        <v-icon
            scale="1.2"
            v-if="darkModeEnabled"
            class="text-white"
            name="fa-sun"
        />
        <v-icon v-else scale="1.2" class="text-black" name="fa-moon" />
    </div>
</template>
