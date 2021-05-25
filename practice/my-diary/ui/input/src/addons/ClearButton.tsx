import React                             from 'react'
import styled                            from '@emotion/styled'

import { ClearButtonProps }              from './ClearButton.interface'
import { createBaseStyles, shapeStyles } from './ClearButton.styles'
import { appearanceStyles }              from './ClearButton.styles'

// TODO rewrite with UI Button
const StyledButton = styled.button(createBaseStyles(), appearanceStyles, shapeStyles)

export const ClearButton = ({ ...props }: ClearButtonProps) => <StyledButton {...props} />
