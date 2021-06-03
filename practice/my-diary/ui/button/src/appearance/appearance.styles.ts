import { styleFn }                from 'styled-system'

import { ButtonAppearanceStyles } from './appearance.interface'

export const createColorStyles = (backgroundColor, borderColor): styleFn => () => ({
  backgroundColor,
  borderColor,
})

export const createShadowStyles = (
  shadowOffsetX,
  shadowOffsetY,
  shadowBlur,
  shadowSize,
  shadowColor,
): styleFn => () => ({
  boxShadow: `${shadowOffsetX} ${shadowOffsetY} ${shadowBlur}px ${shadowSize}px ${shadowColor}`,
})

export const createAppearanceStyles = ({
  backgroundColor,
  borderColor,
  shadowOffsetX = 0,
  shadowOffsetY = 0,
  shadowBlur = 0,
  shadowSize = 0,
  shadowColor,
}: ButtonAppearanceStyles): styleFn => () => ({
  ...createColorStyles(backgroundColor, borderColor)(),
  ...createShadowStyles(shadowOffsetX, shadowOffsetY, shadowBlur, shadowSize, shadowColor)(),
})
