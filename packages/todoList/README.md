# @ikorol/todolist

> Todo list

## Install

```bash
npm i @ikorol/todolist

yarn add @ikorol/todolist
```

## Usage

```jsx
import React from 'react'

import TodoList from '@ikorol/todolist'

export const PostList = () => {
  return (
    <TodoList
      notes={notes}
      setNotes={setNotes}
      visibleNotes={filterNotes(notes, searchValue, filter)}
      deleteItem={deleteItem}
      toggleStatus={toggleStatus}
    />
  )
}
```
