import { styleFn }                from 'styled-system'

import { ButtonAppearanceStyles } from './appearance.interface'

export const createColorStyles = (backgroundColor, borderColor): styleFn => () => ({
  backgroundColor,
  borderColor,
})

export const createShadowStyles = (boxShadow): styleFn => () => ({
  boxShadow,
})

export const createAppearanceStyles = ({
  backgroundColor,
  borderColor,
  boxShadow,
}: ButtonAppearanceStyles): styleFn => () => ({
  ...createColorStyles(backgroundColor, borderColor)(),
  ...createShadowStyles(boxShadow)(),
})
