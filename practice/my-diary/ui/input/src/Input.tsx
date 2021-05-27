import React           from 'react'
import { useIntl }     from 'react-intl'

import { Box }         from '@ui/layout'
import { Text }        from '@ui/text'

import messages        from './messages'
import { ClearButton } from './addons'
import { InputProps }  from './Input.interface'
import { StyledInput } from './parts'

export const Input = ({ search, onClear, ...props }: InputProps) => {
  const intl = useIntl()
  const { value, placeholder } = props
  return (
    <Box>
      <StyledInput placeholder={placeholder} {...props} />
      {search ? (
        <ClearButton onClick={onClear} color={value === '' ? 'lightPurple' : 'deepPurple'}>
          <Text color='white'>{intl.formatMessage(messages.clear)}</Text>
        </ClearButton>
      ) : (
        <div />
      )}
    </Box>
  )
}
