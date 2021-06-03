import React              from 'react'

import { FormAddPost }    from '@fragments/form-add-post'
import { MainPageHeader } from '@fragments/main-page-header'
import { PostControls }   from '@fragments/post-controls'
import { PostList }       from '@fragments/post-list'
import { Background }     from '@ui/background'
import { Column, Layout } from '@ui/layout'

export const Diary = () => {
  return (
    <Background backgroundColor='purple' height='100vh' justifyContent='center'>
      <Column width='35%'>
        <Layout flexBasis={100} />
        <MainPageHeader />
        <PostControls />
        <Layout flexBasis={30} />
        <PostList />
        <FormAddPost />
        <Layout flexBasis={50} />
      </Column>
    </Background>
  )
}
