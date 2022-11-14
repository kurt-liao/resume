import type { Alpine } from 'alpinejs'
import transferComponent from '../utils/transferComponent'
import spin from './spin'

export default (alpine: Alpine) => {
  alpine.data('components', () => ({
    spin: transferComponent(spin()),
  }))
}
