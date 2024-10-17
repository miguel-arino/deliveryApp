import { TouchableOpacity, StyleSheet, View } from 'react-native'
import React from 'react'
import { Chevron } from '../assets/Graphics'

const styles = StyleSheet.create({
  absolutContainer: {
    position: 'absolute',
    top: 40,
    left: 39,
  },

  // WARN:  (ADVICE) View #805 of type RCTView has a shadow set but cannot calculate
  // shadow efficiently. Consider setting a solid background color to fix this, or
  // apply the shadow to a more specific component.

  // shadowContainer: {
  //   backgroundColor: '#00000000',
  //   shadowColor: '#000',
  //   shadowOffset: { width: 0, height: 4 },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 4,
  // },
})

interface ButtonProps {
  onPress: () => void
}

const ChevronButton = ({ onPress }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.absolutContainer} onPress={onPress}>
      <Chevron />

      {/* First approach */}
      {/* <View style={styles.shadowContainer}> */}
      {/* <Chevron /> */}
      {/* </View> */}
    </TouchableOpacity>
  )
}

export default ChevronButton
