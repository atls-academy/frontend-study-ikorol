import React from 'react'
import styled from '@emotion/styled'

import { TrashIcon } from '@ui/icons'

const StyledTrashButton = styled.button({
  height: 35,
  width: 35,
  margin: 3,
  fontSize: 17,
  color: 'red',
})

export const TrashButton = () => {
  return (
    <StyledTrashButton type="button">
      <TrashIcon />
    </StyledTrashButton>
  )
}
