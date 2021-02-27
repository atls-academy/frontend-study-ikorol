import './post-add-form.css'

import React from 'react'

const PostAddForm = () => {
  return (
    <form className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="what are you thinking today"
        className="form-control new-post-label"
      />
      <button type="submit" className="btn btn-outline-secondary">
        Добавить
      </button>
    </form>
  )
}

export default PostAddForm
