import React   from 'react'

import { Box } from '@ui/layout'

export const Condition = ({ visible, children }) => {
  return <Box display={visible ? 'flex' : 'none'}>{children}</Box>
}
