import React                   from 'react'
import { useIntl }             from 'react-intl'

import { Box, Column, Layout } from '@ui/layout'
import { Space, Text }         from '@ui/text'
import { useNotes }            from '@store/notes'

import messages                from './messages'

export const MainPageHeader = () => {
  const intl = useIntl()
  const [notes] = useNotes()

  return (
    <Column backgroundColor='deepPurple' height='100px' justifyContent='center' alignItems='center'>
      <Layout flexBasis={20} />
      <Text fontSize='large' fontWeight='bold' color='white'>
        {intl.formatMessage(messages.name)}
      </Text>
      <Box>
        <Column>
          <Text fontSize='small' color='white'>
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
        </Column>
      </Box>
    </Column>
  )
}
