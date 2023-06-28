import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import * as FaIcons from 'oh-vue-icons/icons/fa'
import { OhVueIcon, addIcons } from 'oh-vue-icons'

const Fa = Object.values({ ...FaIcons })
addIcons(...Fa)

createApp(App).component('v-icon', OhVueIcon).mount('#app')
