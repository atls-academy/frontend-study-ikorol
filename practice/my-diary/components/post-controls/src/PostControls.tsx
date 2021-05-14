import React                   from 'react'
import { useIntl }             from 'react-intl'

import { Button }              from '@ui/button'
import { Drawer }              from '@ui/drawer'
import { Input }               from '@ui/input'
import { Box, Column, Layout } from '@ui/layout'
import { Space }               from '@ui/text'
import { useFilter }           from '@store/filter'
import { useSearchValue }      from '@store/search-value'
import { useShowDrawer }       from '@store/show-drawer'

import messages                from './messages'

export const PostControls = () => {
  const [searchValue, setSearchValue] = useSearchValue()
  const [filter, setFilter] = useFilter()
  const [showDrawer, setShowDrawer] = useShowDrawer()

  const intl = useIntl()
  return (
    <Drawer visible={showDrawer} close={() => setShowDrawer(false)}>
      <Box>
        <Column>
          <Layout flexBasis={120} />
          <Box>
            <Input
              placeholder={intl.formatMessage(messages.search)}
              onChange={event => setSearchValue(event.target.value)}
              value={searchValue}
            />
            <Button
              color='white'
              backgroundColor='deepPurple'
              borderRadius='rightSide'
              onClick={() => {
                setFilter('all')
                setSearchValue('')
              }}
            >
              {intl.formatMessage(messages.clear)}
            </Button>
          </Box>
          <Layout flexBasis={20} />
          <Box justifyContent='center' height='40px'>
            <Button
              backgroundColor={filter === 'all' ? 'deepPurple' : 'white'}
              color={filter === 'all' ? 'white' : 'grayBlue'}
              border='1px solid #e4eaff'
              borderRadius='leftSide'
              onClick={() => setFilter('all')}
            >
              <Space count={2} />
              {intl.formatMessage(messages.all)}
              <Space count={2} />
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
              borderRadius='rightSide'
              onClick={() => setFilter('liked')}
            >
              {intl.formatMessage(messages.liked)}
            </Button>
          </Box>
        </Column>
      </Box>
    </Drawer>
  )
}
