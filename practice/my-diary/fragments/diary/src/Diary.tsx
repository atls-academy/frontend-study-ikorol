import React                   from 'react'

import { FormAddPost }         from '@fragments/form-add-post'
import { MainPageHeader }      from '@fragments/main-page-header'
import { PostControls }        from '@fragments/post-controls'
import { PostList }            from '@fragments/post-list'
import { Box, Column, Layout } from '@ui/layout'

export const Diary = () => {
  return (
    <Box
      height='100%'
      width='100%'
      top='0'
      left='0'
      position='fixed'
      justifyContent='center'
      backgroundColor='purple'
    >
      <Column width='600px'>
        <Layout flexBasis={100} />
        <MainPageHeader />
        <PostControls />
        <Layout flexBasis={30} />
        <Column>
          <PostList />
          <FormAddPost />
        </Column>
        <Layout flexBasis={50} />
      </Column>
    </Box>
  )
}
