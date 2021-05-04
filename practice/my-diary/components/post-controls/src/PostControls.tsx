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
        backgroundColor={filter === 'all' ? 'blue' : 'transparent'}
        color={filter === 'all' ? 'white' : 'gray'}
        borderRadius='leftSide'
        onClick={() => setFilter('all')}
      >
        {intl.formatMessage(messages.all)}
      </Button>
      <Button
        backgroundColor={filter === 'important' ? 'blue' : 'transparent'}
        color={filter === 'important' ? 'white' : 'gray'}
        borderRadius='0'
        onClick={() => setFilter('important')}
      >
        {intl.formatMessage(messages.important)}
      </Button>
      <Button
        backgroundColor={filter === 'liked' ? 'blue' : 'transparent'}
        color={filter === 'liked' ? 'white' : 'gray'}
        borderRadius='rightSide'
        onClick={() => setFilter('liked')}
      >
        {intl.formatMessage(messages.liked)}
      </Button>
    </Row>
  )
}
