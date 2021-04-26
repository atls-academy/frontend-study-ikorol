export const searchNotes = (notes, searchValue) => {
  if (searchValue.length === 0) {
    return notes
  }
  return notes.filter(item => {
    return item.note.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
  })
}
