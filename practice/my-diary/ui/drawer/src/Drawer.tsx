import React                     from 'react'
import styled                    from '@emotion/styled'
import { color, layout, shadow } from 'styled-system'

import { Box }                   from '@ui/layout'

const Blackout = styled.div(
  ({ visible }) => ({
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    visibility: 'hidden',
    zIndex: 1,
    animation: `${visible ? 'appear' : visible === false && 'disappear'} 0.3s forwards`,
    '@keyframes appear': {
      from: { backgroundColor: 'transparent', visibility: 'hidden' },
      to: { backgroundColor: 'gray', visibility: 'visible', opacity: '0.3' },
    },
    '@keyframes disappear': {
      from: { backgroundColor: 'gray', visibility: 'visible', opacity: '0.3' },
      to: { backgroundColor: 'transparent', visibility: 'hidden' },
    },
  }),
  color,
)

const StyledDrawer = styled.div(
  ({ visible }) => ({
    height: '100%',
    backgroundColor: 'white',
    boxSizing: 'border-box',
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
  shadow,
  layout,
)

export const Drawer = ({ isVisible, onClose, children }) => {
  return (
    <Box>
      <Blackout onClick={onClose} visible={isVisible} />
      <StyledDrawer visible={isVisible} boxShadow='darkGray' width={['70%', '50%', '40%']}>
        {children}
      </StyledDrawer>
    </Box>
  )
}
