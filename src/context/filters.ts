import { createContext } from 'react';
import Storage from '@/utils/storage'

export interface Filters {
  time: string,
}

export type FiltersContextType = {
  filters: Filters,
  setFilters?: React.Dispatch<React.SetStateAction<Filters>>
}

const STORAGE_KEY = 'filters'

export const filtersStorage = new Storage({ key: STORAGE_KEY })

export const defaultFilter = { time: '' }

export default createContext<FiltersContextType>({
  filters: defaultFilter
}); 
