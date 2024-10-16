import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Restaurant } from '../../types/restaurant'
import typography from '../../styles/typography'
import colors from '../../styles/colors'
import { Clock, Star } from '../../assets/Graphics'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  card: {
    flexDirection: 'column',
    backgroundColor: colors.card,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    aspectRatio: 1.5,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
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

interface RestaurantListItemProps {
  restaurant: Restaurant
}

const RestaurantListItem = ({ restaurant }: RestaurantListItemProps) => {
  const navigation = useNavigation()

  const handlePress = () => {
    navigation.navigate('RestaurantDetail', { restaurant })
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.card}>
          <Image source={{ uri: restaurant.imageUrl }} style={styles.image} />
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
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default RestaurantListItem
