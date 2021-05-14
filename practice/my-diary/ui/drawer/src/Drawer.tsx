import React            from 'react'
import styled           from '@emotion/styled'
import { color, space } from 'styled-system'

import { Box }          from '@ui/layout'

const StyledContainer = styled.div(
  () => ({
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.2)',
    zIndex: 1,
    animation: 'container 1s',
    '@keyframes container': {
      from: { backgroundColor: 'transparent' },
      to: { backgroundColor: 'rgba(0,0,0,0.2)' },
    },
  }),
  color,
)

const StyledDrawer = styled.div(
  () => ({
    width: '400px',
    height: '100%',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    boxShadow: '2px 0 5px rgba(0,0,0,0.2)',
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    top: '0',
    left: '0',
    zIndex: 2,
    '@keyframes drawer': {
      from: { transform: 'translateX(-600px)' },
      to: { transform: 'translateX(0)' },
    },
    animation: 'drawer 0.3s',
  }),
  color,
  space,
)

export const Drawer = ({ onVisible, onClose, children }) => {
  return (
    <Box display={onVisible}>
      <StyledContainer onClick={onClose} zIndex={1} />
      <StyledDrawer>{children}</StyledDrawer>
    </Box>
  )
}
