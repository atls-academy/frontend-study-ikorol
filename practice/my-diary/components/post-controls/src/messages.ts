import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  search: {
    id: `${name}.search`,
    defaultMessage: 'Search by records',
  },
  all: {
    id: `${name}.all`,
    defaultMessage: 'All',
  },
  liked: {
    id: `${name}.liked`,
    defaultMessage: 'Liked',
  },
  important: {
    id: `${name}.important`,
    defaultMessage: 'Important',
  },
})
