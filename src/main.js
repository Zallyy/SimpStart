import { createApp } from 'vue'

import App from './App.vue'
import Header from './components/Header.vue'
import Category from './components/Category.vue'
import Folder from './components/Folder.vue'

const app = createApp(App)

app.component('header-component', Header)
app.component('category-component', Category)
app.component('folder-component', Folder)

app.mount('#app')
