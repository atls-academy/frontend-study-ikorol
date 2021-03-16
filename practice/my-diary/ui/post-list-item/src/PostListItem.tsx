import './post-list-item.css'

import React           from 'react'

import { StarButton }  from '@ui/star-button'
import { TrashButton } from '@ui/trash-button'

export const PostListItem = ({ label }) => {
  return (
    <li className='app-list-item d-flex justify-content-between'>
      <span className='app-list-item-label'>{label}</span>
      <div className='d-flex justify-content-center align-items-center'>
        <StarButton />
        <TrashButton />
        <i className='fa fa-heart' />
      </div>
    </li>
  )
}
