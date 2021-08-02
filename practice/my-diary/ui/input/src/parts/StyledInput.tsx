import styled               from '@emotion/styled'

import { baseStyles }       from './StyledInput.styles'
import { appearanceStyles } from './StyledInput.styles'
import { shapeStyles }      from './StyledInput.styles'
import { fontSizeStyles }   from './StyledInput.styles'

export const StyledInput = styled.input<any>(
  baseStyles,
  shapeStyles,
  fontSizeStyles,
  appearanceStyles
)
