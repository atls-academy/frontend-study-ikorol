import { styleFn }             from 'styled-system'

import { InputBaseShapeProps } from './shape.interfaces'

export const createBaseShape = ({
  size,
  fontFamily,
  fontSize,
  border,
  borderRadius,
}: InputBaseShapeProps): styleFn => () => ({
  height: size,
  fontFamily,
  fontSize,
  border,
  borderRadius,
})
