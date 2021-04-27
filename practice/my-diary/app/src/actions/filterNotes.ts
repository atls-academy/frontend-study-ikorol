export const filterNotes = (notes, filter) => {
  if (filter === 'liked') {
    return notes.filter(note => note.liked)
  }
  return notes
}
