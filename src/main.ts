import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// PrimeVue imports
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import ProgressBar from 'primevue/progressbar'
import 'primeicons/primeicons.css'          // icons

const app = createApp(App)

// Use PrimeVue
app.use(PrimeVue, { ripple: true })

// Register components
app.component('Button', Button)
app.component('InputText', InputText)
app.component('Textarea', Textarea)
app.component('ProgressBar', ProgressBar)

app.mount('#app')
