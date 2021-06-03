import { styleFn } from 'styled-system'

export const createBaseStyles = (): styleFn => () => ({
  outline: 'none',
  border: 'none',
  padding: 0,
  margin: 0,
  width: '100%',
  '&:first-of-type': {
    padding: '10px',
  },
})
