import React           from 'react'
import { useIntl }     from 'react-intl'

import { Box }         from '@ui/layout'
import { Text }        from '@ui/text'

import messages        from './messages'
import { ClearButton } from './addons'
import { InputProps }  from './Input.interface'
import { StyledInput } from './parts'

export const Input = ({ search, onClear, addonName, ...props }: InputProps) => {
  const intl = useIntl()
  const { value } = props
  return (
    <Box>
      <StyledInput placeholder={intl.formatMessage(messages.search)} {...props} />
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
