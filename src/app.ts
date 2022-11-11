import Alpine from 'alpinejs'
import useStore from './store'
import useComponents from './components'
import './assets/styles/index.css'

window.Alpine = Alpine

useStore(Alpine)
useComponents(Alpine)

Alpine.start()

const progressArr = [].slice.call(
  document.querySelectorAll('.progress'),
)
const progressBarArr = [].slice.call(
  document.querySelectorAll('.progress-bar'),
)

progressArr.forEach((p) => {
  p.style.width = `${p?.getAttribute('aria-valuenow')}%`
})
progressBarArr.forEach((p) => {
  p.style.width = `${p?.getAttribute('aria-valuenow')}%`
  p.classList.add(p?.getAttribute('data-bg'))
})
