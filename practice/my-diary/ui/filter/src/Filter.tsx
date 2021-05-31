import React                from 'react'

import { Button }           from '@ui/button'
import { Box, Layout, Row } from '@ui/layout'
import { Text }             from '@ui/text'

import { checkButtonPlace } from './utils'

export const Filter = ({ filter, setFilter, options }) => {
  const lastOption = options.length - 1
  return (
    <Row justifyContent='center'>
      <Layout flexBasis={40} />
      {options.map((option, index) => (
        <Box key={option} width='100px'>
          <Button
            color={filter === option.toLowerCase() ? 'deepPurple' : 'white'}
            border='standard'
            borderRadius={checkButtonPlace(index, lastOption)}
            isSelected={filter === option.toLowerCase()}
            onClick={() => setFilter(option.toLowerCase())}
          >
            <Text color={filter === option.toLowerCase() ? 'white' : 'grayBlue'}>{option}</Text>
          </Button>
        </Box>
      ))}
      <Layout flexBasis={40} />
    </Row>
  )
}
