import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Restaurant } from '../../types/restaurant'
import typography from '../../styles/typography'
import colors from '../../styles/colors'

const styles = StyleSheet.create({
  filterContainer: { flexDirection: 'row' },
})

interface FilterRowProps {
  restaurant: Restaurant
}

const FilterRow = ({ restaurant }: FilterRowProps) => {
  return (
    <View style={styles.filterContainer}>
      <Text style={[typography.headline2, { color: colors.subtitle }]}>
        {restaurant.filters.map((filter) => filter.name).join(' • ')}
      </Text>
    </View>
  )
}

export default FilterRow
