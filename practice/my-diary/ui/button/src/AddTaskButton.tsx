import React      from 'react'

import { Button } from './Button'

export const AddTaskButton = ({ onClick, children }) => {
  return (
    <Button
      width='fit-content'
      height='80px'
      position='relative'
      top='-45px'
      left='165px'
      fontSize='large'
      fontWeight='bold'
      color='white'
      backgroundColor='deepPurple'
      borderRadius='giant'
      boxShadow='violet'
      border='none'
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
