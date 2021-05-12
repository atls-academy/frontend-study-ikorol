export const openMenu = value => {
  let newValue
  if (value === false) {
    newValue = true
  } else {
    newValue = false
  }
  return newValue
}
