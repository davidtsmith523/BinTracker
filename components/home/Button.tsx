import { View, Text, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native'
import React from 'react'

const Button = ({icon, text}) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
          <Image source={icon} style={styles.buttonImage}></Image>
          <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    margin: 10,
  },
  button: {
    width: 160,  // Set a fixed width for the TouchableOpacity
    height: 200, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  buttonImage: {
    alignItems: 'center',
    width: 125,
    height: 125,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'orange',
  }
});