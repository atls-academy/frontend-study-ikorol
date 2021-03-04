import './post-add-form.css'

import React from 'react'

import PostAddButton from '../../post-add-button'
import PostAddInput from '../../post-add-input'

const PostAddForm = () => {
  return (
    <div className="bottom-panel d-flex">
      <PostAddInput />
      <PostAddButton />
    </div>
  )
}

export default PostAddForm
