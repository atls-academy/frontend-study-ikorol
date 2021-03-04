import './post-list-item.css'

import React from 'react'

import StarButton from '../../star-button'
import TrashButton from '../../trash-button'

const PostListItem = (props: any) => {
  return (
    <li className="app-list-item d-flex justify-content-between">
      <span className="app-list-item-label">{props.label}</span>
      <div className="d-flex justify-content-center align-items-center">
        <StarButton />
        <TrashButton />
        <i className="fa fa-heart"></i>
      </div>
    </li>
  )
}

export default PostListItem
