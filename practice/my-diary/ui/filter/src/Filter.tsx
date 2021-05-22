import React        from 'react'
import { useIntl }  from 'react-intl'

import { Box, Row } from '@ui/layout'
import { Space }    from '@ui/text'

export const Filter = ({ filter, setFilter, messages }) => {
  const intl = useIntl()
  return (
    <Row justifyContent='center' height='40px'>
      <Box
        backgroundColor={filter === 'all' ? 'deepPurple' : 'white'}
        color={filter === 'all' ? 'white' : 'grayBlue'}
        borderRadius='leftSide'
        cursor='pointer'
        onClick={() => setFilter('all')}
      >
        <Space count={4} />
        {intl.formatMessage(messages.all)}
        <Space count={4} />
      </Box>
      <Box
        backgroundColor={filter === 'important' ? 'deepPurple' : 'white'}
        color={filter === 'important' ? 'white' : 'grayBlue'}
        cursor='pointer'
        onClick={() => setFilter('important')}
      >
        <Space count={2} />
        {intl.formatMessage(messages.important)}
        <Space count={2} />
      </Box>
      <Box
        backgroundColor={filter === 'liked' ? 'deepPurple' : 'white'}
        color={filter === 'liked' ? 'white' : 'grayBlue'}
        borderRadius='rightSide'
        cursor='pointer'
        onClick={() => setFilter('liked')}
      >
        <Space count={2} />
        {intl.formatMessage(messages.liked)}
        <Space count={2} />
      </Box>
    </Row>
  )
}
