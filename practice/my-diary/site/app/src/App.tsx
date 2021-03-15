import React from 'react'
import styled from '@emotion/styled'

import { AppHeader } from '@ui/app-header'
import { Button, FilterAllPostsButton, FilterLikedPostButton } from '@ui/button'
import { PostAddInput, SearchPanelInput } from '@ui/input'
import { Box } from '@ui/layout'
import { PostList } from '@ui/post-list'

const StyledApp = styled.div`
  margin: 0 auto;
  max-width: 800px;
`

export const App = () => {
  return (
    <StyledApp className="root">
      <AppHeader name="Irina Korol" text="5 posts 4 liked" />
      <Box>
        <SearchPanelInput />
        <FilterAllPostsButton label="All" />
        <FilterLikedPostButton label="Liked" />
      </Box>
      <PostList />
      <Box>
        <PostAddInput />
        <Button label="Add" />
      </Box>
    </StyledApp>
  )
}
