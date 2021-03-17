import React         from 'react'
import ReactDOM      from 'react-dom'

import { AppHeader } from '@ui/app-header'
import { Button }    from '@ui/button'
import { Input }     from '@ui/input'
import { Box }       from '@ui/layout'
import { PostList }  from '@ui/post-list'

ReactDOM.render(
  <Box className='root' display='block' margin='0 auto' maxWidth='800px'>
    <AppHeader name='Irina Korol' text='5 posts 4 liked' />
    <Box>
      <Input placeholder='Search by records' />
      <Button label='All' />
      <Button label='Liked' />
    </Box>
    <PostList />
    <Box>
      <Input placeholder='What are you thinking today' />
      <Button label='Add' />
    </Box>
  </Box>,
  document.getElementById('root'),
)
