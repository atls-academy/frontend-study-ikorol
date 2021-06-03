export const toggleStatus = (notes, id, value) => {
  const index = notes.findIndex(customElements => customElements.id === id)
  const lastNote = notes[index]
  let newNote
  if (value === 'onHover') {
    newNote = { ...lastNote, onHover: !lastNote.onHover }
  } else if (value === 'important') {
    newNote = { ...lastNote, important: !lastNote.important }
  } else if (value === 'done') {
    newNote = { ...lastNote, done: !lastNote.done }
  } else {
    newNote = { ...lastNote, liked: !lastNote.liked }
  }
  return [...notes.slice(0, index), newNote, ...notes.slice(index + 1)]
}
