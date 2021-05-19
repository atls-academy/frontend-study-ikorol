import React                   from 'react'

import { FormAddPost }         from '@fragments/form-add-post'
import { MainPageHeader }      from '@fragments/main-page-header'
import { PostControls }        from '@fragments/post-controls'
import { PostList }            from '@fragments/post-list'
import { Column, Layout, Row } from '@ui/layout'

export const Diary = () => {
  return (
    <Row height='100%' position='fixed' justifyContent='center' backgroundColor='purple'>
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
    </Row>
  )
}
