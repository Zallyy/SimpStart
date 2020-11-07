import { createApp } from 'vue'

import App from './App.vue'
import Header from './components/Header.vue'
import Category from './components/Category.vue'

const app = createApp(App)

app.component('header-component', Header)
app.component('category-component', Category)

app.mount('#app')
