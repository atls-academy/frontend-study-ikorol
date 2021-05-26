import { styleFn }        from 'styled-system'

import { ShapeInterface } from './shape.interfaces'

export const createBaseShape = (size: number | string, width: number | string): styleFn => () => ({
  height: size,
  width,
})

export const createBorderStyles = (
  border: string,
  borderRadius: string | number,
  borderWeight: string | number,
): styleFn => () => ({
  border,
  borderRadius,
  borderWeight,
})

export const createShapeStyles = ({
  size,
  border,
  borderRadius,
  borderWeight,
  width,
}: ShapeInterface): styleFn => () => ({
  ...createBaseShape(size, width)(),
  ...createBorderStyles(border, borderRadius, borderWeight)(),
})
