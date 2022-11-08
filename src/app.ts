import Alpine from 'alpinejs'
import locale from './utils/locale'

window.Alpine = Alpine

Alpine.data('locale', locale)

Alpine.start()
