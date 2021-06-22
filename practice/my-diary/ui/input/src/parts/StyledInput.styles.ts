import { prop, switchProp }       from 'styled-tools'

import { createAppearanceStyles } from '../appearance'
import { createBaseStyles }       from '../base'
import { createBaseShape }        from '../shape'

export const baseStyles = createBaseStyles()

export const normalSizeStyles = ({ theme }) =>
  createBaseShape({
    size: 15,
    fontFamily: theme.fonts.standard,
    border: '1px solid',
  })

export const smallSizeStyles = ({ theme }) =>
  createBaseShape({
    size: 10,
    fontFamily: theme.fonts.standard,
    border: '.5px solid',
  })

export const largeSizeStyles = ({ theme }) =>
  createBaseShape({
    size: 20,
    fontFamily: theme.fonts.standard,
    border: '1px solid',
  })

export const shapeStyles = switchProp(prop('size', 'large'), () => ({
  normal: normalSizeStyles,
  small: smallSizeStyles,
  large: largeSizeStyles,
}))

export const largeFontSizeStyles = ({ theme }) =>
  createBaseShape({
    fontSize: theme.fontSizes.medium,
  })
export const smallFontSizeStyles = ({ theme }) =>
  createBaseShape({
    fontSize: theme.fontSizes.small,
  })
export const normalFontSizeStyles = ({ theme }) =>
  createBaseShape({
    fontSize: theme.fontSizes.normal,
  })
export const fontSizeStyles = switchProp(prop('fontSize', 'large'), () => ({
  normal: normalFontSizeStyles,
  small: smallFontSizeStyles,
  large: largeFontSizeStyles,
}))

export const purpleColorStyles = ({ theme }) =>
  createAppearanceStyles({
    fontColor: theme.colors.grayBlue,
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.purple,
    placeholderStyles: {
      color: theme.colors.silver,
    },
  })

export const appearanceStyles = switchProp(prop('color', 'purple'), () => ({
  purple: purpleColorStyles,
}))
