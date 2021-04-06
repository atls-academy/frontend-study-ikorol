import React    from 'react'

import { Box }  from '@ui/layout'
import { Text } from '@ui/text'

export const MainPageHeader = () => {
  return (
    <Box justifyContent='space-between' alignItems='flex-end' display='flex'>
      <Text fontSize='32px' margin='25px 0' fontWeight='bold'>
        Irina Korol
      </Text>
      <Text fontSize='22px' margin='25px 0' fontWeight='bold'>
        5 posts 4 liked
      </Text>
    </Box>
  )
}
