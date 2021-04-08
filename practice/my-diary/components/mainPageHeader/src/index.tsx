import React              from 'react'
import { useIntl }        from 'react-intl'

import { MainPageHeader } from './MainPageHeader'

export default ({ postsSum, likesSum }) => {
  const intl = useIntl()

  return <MainPageHeader intl={intl} postsSum={postsSum} likesSum={likesSum} />
}
