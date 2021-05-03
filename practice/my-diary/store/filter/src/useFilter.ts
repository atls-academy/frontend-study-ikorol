import { useContext } from 'react'

import { Context }    from './Context'

export const useFilter = () => useContext(Context)
