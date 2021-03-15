import React from 'react'
import styled from '@emotion/styled'

import { PostListItem } from '@ui/item'

const StyledPostList = styled.ul`
  margin-top: 0;
  margin-bottom: 1rem;
  list-style-type: none;
  padding-inline-start: 0;
`

export const PostList = () => {
  return (
    <StyledPostList>
      <PostListItem label="Ich möchte einen Reise machen" />
      <PostListItem label="Heute haben wir einen Besucher" />
      <PostListItem label="Bei Ikea einkaufen gehen" />
    </StyledPostList>
  )
}
