import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const BinTitle = ({title}) => {
  return (
    <View style={styles.binTitleBox}>
      <Text style={styles.text}>{title}</Text>

    </View>
  )
}

export default BinTitle

const styles = StyleSheet.create({
  binTitleBox: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    margin: 10,
    paddingVertical: 8,
    borderRadius: 5,
    borderColor: 'white',
    backgroundColor: 'orange'
  },
  text: {
    fontSize: 18,
    fontWeight: '800',
    color: 'white'
  }
});