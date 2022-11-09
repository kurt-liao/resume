import type { Alpine } from 'alpinejs'
import locale from './locale'

export default (alpine: Alpine) => {
  alpine.store('locale', locale())
}
