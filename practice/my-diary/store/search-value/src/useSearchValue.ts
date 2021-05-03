import { useContext } from 'react'

import { Context }    from './Context'

export const useSearchValue = () => useContext(Context)
