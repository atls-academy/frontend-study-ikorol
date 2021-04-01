import React      from 'react'

import { Button } from './Button'

export const IconButton = ({ children }) => (
  <Button width='35px' height='35px' fontSize='17px' margin='3px' padding='0' border='none'>
    {children}
  </Button>
)
