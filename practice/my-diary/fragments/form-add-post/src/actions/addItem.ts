import { nanoid } from 'nanoid'

export const addItem = (notes, text) => {
  const newItem = {
    note: text,
    important: false,
    liked: false,
    id: nanoid(),
  }
  return [...notes, newItem]
}
