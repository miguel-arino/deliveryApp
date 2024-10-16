import React from 'react'
import { FlatList, ListRenderItem, StyleSheet } from 'react-native'
import RestaurantListItem from './ReastaurantListItem'
import { Restaurant } from '../../types/restaurant'
import colors from '../../styles/colors'

const styles = StyleSheet.create({
  flatList: {
    backgroundColor: colors.background,
  },
  container: {
    paddingBottom: 16,
  },
})

interface RestaurantListProps {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: RestaurantListProps) => {
  const renderItem: ListRenderItem<Restaurant> = ({ item }) => (
    <RestaurantListItem restaurant={item} />
  )

  return (
    <FlatList
      data={restaurants}
      style={styles.flatList}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  )
}

export default RestaurantList
