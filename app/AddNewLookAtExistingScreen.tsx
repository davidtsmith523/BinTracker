import { View, Text, TouchableOpacity, StyleSheet, Image, Platform } from 'react-native'
import React, { useState } from 'react'
import BackButton from '../components/common/BackButton'
import Message from '../components/common/Message'
import { icons } from '../constants'
import { Link } from 'expo-router';

const AddNewLookAtExistingScreen = () => {
  const [isError, setIsError] = useState(false);

  return (
    <View>
      <BackButton/>
      <Message message='Test Message' isError={isError}/>
      <View style={styles.buttonsContainer}>
        <Link href={'/'} asChild>
          <TouchableOpacity style={styles.button}>
            <Image source={icons.addNew} style={styles.buttonImage}/>
            <Text style={styles.buttonText}>Add New Item To Bin</Text>
          </TouchableOpacity>
        </Link>
        <Link href={'/'} asChild>
          <TouchableOpacity style={styles.button}>
            <Image source={icons.lookAt} style={styles.buttonImage}/>
            <Text style={styles.buttonText}>Look At Existing Items In Bin</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  )
}

export default AddNewLookAtExistingScreen

const styles = StyleSheet.create({
  buttonsContainer: {
    justifyContent: 'center',
    alignItems: 'center'

  },
  button: {
    width: 300,
    margin: 20,
    height: 220, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 0,
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

  },
  buttonText: {
    padding: 5,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'orange',
  }
});