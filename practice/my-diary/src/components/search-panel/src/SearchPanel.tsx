import './search-panel.css'

import React from 'react'

import PostStatusFilter from '../../post-status-filter/src'
import SearchPanelInput from '../../search-panel-input/src'

const SearchPanel = () => {
  return (
    <div className="search-panel d-flex">
      <SearchPanelInput />
      <PostStatusFilter />
    </div>
  )
}

export default SearchPanel
