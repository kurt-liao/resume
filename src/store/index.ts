import type { Alpine } from 'alpinejs'

import locale from './locale'
import utils from './utils'

export default (alpine: Alpine) => {
  alpine.store('locale', locale())
  alpine.store('utils', utils())
  alpine.store('system', {
    type: false,
    isLoading: true,
    firstInit() {
      const root = document.getElementById('root')!
      root.className = ''
    },
    initResume() {
      const progressArr = [].slice.call(
        document.querySelectorAll('.progress'),
      )
      const progressBarArr = [].slice.call(
        document.querySelectorAll('.progress-bar'),
      )

      progressArr.forEach((p: HTMLElement) => {
        p.style.width = `${p?.getAttribute('aria-valuenow')}%`
      })
      progressBarArr.forEach((p: HTMLElement) => {
        p.style.width = `${p?.getAttribute('aria-valuenow')}%`
        p.classList.add(p.getAttribute('data-bg')!)
      })
    },
  })
}
