import './post-add-form.css'

import React from 'react'

import { PostAddButton } from '@ui/post-add-button'
import { PostAddInput } from '@ui/post-add-input'

export const PostAddForm = () => {
  return (
    <div className="bottom-panel d-flex">
      <PostAddInput />
      <PostAddButton />
    </div>
  )
}
