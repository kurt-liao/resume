import Alpine from 'alpinejs'
import useStore from './store'
import useComponents from './components'
import './assets/styles/index.css'

window.Alpine = Alpine

useStore(Alpine)
useComponents(Alpine)

Alpine.start()
