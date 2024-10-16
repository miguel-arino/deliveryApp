import React from 'react'
import { StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import colors from '../styles/colors'

const styles = StyleSheet.create({
  gradient: {
    height: 9,
    width: '100%',
  },
})

const GradientSeparator = () => (
  <View>
    <LinearGradient
      colors={[colors.headerbg, colors.background]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.gradient}
    />
  </View>
)

export default GradientSeparator
