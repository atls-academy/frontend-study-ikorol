import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  name: {
    id: `${name}.name`,
    defaultMessage: 'Website todo',
  },
  post: {
    id: `${name}.post`,
    defaultMessage: 'posts',
  },
  important: {
    id: `${name}.important`,
    defaultMessage: 'important',
  },
  liked: {
    id: `${name}.liked`,
    defaultMessage: 'liked',
  },
})
