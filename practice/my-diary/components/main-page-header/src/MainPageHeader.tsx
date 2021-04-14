import React                   from 'react'
import { useIntl }             from 'react-intl'

import { Column, Layout, Row } from '@ui/layout'
import { Text }                from '@ui/text'

import messages                from './messages'

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
      <Column width='none'>
        <Layout flexBasis={10} />
        <Text fontSize='22px'>
          {likesSum()} {intl.formatMessage(messages.post)} {postsSum()}{' '}
          {intl.formatMessage(messages.like)}
        </Text>
      </Column>
    </Row>
  )
}
