import React                   from 'react'

import { FormAddPost }         from '@fragments/form-add-post'
import { MainPageHeader }      from '@fragments/main-page-header'
import { PostControls }        from '@fragments/post-controls'
import { PostList }            from '@fragments/post-list'
import { Background }          from '@ui/background'
import { Column, Layout, Row } from '@ui/layout'

export const Diary = () => {
  return (
    <Background backgroundColor={['white', 'white', 'purple']}>
      <Row justifyContent='center'>
        <Column width={['100%', '100%', '35%']}>
          <Layout flexBasis={[0, 0, 100]} />
          <MainPageHeader />
          <PostControls />
          <Layout flexBasis={30} />
          <PostList />
          <FormAddPost />
          <Layout flexBasis={50} />
        </Column>
      </Row>
    </Background>
  )
}
