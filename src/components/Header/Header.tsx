import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MapPin, UmainLogo } from '../../assets/Graphics'
import typography from '../../styles/typography'
import colors from '../../styles/colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.headerbg,
    paddingTop: 20,
    // marginHorizontal: 15,
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  logoContainer: { paddingLeft: 16 },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressDetails: { paddingLeft: 2, flexDirection: 'column' },
})

const Header = () => {
  const insets = useSafeAreaInsets()
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.logoContainer}>
        <UmainLogo />
      </View>
      <View style={styles.addressContainer}>
        <MapPin />
        <View style={styles.addressDetails}>
          <Text style={[typography.title2, {}]}>Delivery Location</Text>
          <Text style={[typography.subtitle1, {}]}>
            Grev Turegatan 1, 114 34 Stockholm
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Header
