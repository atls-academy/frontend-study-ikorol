import React                   from 'react'
import { useIntl }             from 'react-intl'

import { BurgerButtonIcon }    from '@ui/icons'
import { Column, Layout, Row } from '@ui/layout'
import { Space, Text }         from '@ui/text'
import { useNotes }            from '@store/notes'
import { useShowDrawer }       from '@store/show-drawer'

import messages                from './messages'

export const MainPageHeader = () => {
  const intl = useIntl()
  const [notes] = useNotes()
  const [, setShowDrawer] = useShowDrawer()
  return (
    <Row backgroundColor='deepPurple' lineHeights='giant' alignItems='center'>
      <Layout flexBasis={50} />
      <BurgerButtonIcon cursor='pointer' onClick={() => setShowDrawer(true)} />
      <Column alignItems='center'>
        <Layout flexBasis={30} />
        <Text fontSize='large' fontWeight='bold' color='white' textAlign='center'>
          {intl.formatMessage(messages.name)}
        </Text>
        <Layout flexBasis={10} />
        <Text fontSize='normal' color='white'>
          {notes.length}
          <Space />
          {intl.formatMessage(messages.post)}
          <Space count={3} />
          {notes.filter(item => item.important).length}
          <Space />
          {intl.formatMessage(messages.important)}
          <Space count={3} />
          {notes.filter(item => item.liked).length}
          <Space />
          {intl.formatMessage(messages.liked)}
        </Text>
        <Layout flexBasis={10} />
      </Column>
      <Layout flexBasis={80} />
    </Row>
  )
}
