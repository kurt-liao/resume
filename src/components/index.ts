import type { Alpine } from 'alpinejs'
import transferComponent from '../utils/transferComponent'
import header from './header'
import spin from './spin'

export default (alpine: Alpine) => {
  alpine.data('components', () => ({
    header: transferComponent(header()),
    spin: transferComponent(spin()),
  }))
}
