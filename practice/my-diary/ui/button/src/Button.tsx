import styled          from '@emotion/styled'
import { shadow }      from 'styled-system'
import { switchProp }  from 'styled-tools'

import { Box }         from '@ui/layout'

import { ButtonProps } from './types'

export const Button = styled(Box)<ButtonProps>(
  () => ({
    outline: 'none',
    cursor: 'pointer',
    '&:active': {
      transform: 'scale(0.98)',
    },
  }),
  switchProp('type', ({ theme, isEmpty, isSelected, isPlaced }) => ({
    large: {
      backgroundColor: '#b07fec',
      justifyContent: 'center',
      marginTop: '-30px',
      height: '80px',
      width: '250px',
      borderRadius: 35,
      border: 'none',
      color: 'white',
      boxShadow: theme.shadows.violet,
    },
    search: {
      borderRadius: theme.radii.rightSide,
      backgroundColor: isEmpty ? theme.colors.lightPurple : theme.colors.deepPurple,
    },
    filter: {
      border: '1px solid',
      borderColor: theme.colors.purple,
      backgroundColor: isSelected ? theme.colors.deepPurple : theme.colors.white,
      borderRadius:
        isPlaced === 'last' ? theme.radii.rightSide : isPlaced === 'first' && theme.radii.leftSide,
    },
  })),
  shadow,
)
