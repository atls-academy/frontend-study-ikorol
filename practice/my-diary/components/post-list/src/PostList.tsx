import React                              from 'react'
import styled                             from '@emotion/styled'

import { IconButton }                     from '@ui/button'
import { HeartIcon, StarIcon, TrashIcon } from '@ui/icons'
import { Item }                           from '@ui/item'
import { Box }                            from '@ui/layout'

const StyledPostList = styled.ul`
  margin-top: 0;
  margin-bottom: 1rem;
  list-style-type: none;
  padding-inline-start: 0;
`
const StyledSpan = styled.span`
  display: block;
  line-height: 35px;
  cursor: pointer;
  user-select: none;
  transition: 0.5s all;
`

export const PostList = ({ posts }) => {
  const elements = posts.map(item => {
    return (
      <Item>
        <StyledSpan>{item.note}</StyledSpan>
        <Box alignItem='center !important' display='flex !important' margin='0'>
          <IconButton>
            <StarIcon />
          </IconButton>
          <IconButton>
            <TrashIcon />
          </IconButton>
          <HeartIcon opacity='0' />
        </Box>
      </Item>
    )
  })
  return <StyledPostList>{elements}</StyledPostList>
}
