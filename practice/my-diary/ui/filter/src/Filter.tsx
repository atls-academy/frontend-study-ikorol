import React           from 'react'

import { Button }      from '@ui/button'
import { Layout, Row } from '@ui/layout'
import { Text }        from '@ui/text'

export const Filter = ({ filter, setFilter, options }) => {
  const checkButtonPlace = (option, index) => {
    if (index === 0) {
      return 'left'
    }
    if (options.length - 1 === index) {
      return 'right'
    }
    return 'none'
  }

  return (
    <Row justifyContent='center'>
      <Layout flexBasis={40} />
      {options.map((option, index) => (
        <Button
          key={option}
          color={filter === option.toLowerCase() ? 'deepPurple' : 'white'}
          isSelected={filter === option.toLowerCase()}
          borderRadius={checkButtonPlace(option, index)}
          onClick={() => setFilter(option.toLowerCase())}
        >
          <Text color={filter === option.toLowerCase() ? 'white' : 'grayBlue'}>{option}</Text>
        </Button>
      ))}
      <Layout flexBasis={40} />
    </Row>
  )
}
