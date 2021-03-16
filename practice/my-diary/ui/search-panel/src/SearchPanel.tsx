import './search-panel.css'

import React                from 'react'

import { PostStatusFilter } from '@ui/post-status-filter'
import { SearchPanelInput } from '@ui/search-panel-input'

export const SearchPanel = () => {
  return (
    <div className='search-panel d-flex'>
      <SearchPanelInput />
      <PostStatusFilter />
    </div>
  )
}
