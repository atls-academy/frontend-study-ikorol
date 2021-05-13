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
    width: '600px',
    height: '200px',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    boxShadow: '2px 0 5px rgba(0,0,0,0.2)',
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: '0',
    zIndex: 2,
  }),
  color,
  space,
)

export const Drawer = ({ onVisible, onClose, children }) => {
  return (
    <Box display={onVisible}>
      <Box
        onClick={onClose}
        position='absolute'
        top='0'
        left='0'
        width='100%'
        height='100%'
        backgroundColor='lightGray'
        zIndex={1}
      />
      <StyledDrawer
        transform={onVisible === 'flex' ? 'translateY(50%)' : 'translateY(0)'}
        transition='transform 1s'
      >
        {children}
      </StyledDrawer>
    </Box>
  )
}
