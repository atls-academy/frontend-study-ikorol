# @academy/ikorol

> ToDo list

## Install

```bash
npm i @academy/ikorol

yarn add @academy/ikorol
```

## Usage

```jsx
import React from 'react'

import TodoList from '@academy/ikorol'

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
