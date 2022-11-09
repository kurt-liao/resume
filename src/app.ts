import Alpine from 'alpinejs'
import { translation } from './constants/translation'
import header from './components/header'
import spin from './components/spin'
import transferComponent from './utils/transferComponent'

window.Alpine = Alpine

Alpine.store('locale', {
  on: false,
  lang: 'en',
  translations: translation(),
  t(str: string) {
    if (!this.translations[str])
      throw new Error(`${str} Translation string not found`)

    if (!this.translations[str][this.lang])
      throw new Error(`${str} Translation locale not found`)

    return this.translations[str][this.lang]
  },
  setLang(value: string) {
    this.lang = value
  },
})

Alpine.data('layout', () => ({
  header: transferComponent(header()),
  spin: transferComponent(spin()),
}))

Alpine.start()
