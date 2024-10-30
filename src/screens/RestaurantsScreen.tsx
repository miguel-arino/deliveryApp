import React, { useState, useMemo } from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { getAllRestaurants } from '../services/restaurantService'
import RestaurantList from '../components/Restaurants/ReastaurantList'
import { getAllFilters } from '../services/filterService'
import FilterCarousel from '../components/Filters/FilterCarousel'
import { Restaurant } from '../types/restaurant'
import { mapResponseToRestaurant } from '../utils/restaurantMapper'
import { Filter } from '../types/filter'
import Header from '../components/Header/Header'
import colors from '../styles/colors'
import GradientSeparator from '../components/GradientSeparator'
import LoadingSpinner from '../components/LoadingSpinner'
import { useOnce } from '../utils/useOnce'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'flex-start',
  },
})

const RestaurantsScreen = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [filters, setFilters] = useState<Filter[]>([])
  const [selectedFilters, setSelectedFilters] = useState<Filter[]>([])
  const [loading, setLoading] = useState(true)

  useOnce(() => {
    const fetchRestaurants = async () => {
      try {
        const restaurantData = await getAllRestaurants()

        const filterData = await getAllFilters(restaurantData.restaurants)
        setFilters(filterData)

        const enrichedRestaurants: Restaurant[] =
          restaurantData.restaurants.map((restaurant) =>
            mapResponseToRestaurant(restaurant, filterData),
          )
        setRestaurants(enrichedRestaurants)
      } catch (error) {
        console.error('Failed to load restaurants:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRestaurants()
  })

  const handleFilterPress = (filter: Filter) => {
    setSelectedFilters((prevSelectedFilters) =>
      prevSelectedFilters.some((selected) => selected.id === filter.id)
        ? prevSelectedFilters.filter((selected) => selected.id !== filter.id)
        : [...prevSelectedFilters, filter],
    )
  }

  const filteredRestaurants = useMemo(() => {
    return selectedFilters.length > 0
      ? restaurants.filter((restaurant) =>
          selectedFilters.every((filter) =>
            restaurant.filters.some((_filter) => _filter.id === filter.id),
          ),
        )
      : restaurants
  }, [restaurants, selectedFilters])

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <View style={styles.container}>
      <StatusBar
        animated
        showHideTransition={'fade'}
        barStyle={'dark-content'}
      />
      <Header />
      <GradientSeparator />
      <FilterCarousel
        filters={filters}
        selectedFilters={selectedFilters}
        toggleFilter={handleFilterPress}
      />
      <RestaurantList restaurants={filteredRestaurants} />
    </View>
  )
}

export default RestaurantsScreen
