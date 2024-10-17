import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MapPin } from '../../assets/Graphics'
import typography from '../../styles/typography'

const styles = StyleSheet.create({
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressDetails: { paddingLeft: 2, flexDirection: 'column' },
})

const Address = () => {
  return (
      <View style={styles.addressContainer}>
        <MapPin />
        <View style={styles.addressDetails}>
          <Text style={[typography.title2, {}]}>Delivery Location</Text>
          <Text style={[typography.subtitle1, {}]}>
            Grev Turegatan 1, 114 34 Stockholm
          </Text>
        </View>
      </View>
  )
}

export default Address
