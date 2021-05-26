import { styleFn }                from 'styled-system'

import { ButtonAppearanceStyles } from './appearance.interface'

export const createColorStyles = (backgroundColor, borderColor, boxShadow): styleFn => () => ({
  backgroundColor,
  borderColor,
  boxShadow,
})

export const createAppearanceStyles = ({
  backgroundColor,
  borderColor,
  boxShadow,
}: ButtonAppearanceStyles): styleFn => () => ({
  ...createColorStyles(backgroundColor, borderColor, boxShadow)(),
})
