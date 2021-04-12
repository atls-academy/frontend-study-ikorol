import React              from 'react'
import { useIntl }        from 'react-intl'

import { MainPageHeader } from '@components/main-page-header'
import { Button }         from '@ui/button'
import { Input }          from '@ui/input'
import { Box }            from '@ui/layout'
import { List }           from '@ui/list'

import messages           from './messages'

const notes: { note: string; important: boolean; id: number }[] = [
  { note: 'Flight to Moscow', important: false, id: 1 },
  { note: 'Friends meeting', important: true, id: 2 },
  { note: 'Buy a new frying pan in Ikea', important: false, id: 3 },
]

export const App = () => {
  const intl = useIntl()

  return (
    <Box className='root' display='block' margin='0 auto' maxWidth='800px'>
      <MainPageHeader />
      <Box>
        <Input width='100%' placeholder={intl.formatMessage(messages.search)} />
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
      </Box>
      <List notes={notes} />
      <Box>
        <Input width='100%' placeholder={intl.formatMessage(messages.post)} />
        <Button backgroundColor='transparent'>Add</Button>
      </Box>
    </Box>
  )
}
