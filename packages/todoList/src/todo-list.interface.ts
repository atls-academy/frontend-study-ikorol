export interface NotesObject {
  note?: string | number
  important?: boolean
  liked?: boolean
  id: number
}

export type Callback = (id: number, note?: NotesObject, value?: string) => NotesObject[]

export interface TodoListProps {
  notes: string[]
  setNotes: () => string[]
  visibleNotes: NotesObject[]
  deleteItem: Callback
  toggleStatus: Callback
}
