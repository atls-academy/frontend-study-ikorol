import React   from 'react'

import { Box } from '@ui/layout'

export const AppHeader = ({ name, text }) => {
  const siteName = name
  return (
    <Box justifyContent='space-between' alignItems='flex-end' display='flex!important'>
      <h1>{siteName}</h1>
      <h2>{text}</h2>
    </Box>
  )
}
