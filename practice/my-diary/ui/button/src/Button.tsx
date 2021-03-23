import React                       from 'react'
import styled                      from '@emotion/styled'
import { createShouldForwardProp } from '@styled-system/should-forward-prop'
import { border, flexbox }         from 'styled-system'
import { switchProp }              from 'styled-tools'

import { StyledButtonProps }       from './types'

const base: any = () => ({
  boxSizing: 'border-box',
  display: 'inline-block',
  alignItems: 'flex-start',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  border: '1px solid #6c757d',
  fontWeight: '400',
  textAlign: 'center',
  verticalAlign: 'middle',
  lineHeight: '1.5',
  transition:
    'color 0.15s ease-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
  justifyContent: 'center',
  position: 'relative',
})

const colors = switchProp('color', () => ({
  gray: {
    background: 'transparent',
    color: '#6c757d',
    borderColor: '0.15s ease-in-out, box-shadow 0.15s ease-in-out',
    '&:hover': {
      color: '#fff',
      backgroundColor: '#6c757d',
      borderColor: '#6c757d',
    },
  },
  neutral: {
    '&:hover': 'none',
    '&:focus': {
      boxShadow: 'none',
      outline: 'none',
    },
  },
  blue: {
    backgroundColor: '#17a2b8',
    color: '#fff',
    borderColor: '#17a2b8',
    '&:hover': {
      backgroundColor: '#117a8b',
      borderColor: '#117a8b',
    },
  },
}))

const sizes = switchProp('size', () => ({
  normal: {
    height: 38,
    fontSize: '1em',
    padding: '0.375rem 0.75rem',
  },
  mini: {
    width: 35,
    height: 35,
    fontSize: '17px',
    margin: 3,
    borderRadius: 'none',
  },
}))

const shouldForwardProp = createShouldForwardProp(['size', 'color'])

const StyledButton = styled('button', { shouldForwardProp })<StyledButtonProps>(
  base,
  sizes,
  colors,
  border,
  flexbox,
)

export const Button = ({ ...props }) => <StyledButton {...props} />

Button.defaultProps = {
  color: 'gray',
  size: 'normal',
  borderRadius: '0.25em',
}
