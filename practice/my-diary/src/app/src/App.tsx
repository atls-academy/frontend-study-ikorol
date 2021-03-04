import './app.css'

import React from 'react'

import AppHeader from '../../components/app-header'
import PostAddForm from '../../components/post-add-form'
import PostList from '../../components/post-list'
import SearchPanel from '../../components/search-panel'

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <SearchPanel />
      <PostList />
      <PostAddForm />
    </div>
  )
}

export default App
