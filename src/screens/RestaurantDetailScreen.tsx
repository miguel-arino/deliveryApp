import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, View, StatusBar } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { getOpenStatus } from '../services/restaurantService'
import { Restaurant } from '../types/restaurant'
import colors from '../styles/colors'
import ChevronButton from '../components/ChevronButton'
import RestaurantDetails from '../components/RestaurantDetails/RestaurantDetails'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
})

interface RestaurantDetailParams {
  restaurant: Restaurant
}

const RestaurantDetailScreen = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { restaurant } = route.params as RestaurantDetailParams

  const [isOpen, setIsOpen] = useState<boolean | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchOpenStatus = async () => {
      try {
        const status = await getOpenStatus(restaurant.id)
        setIsOpen(status.is_currently_open)
      } catch (error) {
        console.error('Failed to fetch open status:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchOpenStatus()
  }, [restaurant.id])

  const handleButtonPress = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <StatusBar animated showHideTransition={'slide'} hidden />
      <Image source={{ uri: restaurant.imageUrl }} style={styles.image} />
      <ChevronButton onPress={handleButtonPress} />
      <RestaurantDetails
        restaurant={restaurant}
        loading={loading}
        isOpen={isOpen}
      />
    </View>
  )
}

export default RestaurantDetailScreen
