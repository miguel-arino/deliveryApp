import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import typography from '../../styles/typography'
import { Clock, Star } from '../../assets/Graphics'
import { RestaurantListItemProps } from './ReastaurantListItem'

const styles = StyleSheet.create({
  infoContainer: {
    marginTop: 10,
    marginBottom: 8,
    paddingHorizontal: 8,
    gap: 8,
  },
  infoColumn: {
    flexDirection: 'column',
    gap: 2,
  },
  columnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ratingContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  filterContainer: {
    flexDirection: 'row',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
})

const Details = ({ restaurant }: RestaurantListItemProps) => {
  return (
    <View style={styles.infoContainer}>
      <View style={styles.infoColumn}>
        <View style={styles.columnRow}>
          <Text style={typography.title1}>{restaurant.name}</Text>
          <View style={styles.ratingContainer}>
            <Star />
            <Text style={typography.footer2}>{restaurant.rating}</Text>
          </View>
        </View>
        <View style={styles.filterContainer}>
          <Text style={typography.subtitle1}>
            {restaurant.filters.map((filter) => filter.name).join(' • ')}
          </Text>
        </View>
        <View style={styles.timeContainer}>
          <Clock />
          <Text style={typography.footer1}>
            {restaurant.deliveryTimeMinutes} min
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Details
