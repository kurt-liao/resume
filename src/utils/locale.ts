import type { AlpineComponent } from 'alpinejs'
import { statCardLocales } from '../constants/translation'

export default function (): AlpineComponent {
  return {
    lang: 'en',
    translations: statCardLocales(),
    t(str) {
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
