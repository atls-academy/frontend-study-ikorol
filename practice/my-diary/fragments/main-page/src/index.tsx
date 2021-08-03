import React            from 'react'
import { IntlProvider } from 'react-intl'

import { App }          from './MainPage'

const MainPage = () => (
  <>
    <IntlProvider locale='en'>
      <App />
    </IntlProvider>
  </>
)

export default MainPage
