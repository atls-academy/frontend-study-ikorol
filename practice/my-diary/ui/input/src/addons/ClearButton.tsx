import React      from 'react'

import { Button } from '@ui/button'
import { Box }    from '@ui/layout'

export const ClearButton = ({ ...props }) => (
  <Box width='30%'>
    <Button color='deepPurple' borderRadius='right' {...props} />
  </Box>
)
