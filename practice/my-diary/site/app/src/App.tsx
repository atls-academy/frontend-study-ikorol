import React         from 'react'

import { AppHeader } from '@components/app-header'
import { PostList }  from '@components/post-list'
import { Button }    from '@ui/button'
import { Input }     from '@ui/input'
import { Box }       from '@ui/layout'

export const App = () => {
  return (
    <Box className='root' display='block' margin='0 auto' maxWidth='800px'>
      <AppHeader name='Irina Korol' text='5 posts 4 liked' />
      <Box>
        <Input placeholder='Search by records' />
        <Button color='blue' borderRadius='0.25em 0 0 0.25em'>
          All
        </Button>
        <Button borderRadius='0 0.25em .25em 0'>Liked</Button>
      </Box>
      <PostList />
      <Box>
        <Input placeholder='What are you thinking today' />
        <Button>Add</Button>
      </Box>
    </Box>
  )
}
