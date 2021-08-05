import styled          from '@emotion/styled'
import { space }       from 'styled-system'

import { ButtonProps } from './Button.interface'
import {
  baseStyles,
  borderStyles,
  colorStyles,
  roundedBorderStyles,
  shadowStyles,
  sizeStyles,
} from './Button.styles'

export const Button = styled.div<ButtonProps>(
  baseStyles,
  sizeStyles,
  roundedBorderStyles,
  borderStyles,
  colorStyles,
  shadowStyles,
  space
)
