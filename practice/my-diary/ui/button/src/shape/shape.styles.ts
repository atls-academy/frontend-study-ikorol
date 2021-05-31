import { styleFn }        from 'styled-system'

import { ShapeInterface } from './shape.interfaces'

export const createBaseShape = (size: number | string): styleFn => () => ({
  height: size,
})

export const createBorderStyles = (border, borderRadius, borderWeight): styleFn => () => ({
  border,
  borderRadius,
  borderWeight,
})

export const createShapeStyles = ({
  size,
  border,
  borderRadius,
  borderWeight,
}: ShapeInterface): styleFn => () => ({
  ...createBaseShape(size)(),
  ...createBorderStyles(border, borderRadius, borderWeight)(),
})
