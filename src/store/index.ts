import type { Alpine } from 'alpinejs'
import { portfolioMap } from '../constants/portfolio'
import generateWork from '../utils/generateWork'

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
    toggleModal(el: HTMLElement) {
      const modalContainer = document.getElementById('modal-container')!
      const modal = modalContainer.querySelector('.modal-background .modal')!
      const background = modalContainer.querySelector('.background')! as HTMLElement
      const portfolio = document.getElementById('portfolio')!
      const isTW = (<HTMLInputElement>document.getElementById('lang'))!.checked

      if (!el || portfolio.classList.contains('modal-active')) {
        portfolio.classList.remove('modal-active')
        modalContainer.classList.add('out')
        modal.innerHTML = ''
      }
      else {
        const dataKey = el.getAttribute('data-key')!
        const data = portfolioMap[dataKey]
        modalContainer.classList.add('one')
        modalContainer.classList.remove('out')
        portfolio.classList.add('modal-active')
        modal.innerHTML = `<iconify-icon icon="akar-icons:cross" class="cross" @click="$store.system.toggleModal(null)">
        </iconify-icon>`
        modal.innerHTML += `<h2>${data.title}</h2>`
        modal.innerHTML += generateWork({ description: isTW ? data.tw : data.en, ...data })
        background.style.cssText += `
          background-repeat: no-repeat;
          background-position: top;
          background-size: contain;
          background-image: url('${data.background}');
        `
      }
    },
  })
}
