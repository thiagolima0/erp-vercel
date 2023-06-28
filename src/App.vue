<script lang="ts" setup>
// import { ref } from 'vue'
import { TableSample, Chart1, Chart2 } from './components/sample'
import Drawer from './components/Drawer.vue'
import SwitchDarkMode from './components/SwitchDarkMode.vue'
import CardSample from './components/sample/CardSample.vue'
</script>

<template>
    <div
        class="min-w-screen flex min-h-screen flex-grow bg-background dark:bg-gray-900"
    >
        <Drawer />
        <div class="container mx-auto md:px-6 px-3 py-4">
            <div class="grid flex-1 gap-y-4">
                <div class="flex w-full flex-row justify-between">
                    <h1 class="text-3xl dark:text-white">
                        Hello, welcome back 👋
                        
                    </h1>
                    <SwitchDarkMode />
                </div>

                <div
                    class="grid grid-flow-row grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2 md:grid-cols-4"
                >
                    <CardSample
                        icon="&#128526;"
                        title="33k"
                        subtitle="Weekly Sales"
                        class="bg-gradient-to-r from-sky-300 to-teal-300"
                    />
                    <CardSample
                        icon="&#128513;"
                        title="220m"
                        subtitle="New Users"
                        class="bg-gradient-to-r from-emerald-300 to-green-300"
                    />
                    <CardSample
                        icon="&#128561;"
                        title="15m"
                        subtitle="Items Orders"
                        class="bg-gradient-to-r from-purple-300 to-violet-300"
                    />
                    <CardSample
                        icon="&#129302"
                        title="1.2k"
                        subtitle="Bug Reports"
                        class="bg-gradient-to-r from-pink-300 to-rose-300"
                    />
                </div>

                <div class="flex flex-col gap-4 sm:flex-row">
                    <div
                        class="flex-1 flex-col rounded-lg border bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
                    >
                        <div class="flex-col">
                            <h3 class="font-bold dark:text-white">
                                Current Visits
                            </h3>
                        </div>
                        <Chart1 />
                    </div>
                    <div
                        class="flex-1 flex-col rounded-lg border bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
                    >
                        <div class="flex-col">
                            <h3 class="font-bold dark:text-white">
                                Website Visits
                            </h3>
                            <h4
                                class="text-sm text-gray-500 dark:text-gray-400"
                            >
                                (+43%) than last year
                            </h4>
                        </div>
                        <Chart2 />
                    </div>
                </div>

                <TableSample />
            </div>
        </div>
    </div>
</template>
