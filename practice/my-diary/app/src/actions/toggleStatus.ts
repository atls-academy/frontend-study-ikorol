export const toggleStatus = (notes, id, value) => {
  const index = notes.findIndex(customElements => customElements.id === id)
  const lastNote = notes[index]
  let newNote
  if (value === 'important') {
    newNote = { ...lastNote, important: !lastNote.important }
  } else {
    newNote = { ...lastNote, liked: !lastNote.liked }
  }
  const newArray = [...notes.slice(0, index), newNote, ...notes.slice(index + 1)]
  return newArray
}
