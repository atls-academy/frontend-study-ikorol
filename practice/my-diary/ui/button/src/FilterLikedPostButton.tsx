import React from 'react'
import styled from '@emotion/styled'

const StyledFilterLikedPostButton = styled.button`
  color: #6c757d;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  background-color: transparent;
  border: 1px solid #6c757d;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  transition: color 0.15s ease-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  :hover {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }
  position: relative;
`

export const FilterLikedPostButton = (props) => {
  const labelButton = props.label
  return <StyledFilterLikedPostButton>{labelButton}</StyledFilterLikedPostButton>
}
