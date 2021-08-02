export const deleteItem = (notes, id) => {
  const index = notes.findIndex((customElements) => customElements.id === id)
  return [...notes.slice(0, index), ...notes.slice(index + 1)]
}
