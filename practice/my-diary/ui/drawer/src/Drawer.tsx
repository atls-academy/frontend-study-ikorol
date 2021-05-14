import React                    from 'react'
import styled                   from '@emotion/styled'
import { color, space, system } from 'styled-system'

import { Box }                  from '@ui/layout'

const StyledContainer = styled.div(
  system({
    visibility: true,
  }),
  ({ visible }) => ({
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'transperent',
    visibility: 'hidden',
    zIndex: 1,
    animation: `${visible ? 'appear' : visible === false && 'disappear'} 0.3s forwards`,
    '@keyframes appear': {
      from: { backgroundColor: 'transparent', visibility: 'hidden' },
      to: { backgroundColor: 'rgba(0,0,0,0.2)', visibility: 'visible' },
    },
    '@keyframes disappear': {
      from: { backgroundColor: 'rgba(0,0,0,0.2)', visibility: 'visible' },
      to: { backgroundColor: 'transparent', visibility: 'hidden' },
    },
  }),
  color,
)

const StyledDrawer = styled.div(
  system({
    visibility: true,
  }),
  ({ visible }) => ({
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
    transform: 'translateX(-400px)',
    visibility: 'hidden',
    '@keyframes slideIn': {
      from: { transform: 'translateX(-400px)', visibility: 'hidden' },
      to: { transform: 'translateX(0)', visibility: 'visible' },
    },
    animation: `${visible ? 'slideIn' : visible === false && 'slideOut'} 0.3s forwards`,
    '@keyframes slideOut': {
      from: { transform: 'translateX(0)', visibility: 'visible' },
      to: { transform: 'translateX(-400px)', visibility: 'hidden' },
    },
  }),
  color,
  space,
)

export const Drawer = ({ visible, close, children }) => {
  return (
    <Box>
      <StyledContainer onClick={close} visible={visible} />
      <StyledDrawer visible={visible}>{children}</StyledDrawer>
    </Box>
  )
}
