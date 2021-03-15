import React from 'react'
import styled from '@emotion/styled'

const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  margin: 0 0.1rem 0 0;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`

export const Input = () => {
  return <StyledInput type="text" placeholder="Search by records" />
}