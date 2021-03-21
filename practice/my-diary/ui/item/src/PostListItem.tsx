import React                              from 'react'
import styled                             from '@emotion/styled'

import { IconButton }                     from '@ui/button'
import { HeartIcon, StarIcon, TrashIcon } from '@ui/icons'

const StyledItem = styled.li`
  font-size: 1.25rem;
  justify-content: space-between !important;
  display: flex !important;
  box-sizing: border-box;
`
const StyledSpan = styled.span`
  display: block;
  line-height: 35px;
  cursor: pointer;
  user-select: none;
  transition: 0.5s all;
`
const StyledIconsBox = styled.div`
  align-items: center !important;
  display: flex !important;
  box-sizing: border-box;
`

export const PostListItem = props => {
  const itemText = props
  return (
    <StyledItem>
      <StyledSpan>{itemText.label}</StyledSpan>
      <StyledIconsBox>
        <IconButton>
          <StarIcon />
        </IconButton>
        <IconButton>
          <TrashIcon />
        </IconButton>
        <HeartIcon opacity='0' />
      </StyledIconsBox>
    </StyledItem>
  )
}
