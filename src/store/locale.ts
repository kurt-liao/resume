import type { AlpineComponent } from 'alpinejs'
import { translation } from '../constants/translation'

export default function (): AlpineComponent {
  return {
    lang: false,
    translations: translation(),
    t(str: string) {
      const _lang = this.lang ? 'zh-tw' : 'en'

      if (!this.translations[str])
        throw new Error(`${str} Translation string not found`)

      if (!this.translations[str][_lang])
        throw new Error(`${str} Translation locale not found`)

      return this.translations[str][_lang]
    },
  }
}
