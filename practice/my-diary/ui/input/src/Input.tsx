import React           from 'react'

import { Box }         from '@ui/layout'
import { Text }        from '@ui/text'

import { ClearButton } from './addons'
import { InputProps }  from './Input.interface'
import { StyledInput } from './parts'

export const Input = ({ search, onClear, buttonValue, ...props }: InputProps) => {
  return (
    <Box>
      <StyledInput {...props} />
      {search ? (
        <ClearButton onClick={onClear}>
          <Text>{buttonValue}</Text>
        </ClearButton>
      ) : (
        <div />
      )}
    </Box>
  )
}
