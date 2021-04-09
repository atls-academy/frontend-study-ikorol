import React              from 'react'
import { useIntl }        from 'react-intl'

import { MainPageHeader } from './MainPageHeader'

export default () => {
  const intl = useIntl()

  return <MainPageHeader intl={intl} />
}
