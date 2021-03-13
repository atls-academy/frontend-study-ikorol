import React from 'react'
import styled from '@emotion/styled'

import { AppHeader } from '@ui/app-header'
import { Button } from '@ui/button'
import { PostAddInput, SearchPanelInput } from '@ui/input'
import { Box } from '@ui/layout'
import { PostList } from '@ui/post-list'
import { PostStatusFilter } from '@ui/post-status-filter'

const StyledApp = styled.div`
  margin: 0 auto;
  max-width: 800px;
`

export const App = () => {
  return (
    <StyledApp>
      <AppHeader name="Irina Korol" text="5 posts 4 liked" />
      <Box>
        <SearchPanelInput />
        <PostStatusFilter />
      </Box>
      <PostList />
      <Box>
        <PostAddInput />
        <Button label="Add" />
      </Box>
    </StyledApp>
  )
}
