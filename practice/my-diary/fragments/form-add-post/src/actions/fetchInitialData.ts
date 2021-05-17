import { addItem } from './addItem'
import { mocks }   from './mocks'

export const fetchInitialData = () => {
  let newNotes = []
  mocks.forEach(text => {
    newNotes = addItem(newNotes, text)
  })
  return newNotes
}
