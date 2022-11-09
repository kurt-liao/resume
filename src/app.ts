import Alpine from 'alpinejs'
import header from './components/header'
import spin from './components/spin'
import locale from './utils/locale'
import transferComponent from './utils/transferComponent'

window.Alpine = Alpine

Alpine.data('locale', locale)
Alpine.data('layout', () => ({
  header: transferComponent(header()),
  spin: transferComponent(spin()),
}))

Alpine.start()
