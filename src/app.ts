import Alpine from 'alpinejs'
import header from './components/header'
import locale from './utils/locale'
import transferComponent from './utils/transferComponent'

window.Alpine = Alpine

Alpine.data('locale', locale)
Alpine.data('layout', () => ({
  header: transferComponent(header()),
}))

Alpine.start()
