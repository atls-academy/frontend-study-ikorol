import { useContext } from 'react'

import { Context }    from './Context'

export const useNotes = () => useContext(Context)
