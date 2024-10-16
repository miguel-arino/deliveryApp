import React from 'react'
import { Filter } from '../../types/filter'
import FilterActive from './FilterActive'
import FilterDefault from './FilterDefault'
import { TouchableOpacity } from 'react-native'

interface FilterProps {
  filter: Filter
  selectedFilters: Filter[]
  toggleFilter: (filter: Filter) => void
}

const FilterItem = ({ filter, selectedFilters, toggleFilter }: FilterProps) => {
  return (
    <TouchableOpacity onPress={() => toggleFilter(filter)}>
      {selectedFilters.includes(filter) ? (
        <FilterActive name={filter.name} imageUrl={filter.imageUrl} />
      ) : (
        <FilterDefault name={filter.name} imageUrl={filter.imageUrl} />
      )}
    </TouchableOpacity>
  )
}

export default FilterItem
