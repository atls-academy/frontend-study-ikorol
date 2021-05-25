import { prop, switchProp }       from 'styled-tools'

import { createAppearanceStyles } from '../appearance'
import { createBaseShape }        from '../shape/shape.styles'

export const createBaseStyles = () => () => ({
  cursor: 'pointer',
  border: 'none',
  outline: 'none',
  background: 'none',
})

const largeSizeStyles = createBaseShape({
  size: 42,
  fontFamily: 'Gordita, sans-serif',
  fontSize: 20,
  border: '1px solid',
  borderRadius: '0 15px 15px 0',
})

const purpleColorStyles = createAppearanceStyles({
  fontColor: 'white',
  backgroundColor: '#b07fec',
  borderColor: '#e4eaff',
})

export const appearanceStyles = switchProp(prop('color', 'purple'), () => ({
  purple: purpleColorStyles,
}))

export const shapeStyles = switchProp(prop('size', 'large'), () => ({
  large: largeSizeStyles,
}))
