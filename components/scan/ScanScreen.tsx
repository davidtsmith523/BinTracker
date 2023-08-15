import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import BackButton from '../common/BackButton'
import Header from '../common/Header'
import ScanCode from './ScanCode'

const ScanScreen = () => {
  return (
    <View>
      <BackButton/>
      <Header title='Scan'/>
      <Text style={styles.text}>Place camera on QR/Bar Code</Text>
      <ScanCode/>
    </View>
  )
}

export default ScanScreen

const styles = StyleSheet.create({
  text: {
    padding: 5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'orange',
  }
});