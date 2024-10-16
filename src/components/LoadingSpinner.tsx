import { View, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const LoadingSpinner = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size='large' color='#00000090' />
    </View>
  )
}

export default LoadingSpinner
