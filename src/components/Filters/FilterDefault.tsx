import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import typography from '../../styles/typography'
import colors from '../../styles/colors'

export const filterstyles = StyleSheet.create({
  filterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 16,
    gap: 8,
    borderRadius: 28,
    backgroundColor: colors.card,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  filterImage: {
    aspectRatio: 1,
    width: 60,
  },
})

interface FilterProps {
  name: string
  imageUrl: string
}

const FilterDefault = ({ name, imageUrl }: FilterProps) => {
  return (
    <View style={[filterstyles.filterItem]}>
      <Image source={{ uri: imageUrl }} style={filterstyles.filterImage} />
      <Text style={[typography.title2]}>{name}</Text>
    </View>
  )
}

export default FilterDefault
