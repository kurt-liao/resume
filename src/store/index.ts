import type { Alpine } from 'alpinejs'

import locale from './locale'
import utils from './utils'

export default (alpine: Alpine) => {
  alpine.store('locale', locale())
  alpine.store('utils', utils())
  alpine.store('type', {
    type: false,
  })
}
