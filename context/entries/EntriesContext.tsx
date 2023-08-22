import { createContext } from 'react'

interface props {
    entries: []
}

export const EntriesContext = createContext({} as props);