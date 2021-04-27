export const filterNotes = (notes, searchValue, filter) => {
  let filteredNotes = []
  if (searchValue.length === 0) {
    filteredNotes = notes
  } else {
    filteredNotes = notes.filter(item => {
      return item.note.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
    })
  }

  switch (filter) {
    case 'liked': {
      return filteredNotes.filter(note => note.liked)
    }
    case 'all':
      return filteredNotes

    case 'important':
      return filteredNotes.filter(note => note.important)

    default:
      return filterNotes
  }
}
