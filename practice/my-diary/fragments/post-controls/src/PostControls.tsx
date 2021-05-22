import React                   from 'react'
import { useIntl }             from 'react-intl'

import { Button }              from '@ui/button'
import { Drawer }              from '@ui/drawer'
import { Filter }              from '@ui/filter'
import { Input }               from '@ui/input'
import { Column, Layout, Row } from '@ui/layout'
import { Text }                from '@ui/text'
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

  const filterMessages = [
    intl.formatMessage(messages.all),
    intl.formatMessage(messages.important),
    intl.formatMessage(messages.liked),
  ]

  return (
    <Drawer isVisible={showDrawer} onClose={() => setShowDrawer(false)}>
      <Column>
        <Layout flexBasis={120} />
        <Row justifyContent='center'>
          <Input
            placeholder={intl.formatMessage(messages.search)}
            onChange={(event) => setSearchValue(event.target.value)}
            value={searchValue}
          />
          <Button
            size='small'
            borderRadius='rightSide'
            backgroundColor={searchValue !== '' ? 'deepPurple' : 'lightPurple'}
            onClick={() => {
              setFilter('all')
              setSearchValue('')
            }}
          >
            <Space count={2} />
            <Text>{intl.formatMessage(messages.clear)}</Text>
            <Space count={2} />
          </Button>
        </Row>
        <Layout flexBasis={30} />
        <Filter filter={filter} setFilter={setFilter} messages={filterMessages} />
      </Column>
    </Drawer>
  )
}
