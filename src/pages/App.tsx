import { useState, useEffect } from 'react'
import ActionBar from './ActionBar'
import MainCanvas from './MainCanvas'
import FiltersContext, { filtersStorage, defaultFilter } from '@/context/filters'
import type { Filters } from '@/context/filters'

function App() {
  const [filters, setFilters] = useState<Filters>(() => {
    return (filtersStorage.get() ?? defaultFilter) as Filters
  });

  useEffect(() => {
    return () => {
      filtersStorage.set(filters)
    }
  }, [])

  return (
    <>
      <FiltersContext.Provider value={{ filters, setFilters }}>
        <ActionBar />
        <MainCanvas />
      </FiltersContext.Provider>
    </>
  )
}

export default App
