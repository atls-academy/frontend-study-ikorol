import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  post: {
    id: `${name}.post`,
    defaultMessage: 'Add new task...',
  },
  newTask: {
    id: `${name}.newTask`,
    defaultMessage: '+ New task',
  },
  add: {
    id: `${name}.add`,
    defaultMessage: 'Add',
  },
})
