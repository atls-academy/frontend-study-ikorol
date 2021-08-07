import React, { useState }                   from 'react'

import { FilterProvider }                    from '@store/filter'
import { NotesProvider }                     from '@store/notes'
import { SearchValueProvider }               from '@store/search-value'
import { ShowDrawerProvider }                from '@store/show-drawer'
import { ThemeProvider, injectGlobalStyles } from '@ui/theme'
import { IntlProvider }                      from 'react-intl'

const App = ({ Component, pageProps }) => {
  const [notes, setNotes] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [filter, setFilter] = useState('all')
  const [showDrawer, setShowDrawer] = useState<boolean>(null)
  injectGlobalStyles()

  return (
    <IntlProvider locale='en'>
      <ThemeProvider>
        <NotesProvider value={[notes, setNotes]}>
          <SearchValueProvider value={[searchValue, setSearchValue]}>
            <FilterProvider value={[filter, setFilter]}>
              <ShowDrawerProvider value={[showDrawer, setShowDrawer]}>
                <Component {...pageProps} />
              </ShowDrawerProvider>
            </FilterProvider>
          </SearchValueProvider>
        </NotesProvider>
      </ThemeProvider>
    </IntlProvider>
  )
}

export default App
