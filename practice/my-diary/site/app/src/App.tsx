import React, { Component } from 'react'

import { AppHeader }        from '@components/app-header'
import { PostList }         from '@components/post-list'
import { Button }           from '@ui/button'
import { Input }            from '@ui/input'
import { Box }              from '@ui/layout'

interface AppProps {}

interface AppState {
  data: any
}

export class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { note: 'Ich möchte eine Reise machen' },
        { note: 'Heute haben wir einen Besucher' },
        { note: 'Bei Ikea einkaufen gehen' },
      ],
    }
  }

  render() {
    const posts = this.state
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
        <PostList posts={posts.data} />
        <Box>
          <Input placeholder='What are you thinking today' />
          <Button>Add</Button>
        </Box>
      </Box>
    )
  }
}
