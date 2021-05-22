import React        from 'react'
import { useIntl }  from 'react-intl'

import { Box, Row } from '@ui/layout'
import { Text }     from '@ui/text'
import { Space }    from '@ui/text'

export const Filter = ({ filter, setFilter, messages }) => {
  return (
    <Row justifyContent='center' height='40px'>
      {messages.map((message) => (
        <Box
          key={message}
          backgroundColor={filter === message.toLowerCase() ? 'deepPurple' : 'white'}
          color={filter === message.toLowerCase() ? 'white' : 'grayBlue'}
          cursor='pointer'
          onClick={() => setFilter(message.toLowerCase())}
        >
          <Space count={4} />
          <Text>{message}</Text>
          <Space count={4} />
        </Box>
      ))}
    </Row>
  )
}
