import React                        from 'react'
import { useIntl }                  from 'react-intl'

import { Box, Column, Layout, Row } from '@ui/layout'
import { Space, Text }              from '@ui/text'

import messages                     from './messages'

export const MainPageHeader = () => {
  const intl = useIntl()
  const postsSum = () => {
    // TODO add logic later
    const sum = 2
    return sum
  }
  const likesSum = () => {
    // TODO add logic later
    const sum = 4
    return sum
  }
  return (
    <Row justifyContent='space-between'>
      <Text fontSize='32px' fontWeight='bold'>
        {intl.formatMessage(messages.name)}
      </Text>
      <Box>
        <Column>
          <Layout flexBasis={10} />
          <Text fontSize='22px'>
            {likesSum()}
            <Space />
            {intl.formatMessage(messages.post)}
            <Space count={3} />
            {postsSum()}
            <Space />
            {intl.formatMessage(messages.like)}
          </Text>
        </Column>
      </Box>
    </Row>
  )
}
