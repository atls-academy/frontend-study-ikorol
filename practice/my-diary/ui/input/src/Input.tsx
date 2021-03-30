import React  from 'react'
import styled from '@emotion/styled'

const StyledInput = styled('input')(({ width, height, ...props }) => ({
  display: 'block',
  color: '#495057',
  width,
  height,
  padding: '6px 10px',
  fontSize: 16,
  fontWeight: 400,
  backgroundColor: '#fff',
  backgroundClip: 'padding-box',
  border: '1px solid #ced4da',
  borderRadius: 4,
  margin: '0 2px 0 0',
  transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
}))

export const Input = props => {
  const inputProps = props
  return <StyledInput type='text' width={inputProps.width} placeholder={inputProps.placeholder} />
}
