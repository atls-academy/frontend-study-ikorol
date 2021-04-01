import React         from 'react'

import { AppHeader } from '@components/app-header'
import { List }      from '@components/list'
import { Button }    from '@ui/button'
import { Input }     from '@ui/input'
import { Box }       from '@ui/layout'

export const App = () => {
  const notes: { note: string; id: number }[] = [
    { note: 'Flight to Moscow', id: 1 },
    { note: 'Friends meeting', id: 2 },
    { note: 'Buy a new frying pan in Ikea', id: 3 },
  ]

  return (
    <Box className='root' display='block' margin='0 auto' maxWidth='800px'>
      <AppHeader name='Irina Korol' text='5 posts 4 liked' />
      <Box>
        <Input width='100%' placeholder='Search by records' />
        <Button
          backgroundColor='#17a2b8'
          color='#fff'
          borderColor='#17a2b8'
          borderRadius='4px 0 0 4px'
        >
          All
        </Button>
        <Button backgroundColor='transparent' borderRadius='0 4px 4px 0'>
          Liked
        </Button>
      </Box>
      <List notes={notes} />
      <Box>
        <Input width='100%' placeholder='What are you thinking today' />
        <Button backgroundColor='transparent'>Add</Button>
      </Box>
    </Box>
  )
}
