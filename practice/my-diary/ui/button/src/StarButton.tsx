import React from 'react'
import styled from '@emotion/styled'

import { StarIcon } from '@ui/icons'

const StyledStarButton = styled.button({
  height: 35,
  width: 35,
  margin: 3,
  fontSize: 17,
  color: '#FFD700',
})

export const StarButton = () => {
  return (
    <StyledStarButton type="button">
      <StarIcon />
    </StyledStarButton>
  )
}
