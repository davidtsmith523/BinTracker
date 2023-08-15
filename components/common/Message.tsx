import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Message = ({message, isError}) => {
  return (
    <View>
      <Text style={styles.message}>{message}</Text>
    </View>
  )
}

export default Message


const styles = StyleSheet.create({
  message: {
    padding: 5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'orange',
  }
});