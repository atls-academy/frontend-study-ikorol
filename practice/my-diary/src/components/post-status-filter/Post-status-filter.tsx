import './post-status-filter.css'

import React from 'react'

const PostStatusFilter = () => {
  return (
    <div className="btn-group">
      <button className="btn btn-info" type="button">
        Все
      </button>
      <button className="btn btn-outline-secondary" type="button">
        Понравилось
      </button>
    </div>
  )
}

export default PostStatusFilter
