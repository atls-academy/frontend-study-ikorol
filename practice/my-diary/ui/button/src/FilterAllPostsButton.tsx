import React from 'react'
import styled from '@emotion/styled'

const StyledFilterAllPostsButton = styled.button`
  color: #fff;
  background-color: #17a2b8;
  border: 1px solid #17a2b8;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  vertical-align: middle;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transition: color 0.15s ease-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  :hover {
    color: #fff;
    background-color: #008b8b;
    border-color: #008b8b;
  }
  position: relative;
`

export const FilterAllPostsButton = (props) => {
  return <StyledFilterAllPostsButton type="button">{props.label}</StyledFilterAllPostsButton>
}
