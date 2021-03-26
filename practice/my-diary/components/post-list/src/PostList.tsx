import React                              from 'react'
import styled                             from '@emotion/styled'

import { IconButton }                     from '@ui/button'
import { HeartIcon, StarIcon, TrashIcon } from '@ui/icons'
import { Item }                           from '@ui/item'
import { Box }                            from '@ui/layout'
import { Text }                           from '@ui/text'

const StyledPostList = styled.ul`
  margin-top: 0;
  margin-bottom: 20px;
  list-style-type: none;
  padding-inline-start: 0;
`

export const PostList = ({ notes }) => {
  const elements = notes.map(item => {
    return (
      <Item key={item.id}>
        <Text cursor='pointer' lineHeight='35px'>
          {item.note}
        </Text>
        <Box alignItem='center' display='flex' margin='0'>
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
