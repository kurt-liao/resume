import type { AlpineComponent } from 'alpinejs'
import { translation } from '../constants/translation'

export default function (): AlpineComponent {
  return {
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
  }
}
