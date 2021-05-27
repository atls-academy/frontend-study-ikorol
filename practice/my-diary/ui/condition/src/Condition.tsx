import React   from 'react'

import { Box } from '@ui/layout'

export const Condition = ({ match, children }) => {
  return match ? <Box>{children}</Box> : null
}
