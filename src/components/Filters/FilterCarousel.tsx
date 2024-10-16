import React from 'react'
import { FlatList, StyleSheet, View, ListRenderItem } from 'react-native'
import { Filter } from '../../types/filter'
import FilterItem from './FilterItem'
import colors from '../../styles/colors'

const styles = StyleSheet.create({
  flatList: {
    backgroundColor: colors.background,
    width: 'auto',
  },
  container: {
    backgroundColor: colors.background,
    paddingTop: 10,
    paddingBottom: 12,
    gap: 16,
    paddingHorizontal: 8,
    paddingRight: 24,
  },
})

interface FilterCarouselProps {
  filters: Filter[]
  selectedFilters: Filter[]
  toggleFilter: (filter: Filter) => void
}

const FilterCarousel = ({
  filters,
  selectedFilters,
  toggleFilter,
}: FilterCarouselProps) => {
  const renderItem: ListRenderItem<Filter> = ({ item }) => (
    <FilterItem
      filter={item}
      selectedFilters={selectedFilters}
      toggleFilter={toggleFilter}
    />
  )
  return (
    <View>
      <FlatList
        data={filters}
        style={styles.container}
        contentContainerStyle={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  )
}

export default FilterCarousel
