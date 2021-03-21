import React      from 'react'

import { Button } from './Button'

export const IconButton = ({ children }) => (
  <Button size='mini' color='neutral' border='none'>
    {children}
  </Button>
)
