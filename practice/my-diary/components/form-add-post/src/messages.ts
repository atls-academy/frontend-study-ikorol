import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  post: {
    id: `${name}.post`,
    defaultMessage: 'What are you thinking today',
  },
  add: {
    id: `${name}.add`,
    defaultMessage: '+ New task',
  },
})
