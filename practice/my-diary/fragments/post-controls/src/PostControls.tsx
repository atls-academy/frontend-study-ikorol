import React                        from 'react'
import { useIntl }                  from 'react-intl'

import { Drawer }                   from '@ui/drawer'
import { Filter }                   from '@ui/filter'
import { Input }                    from '@ui/input'
import { Box, Column, Layout, Row } from '@ui/layout'
import { Space }                    from '@ui/text'
import { useFilter }                from '@store/filter'
import { useSearchValue }           from '@store/search-value'
import { useShowDrawer }            from '@store/show-drawer'

import messages                     from './messages'

export const PostControls = () => {
  const [searchValue, setSearchValue] = useSearchValue()
  const [filter, setFilter] = useFilter()
  const [showDrawer, setShowDrawer] = useShowDrawer()

  const intl = useIntl()
  return (
    <Drawer isVisible={showDrawer} onClose={() => setShowDrawer(false)}>
      <Column>
        <Layout flexBasis={120} />
        <Row justifyContent='center'>
          <Input
            placeholder={intl.formatMessage(messages.search)}
            onChange={event => setSearchValue(event.target.value)}
            value={searchValue}
          />
          <Box
            borderRadius='rightSide'
            color='white'
            backgroundColor={searchValue !== '' ? 'deepPurple' : 'lightPurple'}
            cursor='pointer'
            onClick={() => {
              setFilter('all')
              setSearchValue('')
            }}
          >
            <Space count={2} />
            {intl.formatMessage(messages.clear)}
            <Space count={2} />
          </Box>
        </Row>
        <Layout flexBasis={30} />
        <Filter filter={filter} setFilter={setFilter} messages={messages} />
      </Column>
    </Drawer>
  )
}
