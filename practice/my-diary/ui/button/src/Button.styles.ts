import { prop, switchProp }       from 'styled-tools'

import { createAppearanceStyles } from './appearance'
import { createBaseStyles }       from './base'
import { createShapeStyles }      from './shape'

export const baseStyles = createBaseStyles()

const transparentColorStyles = createAppearanceStyles({
  backgroundColor: 'transparent',
  borderColor: 'transparent',
})
const deepPurpleColorStyles = ({ theme }) =>
  createAppearanceStyles({
    backgroundColor: theme.colors.deepPurple,
    borderColor: theme.colors.purple,
  })
const whiteColorStyles = ({ theme }) =>
  createAppearanceStyles({
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.purple,
  })
const lightPurpleColorStyles = ({ theme }) =>
  createAppearanceStyles({
    backgroundColor: theme.colors.lightPurple,
    borderColor: theme.colors.purple,
  })
const normalSizeStyles = createShapeStyles({
  size: '40px',
  border: '1px solid',
  width: '100px',
})
const giantButtonSizeStyles = createShapeStyles({
  size: '80px',
  width: '250px',
})

const roundedLeftSideStyles = ({ theme }) =>
  createShapeStyles({ borderRadius: theme.radii.leftSide })
const roundedRightSideStyles = ({ theme }) =>
  createShapeStyles({ borderRadius: theme.radii.rightSide })
const roundedButtonStyles = ({ theme }) => createShapeStyles({ borderRadius: theme.radii.giant })

const purpleShadowStyles = ({ theme }) =>
  createAppearanceStyles({
    boxShadow: theme.shadows.violet,
  })

export const roundedBorderStyles = switchProp('borderRadius', () => ({
  right: roundedRightSideStyles,
  left: roundedLeftSideStyles,
  round: roundedButtonStyles,
}))

export const sizeStyles = switchProp(prop('size', 'normal'), () => ({
  giant: giantButtonSizeStyles,
  normal: normalSizeStyles,
}))

export const colorStyles = switchProp(prop('color', 'deepPurple'), () => ({
  transparent: transparentColorStyles,
  deepPurple: deepPurpleColorStyles,
  white: whiteColorStyles,
  lightPurple: lightPurpleColorStyles,
}))

export const shadowStyles = switchProp('shadow', () => ({
  purple: purpleShadowStyles,
}))
