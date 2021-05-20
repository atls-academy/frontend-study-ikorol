import styled                                from '@emotion/styled'
import { border, color, shadow, typography } from 'styled-system'

import { Button }                            from './Button'

export const GiantButton = styled(Button)(
  () => ({
    fontSize: 32,
    fontWeight: 'bold',
    borderRadius: 35,
    border: 'none',
  }),
  typography,
  border,
  color,
  shadow,
)

GiantButton.defaultProps = {
  color: 'white',
  height: '80px',
  backgroundColor: 'deepPurple',
  boxShadow: 'violet',
}
