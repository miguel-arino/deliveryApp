import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { UmainLogo } from '../../assets/Graphics'
import colors from '../../styles/colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Address from './Address'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.headerbg,
    paddingTop: 20,
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  logoContainer: { paddingLeft: 16 },
})

const Header = () => {
  const insets = useSafeAreaInsets()
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.logoContainer}>
        <UmainLogo />
      </View>
      <Address />
    </View>
  )
}

export default Header
