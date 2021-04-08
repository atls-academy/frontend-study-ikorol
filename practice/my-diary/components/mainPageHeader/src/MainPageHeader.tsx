import React    from 'react'

import { Box }  from '@ui/layout'
import { Text } from '@ui/text'

import messages from './messages'

export const MainPageHeader = ({ intl, postsSum, likesSum }) => (
  <Box justifyContent='space-between' alignItems='flex-end' display='flex'>
    <Text fontSize='32px' margin='25px 0' fontWeight='bold'>
      {intl.formatMessage(messages.name)}
    </Text>
    <Text fontSize='22px' margin='25px 0' fontWeight='bold'>
      {likesSum} {intl.formatMessage(messages.post)} {postsSum} {intl.formatMessage(messages.like)}
    </Text>
  </Box>
)
