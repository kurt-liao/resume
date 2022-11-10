import type { AlpineComponent } from 'alpinejs'
import html2pdf from 'html2pdf.js'

export default function (): AlpineComponent {
  return {
    exportPdf() {
      const element = document.getElementById('app')
      html2pdf(element)
    },
  }
}
