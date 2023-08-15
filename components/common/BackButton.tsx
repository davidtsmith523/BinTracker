import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { icons } from '../../constants';
import { useRouter } from 'expo-router';

const BackButton = () => {
  const router = useRouter();
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => router.back()} style={styles.buttonBox}>
        <Image source={icons.arrow} style={styles.buttonImage}/>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BackButton

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    paddingVertical: 2,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'orange',
    backgroundColor: 'white',
  },
  buttonText: {
    padding: 5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'orange',
  },
  buttonImage: {
  }
});