import { useState } from 'react'

export default initialValue => {
  const uniqueKey = () => Math.random() * Date.now()
  const [notes, setNotes] = useState([
    { note: 'Flight to Moscow', important: false, liked: false, id: uniqueKey() },
    { note: 'Friends meeting', important: true, liked: false, id: uniqueKey() },
    { note: 'Buy a new frying pan in Ikea', important: false, liked: false, id: uniqueKey() },
  ])

  return {
    notes,
    toggleStatus: (id, value) => {
      const index = notes.findIndex(customElements => customElements.id === id)
      const lastNote = notes[index]
      let newNote
      if (value === 'important') {
        newNote = { ...lastNote, important: !lastNote.important }
      } else {
        newNote = { ...lastNote, liked: !lastNote.liked }
      }
      const newArray = [...notes.slice(0, index), newNote, ...notes.slice(index + 1)]
      setNotes(newArray)
    },
    deleteItem: id => {
      const index = notes.findIndex(customElements => customElements.id === id)
      const newArray = [...notes.slice(0, index), ...notes.slice(index + 1)]
      setNotes(newArray)
    },
  }
}
