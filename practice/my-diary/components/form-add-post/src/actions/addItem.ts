export const addItem = (notes, text) => {
  const newItem = {
    note: text,
    important: false,
    liked: false,
    id: Date.now(),
  }
  return [...notes, newItem]
}
