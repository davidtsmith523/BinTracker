import { View, Text } from 'react-native'
import React from 'react'
import HowToScreen from '../components/howTo/HowToScreen'
import { StyleSheet } from 'react-native';

const howTo = () => {
  return (
    <View style={styles.container}>
      <HowToScreen/>
    </View>
  )
}

export default howTo

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
  }
});