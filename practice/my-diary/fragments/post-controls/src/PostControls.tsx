import React                   from 'react'
import { useIntl }             from 'react-intl'

import { Drawer }              from '@ui/drawer'
import { Filter }              from '@ui/filter'
import { Input }               from '@ui/input'
import { Column, Layout, Row } from '@ui/layout'
import { useFilter }           from '@store/filter'
import { useSearchValue }      from '@store/search-value'
import { useShowDrawer }       from '@store/show-drawer'

import messages                from './messages'

export const PostControls = () => {
  const [searchValue, setSearchValue] = useSearchValue()
  const [filter, setFilter] = useFilter()
  const [showDrawer, setShowDrawer] = useShowDrawer()
  const intl = useIntl()

  const filterOptions = [
    intl.formatMessage(messages.all),
    intl.formatMessage(messages.important),
    intl.formatMessage(messages.liked),
  ]

  return (
    <Drawer isVisible={showDrawer} onClose={() => setShowDrawer(false)}>
      <Column>
        <Layout flexBasis={120} />
        <Row justifyContent='center'>
          <Layout flexBasis={30} />
          <Input
            search
            onClear={() => setSearchValue('')}
            onChange={event => setSearchValue(event.target.value)}
            value={searchValue}
            placeholder={intl.formatMessage(messages.search)}
          />
          <Layout flexBasis={30} />
        </Row>
        <Layout flexBasis={30} />
        <Filter filter={filter} setFilter={setFilter} options={filterOptions} />
      </Column>
    </Drawer>
  )
}
