export const fetchInitialData = (notes, textArray) => {
  let newNotes = []
  textArray.forEach(text => {
    const newItem = {
      note: text,
      important: false,
      liked: false,
      id: Math.round(Math.random() * 5) + Date.now(),
    }
    newNotes = [...newNotes, newItem]
  })
  return notes.concat(newNotes)
}
