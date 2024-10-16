import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import typography from '../../styles/typography'
import { filterstyles } from './FilterDefault'
import colors from '../../styles/colors'

const styles = StyleSheet.create({
  filterItemSelected: {
    backgroundColor: colors.selected,
  },
  filterNameSelected: {
    color: colors.lightText,
  },
})

interface FilterProps {
  name: string
  imageUrl: string
}

const FilterActive = ({ name, imageUrl }: FilterProps) => {
  return (
    <View style={[filterstyles.filterItem, styles.filterItemSelected]}>
      <Image source={{ uri: imageUrl }} style={filterstyles.filterImage} />
      <Text style={[typography.title2, styles.filterNameSelected]}>{name}</Text>
    </View>
  )
}

export default FilterActive
