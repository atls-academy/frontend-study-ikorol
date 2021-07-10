export interface NotesObject {
  note?: string | number
  important?: boolean
  liked?: boolean
  id: number
}

export type Callback = (id: number, notes?: NotesObject, value?: string) => NotesObject[]

export interface TodoListProps {
  notes: string[]
  setNotes: (notes: NotesObject[]) => void
  visibleNotes: NotesObject[]
  deleteItem: Callback
  toggleStatus: Callback
}
