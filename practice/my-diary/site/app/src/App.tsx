import React      from 'react'

import { List }   from '@components/list'
import { Button } from '@ui/button'
import { Header } from '@ui/header'
import { Input }  from '@ui/input'
import { Box }    from '@ui/layout'

export const App = () => {
  const notes: { note: string; important: boolean; id: number }[] = [
    { note: 'Flight to Moscow', important: false, id: 1 },
    { note: 'Friends meeting', important: true, id: 2 },
    { note: 'Buy a new frying pan in Ikea', important: false, id: 3 },
  ]

  return (
    <Box className='root' display='block' margin='0 auto' maxWidth='800px'>
      <Header name='Irina Korol' text='5 posts 4 liked' />
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
