import React              from 'react'
import { useIntl }        from 'react-intl'

import { Button }         from '@ui/button'
import { Drawer }         from '@ui/drawer'
import { Input }          from '@ui/input'
import { Box }            from '@ui/layout'
import { useFilter }      from '@store/filter'
import { useSearchValue } from '@store/search-value'
import { useShowDrawer }  from '@store/show-drawer'

import messages           from './messages'

export const PostControls = () => {
  const [, setSearchValue] = useSearchValue()
  const [filter, setFilter] = useFilter()
  const [showDrawer, setShowDrawer] = useShowDrawer()
  const intl = useIntl()

  return (
    <Drawer
      onVisible={showDrawer ? 'flex' : 'none'}
      onClose={() => setShowDrawer(false)}
      transform={showDrawer ? 'translateY(60%)' : 'translateY(0)'}
    >
      <Box>
        <Input
          width='100%'
          placeholder={intl.formatMessage(messages.search)}
          onChange={event => setSearchValue(event.target.value)}
        />
        <Button
          backgroundColor={filter === 'all' ? 'deepPurple' : 'white'}
          color={filter === 'all' ? 'white' : 'grayBlue'}
          border='1px solid #e4eaff'
          onClick={() => setFilter('all')}
        >
          {intl.formatMessage(messages.all)}
        </Button>
        <Button
          backgroundColor={filter === 'important' ? 'deepPurple' : 'white'}
          color={filter === 'important' ? 'white' : 'grayBlue'}
          border='1px solid #e4eaff'
          onClick={() => setFilter('important')}
        >
          {intl.formatMessage(messages.important)}
        </Button>
        <Button
          backgroundColor={filter === 'liked' ? 'deepPurple' : 'white'}
          color={filter === 'liked' ? 'white' : 'grayBlue'}
          border='1px solid #e4eaff'
          onClick={() => setFilter('liked')}
        >
          {intl.formatMessage(messages.liked)}
        </Button>
      </Box>
    </Drawer>
  )
}
