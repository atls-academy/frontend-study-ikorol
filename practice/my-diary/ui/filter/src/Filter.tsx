import React                from 'react'

import { Button }           from '@ui/button'
import { Layout, Row }      from '@ui/layout'
import { Text }             from '@ui/text'

import { checkButtonPlace } from './utils'

export const Filter = ({ filter, setFilter, options }) => {
  const lastOption = options.length - 1
  return (
    <Row justifyContent='center'>
      <Layout flexBasis={40} />
      {options.map((option, index) => (
        <Button
          key={option}
          color={filter === option.toLowerCase() ? 'deepPurple' : 'white'}
          borderRadius={checkButtonPlace(index, lastOption)}
          isSelected={filter === option.toLowerCase()}
          onClick={() => setFilter(option.toLowerCase())}
        >
          <Text color={filter === option.toLowerCase() ? 'white' : 'grayBlue'}>{option}</Text>
        </Button>
      ))}
      <Layout flexBasis={40} />
    </Row>
  )
}
