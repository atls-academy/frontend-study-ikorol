import { TypographyProps, styleFn } from 'styled-system'

import { InputAppearanceStyles }    from './appearance.interface'

export const createColorStyles = (
  color: string,
  backgroundColor: string,
  borderColor: string,
): styleFn => () => ({
  color,
  backgroundColor,
  borderColor,
})

export const createPlaceholderStyles = (styles: TypographyProps): styleFn => () => ({
  '&::placeholder': styles,
})

export const createAppearanceStyles = ({
  fontColor,
  backgroundColor,
  borderColor,
  placeholderStyles,
}: InputAppearanceStyles): styleFn => () => ({
  ...createColorStyles(fontColor, backgroundColor, borderColor)(),
  ...createPlaceholderStyles(placeholderStyles)(),
})
