import { FC, ReactNode, useReducer } from 'react'
import { EntriesContext } from './EntriesContext'
import { entriesReducer } from './entriesReducer';

export interface EntriesState {
    entries: [];
}

const INITIAL_STATE: EntriesState = {
    entries: []
}

interface props {
    children: ReactNode

}

export const Entriesprovider: FC<props> = ({ children }) => {
    const [state, dispatch] = useReducer(entriesReducer, INITIAL_STATE)
    return (
        <EntriesContext.Provider value={{ ...state }}>
            {
                children
            }
        </EntriesContext.Provider>
    )
}