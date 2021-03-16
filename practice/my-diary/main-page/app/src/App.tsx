import './app.css'

import React           from 'react'

import { AppHeader }   from '@ui/app-header'
import { PostAddForm } from '@ui/post-add-form'
import { PostList }    from '@ui/post-list'
import { SearchPanel } from '@ui/search-panel'

export const App = () => {
  return (
    <div className='app'>
      <AppHeader />
      <SearchPanel />
      <PostList />
      <PostAddForm />
    </div>
  )
}
