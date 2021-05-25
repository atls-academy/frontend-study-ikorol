import { prop, switchProp }       from 'styled-tools'

import { createAppearanceStyles } from '../appearance'
import { createBaseStyles }       from '../base'
import { createBaseShape }        from '../shape'

export const baseStyles = createBaseStyles()

const normalSizeStyles = createBaseShape({
  size: 15,
  fontFamily: 'Gordita, sans-serif',
  fontSize: 15,
  border: '1px solid',
})

const smallSizeStyles = createBaseShape({
  size: 10,
  fontFamily: 'Gordita, sans-serif',
  fontSize: 10,
  border: '.5px solid',
})

const largeSizeStyles = createBaseShape({
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

const normalColorStyles = createAppearanceStyles({
  fontColor: '#919abc',
  backgroundColor: 'white',
  borderColor: '#e4eaff',
})

export const appearanceStyles = switchProp(prop('color', 'normal'), () => ({
  normal: normalColorStyles,
}))
