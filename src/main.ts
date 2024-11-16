import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { md3 } from 'vuetify/blueprints'

// vuetify cinfig
const vuetify = createVuetify({
  components,
  directives,
  blueprint: md3,
  locale: {
    locale: 'en'
  },
  date: {
    locale: {
      fa: 'fa-IR'
    }
  },
})

// axios config
axios.defaults.baseURL = "https://6738a5b14eb22e24fca88cc2.mockapi.io/api" // set baseURL

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(VueAxios, axios)

app.mount('#app')
