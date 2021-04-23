import React            from 'react'
import { IntlProvider } from 'react-intl'
import { render }       from 'react-dom'

import { App }          from './App'

render(
  <IntlProvider locale='en'>
    <App />
  </IntlProvider>,
  document.getElementById('root'),
)
