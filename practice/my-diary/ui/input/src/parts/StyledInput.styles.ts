import { prop, switchProp }       from 'styled-tools'

import { createAppearanceStyles } from '../appearance'
import { createBaseStyles }       from '../base'
import { createBaseShape }        from '../shape'

export const baseStyles = createBaseStyles()

export const normalSizeStyles = createBaseShape({
  size: 15,
  fontFamily: 'Gordita, sans-serif',
  fontSize: 15,
  border: '1px solid',
})

export const smallSizeStyles = createBaseShape({
  size: 10,
  fontFamily: 'Gordita, sans-serif',
  fontSize: 10,
  border: '.5px solid',
})

export const largeSizeStyles = createBaseShape({
  size: 20,
  fontFamily: 'Gordita, sans-serif',
  fontSize: 20,
  border: '1px solid',
})

export const shapeStyles = switchProp(prop('size', 'large'), () => ({
  normal: normalSizeStyles,
  small: smallSizeStyles,
  large: largeSizeStyles,
}))

export const normalColorStyles = ({ theme }) =>
  createAppearanceStyles({
    fontColor: theme.colors.grayBlue,
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.purple,
  })

export const appearanceStyles = switchProp(prop('color', 'normal'), () => ({
  normal: normalColorStyles,
}))
