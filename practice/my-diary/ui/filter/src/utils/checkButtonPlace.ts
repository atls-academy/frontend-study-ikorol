export const checkButtonPlace = (index, lastOption) => {
  let buttonBorderRadius: string
  if (index === 0) {
    buttonBorderRadius = 'left'
  } else if (index === lastOption) {
    buttonBorderRadius = 'right'
  } else buttonBorderRadius = 'none'
  return buttonBorderRadius
}
