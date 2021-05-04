import React                        from 'react'
import { useIntl }                  from 'react-intl'

import { Box, Column, Layout, Row } from '@ui/layout'
import { Space, Text }              from '@ui/text'
import { useNotes }                 from '@store/notes'

import messages                     from './messages'

export const MainPageHeader = () => {
  const intl = useIntl()
  const [notes] = useNotes()

  return (
    <Row justifyContent='space-between'>
      <Text fontSize='large' fontWeight='bold'>
        {intl.formatMessage(messages.name)}
      </Text>
      <Box>
        <Column>
          <Layout flexBasis={10} />
          <Text fontSize='medium'>
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
    </Row>
  )
}
