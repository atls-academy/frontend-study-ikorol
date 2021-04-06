import React                              from 'react'

import { MainPageHeader }                 from '@components/header'
import { Button, IconButton }             from '@ui/button'
import { HeartIcon, StarIcon, TrashIcon } from '@ui/icons'
import { Input }                          from '@ui/input'
import { Box }                            from '@ui/layout'
import { List }                           from '@ui/list'
import { Text }                           from '@ui/text'

export const App = () => {
  const notes: { note: string; important: boolean; id: number }[] = [
    { note: 'Flight to Moscow', important: false, id: 1 },
    { note: 'Friends meeting', important: true, id: 2 },
    { note: 'Buy a new frying pan in Ikea', important: false, id: 3 },
  ]

  return (
    <Box className='root' display='block' margin='0 auto' maxWidth='800px'>
      <MainPageHeader />
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
      <List notes={notes}>
        <Text lineHeight='40px'>Запись</Text>
        <Box alignItem='center' display='flex' margin='0'>
          <IconButton>
            <StarIcon />
          </IconButton>
          <IconButton>
            <TrashIcon />
          </IconButton>
          <IconButton>
            <HeartIcon opacity='0' />
          </IconButton>
        </Box>
      </List>
      <Box>
        <Input width='100%' placeholder='What are you thinking today' />
        <Button backgroundColor='transparent'>Add</Button>
      </Box>
    </Box>
  )
}
