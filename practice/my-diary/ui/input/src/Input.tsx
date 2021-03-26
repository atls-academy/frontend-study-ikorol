import React  from 'react'
import styled from '@emotion/styled'

const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: 24px;
  padding: 6px 10px;
  font-size: 16px;
  font-weight: 400;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 4px;
  margin: 0 2px 0 0;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`

export const Input = props => {
  const inputProps = props
  return <StyledInput type='text' placeholder={inputProps.placeholder} />
}
