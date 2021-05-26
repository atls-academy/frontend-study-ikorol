import React           from 'react'
import styled          from '@emotion/styled'
import { space }       from 'styled-system'

import { ButtonProps } from './Button.interface'
import {
  baseStyles,
  colorStyles,
  roundedBorderStyles,
  shadowStyles,
  sizeStyles,
} from './Button.styles'

const StyledButton = styled.div<any>(
  baseStyles,
  sizeStyles,
  roundedBorderStyles,
  colorStyles,
  shadowStyles,
  space,
)
export const Button = (props: ButtonProps) => {
  return <StyledButton {...props} />
}
