import React                    from 'react'
import styled                   from '@emotion/styled'
import { color, space, system } from 'styled-system'

import { Box }                  from '@ui/layout'

const StyledDrawer = styled.div(
  system({
    transform: true,
    transition: true,
  }),
  () => ({
    width: '500px',
    boxSizing: 'border-box',
    boxShadow: '2px 0 5px rgba(0,0,0,0.2)',
    position: 'absolute',
    zIndex: 2,
    transition: 'transform 0.5s easy-in-out',
  }),
  color,
  space,
)

export const Drawer = ({ onVisible, onClose, children, transform }) => {
  return (
    <Box display={onVisible} justifyContent='center'>
      <Box
        onClick={onClose}
        position='absolute'
        width='600px'
        height='392px'
        backgroundColor='rgba(0,0,0,0.1)'
        zIndex={1}
      />
      <StyledDrawer transform={transform}>{children}</StyledDrawer>
    </Box>
  )
}
