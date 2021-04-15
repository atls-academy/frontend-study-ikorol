import React                        from 'react'
import { useIntl }                  from 'react-intl'

import { MainPageHeader }           from '@components/main-page-header'
import { Button }                   from '@ui/button'
import { Input }                    from '@ui/input'
import { Box, Column, Layout, Row } from '@ui/layout'
import { List }                     from '@ui/list'

import messages                     from './messages'

const notes: { note: string; important: boolean; id: number }[] = [
  { note: 'Flight to Moscow', important: false, id: 1 },
  { note: 'Friends meeting', important: true, id: 2 },
  { note: 'Buy a new frying pan in Ikea', important: false, id: 3 },
]

export const App = () => {
  const intl = useIntl()

  return (
    <Box className='root' width='800px'>
      <Column>
        <MainPageHeader />
        <Layout flexBasis={20} />
        <Row justifyContent='space-between'>
          <Input placeholder={intl.formatMessage(messages.search)} padding='0 6px' />
          <Layout flexBasis={4} />
          <Button
            backgroundColor='#17a2b8'
            color='#fff'
            borderColor='#17a2b8'
            borderRadius='4px 0 0 4px'
          >
            All
          </Button>
          <Button backgroundColor='transparent' borderRadius='0 4px 4px 0'>
            Liked
          </Button>
        </Row>
        <Layout flexBasis={20} />
        <List notes={notes} />
        <Layout flexBasis={17} />
        <Row justifyContent='space-between'>
          <Input placeholder={intl.formatMessage(messages.post)} padding='0 6px' />
          <Layout flexBasis={4} />
          <Button backgroundColor='transparent'>Add</Button>
        </Row>
      </Column>
    </Box>
  )
}
