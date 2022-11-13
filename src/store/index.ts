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

      // Fix list-style-type not support in safari
      // https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type
      const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      if (isSafari) {
        const elementArr = [].slice.call(
          document.querySelectorAll('.list-plane, .list-plant'),
        )

        elementArr.forEach((e: HTMLElement) => {
          e.classList.add('list-disc')
        })
      }
    },
    initPortfolio() {
      // TODO
    },
    init() {
      alpine.effect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        if (alpine.store('system').type)
          document.title = 'Kurt\'s Portfolio'
        else
          document.title = 'Kurt\'s Resume'
      })
    },
  })
}
