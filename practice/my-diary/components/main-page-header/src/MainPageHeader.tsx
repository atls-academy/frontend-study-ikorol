import React    from 'react'

import { Box }  from '@ui/layout'
import { Text } from '@ui/text'

import messages from './messages'

export const MainPageHeader = ({ intl }) => {
  const postsSum = () => {
    // ... add logic late
    const sum = 2
    return sum
  }
  const likesSum = () => {
    // ... add logic late
    const sum = 4
    return sum
  }
  return (
    <Box justifyContent='space-between' alignItems='flex-end'>
      <Text fontSize='32px' margin='25px 0' fontWeight='bold'>
        {intl.formatMessage(messages.name)}
      </Text>
      <Text fontSize='22px' margin='25px 0' fontWeight='bold'>
        {likesSum()} {intl.formatMessage(messages.post)} {postsSum()}{' '}
        {intl.formatMessage(messages.like)}
      </Text>
    </Box>
  )
}
