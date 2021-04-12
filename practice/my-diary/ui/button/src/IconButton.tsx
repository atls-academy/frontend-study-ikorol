import React      from 'react'

import { Button } from './Button'

export const IconButton = ({ children }) => (
  <Button
    width='35px'
    margin='0 3px'
    height='40px'
    padding='0'
    backgroundColor='#fff'
    border='none'
  >
    {children}
  </Button>
)
