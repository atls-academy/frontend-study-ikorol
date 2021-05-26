import React           from 'react'

import { Box }         from '@ui/layout'
import { Text }        from '@ui/text'

import { ClearButton } from './addons'
import { InputProps }  from './Input.interface'
import { StyledInput } from './parts'

export const Input = ({ search, onClear, addonName, ...props }: InputProps) => {
  const { value } = props
  return (
    <Box>
      <StyledInput {...props} />
      {search ? (
        <ClearButton onClick={onClear} color={value === '' ? 'lightPurple' : 'deepPurple'}>
          <Text color='white'>{addonName}</Text>
        </ClearButton>
      ) : (
        <div />
      )}
    </Box>
  )
}
