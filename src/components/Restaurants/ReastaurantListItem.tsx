import React from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Restaurant } from '../../types/restaurant'
import colors from '../../styles/colors'
import Details from './Details'

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
})

export interface RestaurantListItemProps {
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
          <Details restaurant={restaurant} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default RestaurantListItem
