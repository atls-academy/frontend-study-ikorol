import React      from 'react'

import { Button } from './Button'

export const IconButton = ({ children }) => (
  <Button width='40px' height='40px' backgroundColor='#fff' border='none'>
    {children}
  </Button>
)
