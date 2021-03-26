import React    from 'react'

import { Box }  from '@ui/layout'
import { Text } from '@ui/text'

export const AppHeader = ({ name, text }) => {
  return (
    <Box justifyContent='space-between' alignItems='flex-end' display='flex'>
      <Text fontSize='32px' margin='25px 0' fontWeight='bold'>
        {name}
      </Text>
      <Text fontSize='22px' margin='25px 0' fontWeight='bold'>
        {text}
      </Text>
    </Box>
  )
}
