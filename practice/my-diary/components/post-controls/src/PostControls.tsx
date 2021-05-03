import React              from 'react'
import { useIntl }        from 'react-intl'

import { Button }         from '@ui/button'
import { Input }          from '@ui/input'
import { Layout, Row }    from '@ui/layout'
import { useFilter }      from '@store/filter'
import { useSearchValue } from '@store/search-value'

import messages           from './messages'

export const PostControls = () => {
  const [setSearchValue] = useSearchValue()
  const [filter, setFilter] = useFilter()
  const intl = useIntl()
  return (
    <Row justifyContent='space-between'>
      <Input
        placeholder={intl.formatMessage(messages.search)}
        onChange={event => setSearchValue(event.target.value)}
      />
      <Layout flexBasis={4} />
      <Button
        backgroundColor={filter === 'all' ? '#17a2b8' : 'transparent'}
        color={filter === 'all' ? '#fff' : '#6c757d'}
        borderRadius='4px 0 0 4px'
        onClick={() => setFilter('all')}
      >
        {intl.formatMessage(messages.all)}
      </Button>
      <Button
        backgroundColor={filter === 'important' ? '#17a2b8' : 'transparent'}
        color={filter === 'important' ? '#fff' : '#6c757d'}
        borderRadius='0'
        onClick={() => setFilter('important')}
      >
        {intl.formatMessage(messages.important)}
      </Button>
      <Button
        backgroundColor={filter === 'liked' ? '#17a2b8' : 'transparent'}
        color={filter === 'liked' ? '#fff' : '#6c757d'}
        borderRadius='0 4px 4px 0'
        onClick={() => setFilter('liked')}
      >
        {intl.formatMessage(messages.liked)}
      </Button>
    </Row>
  )
}
