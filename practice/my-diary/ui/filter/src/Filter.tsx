import React      from 'react'

import { Button } from '@ui/button'
import { Row }    from '@ui/layout'
import { Text }   from '@ui/text'

export const Filter = ({ filter, setFilter, options }) => {
  const checkButtonPlace = (option, index) => {
    if (index === 0) {
      return 'first'
    }
    if (options.length - 1 === index) {
      return 'last'
    }
    return 'middle'
  }

  return (
    <Row justifyContent='center' height='40px'>
      {options.map((option, index) => (
        <Button
          type='filter'
          key={option}
          isSelected={filter === option.toLowerCase()}
          isPlaced={checkButtonPlace(option, index)}
          onClick={() => setFilter(option.toLowerCase())}
        >
          <Text color={filter === option.toLowerCase() ? 'white' : 'grayBlue'}>{option}</Text>
        </Button>
      ))}
    </Row>
  )
}
