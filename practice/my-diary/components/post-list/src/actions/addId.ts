export const addId = notes => {
  let newNotes = []
  notes.forEach(item => {
    newNotes = newNotes.concat({
      note: item.note,
      important: item.important,
      liked: item.liked,
      done: item.done,
      id: Math.random() * Date.now(),
    })
  })
  return newNotes
}
