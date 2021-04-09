import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  search: {
    id: `${name}.search`,
    defaultMessage: 'Search by records',
  },
  post: {
    id: `${name}.post`,
    defaultMessage: 'What are you thinking today',
  },
})
