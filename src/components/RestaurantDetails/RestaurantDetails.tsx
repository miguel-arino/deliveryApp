import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../styles/colors'
import typography from '../../styles/typography'
import { Restaurant } from '../../types/restaurant'
import FilterRow from './FilterRow'

const styles = StyleSheet.create({
  absoluteContainer: {
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    borderRadius: 12,
    backgroundColor: colors.card,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    paddingVertical: 24,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    gap: 16,
  },
})

interface RestaurantDetailParams {
  restaurant: Restaurant
  loading: boolean
  isOpen: boolean | null
}

const RestaurantDetails = ({
  restaurant,
  loading,
  isOpen,
}: RestaurantDetailParams) => {
  const isOpenColor = isOpen ? colors.positive : colors.negative
  const isOpenText = isOpen ? 'Open' : 'Closed'

  return (
    <View style={styles.absoluteContainer}>
      <Text numberOfLines={2} style={[typography.headline1]}>
        {restaurant.name}
      </Text>
      <FilterRow restaurant={restaurant} />
      <Text
        style={[
          typography.title1,
          {
            color: loading ? 'black' : isOpenColor,
          },
        ]}>
        {loading ? 'Loading status...' : isOpenText}
      </Text>
    </View>
  )
}

export default RestaurantDetails
