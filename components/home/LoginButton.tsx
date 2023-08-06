import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const LoginButton = () => {
  return (
    <TouchableOpacity style={styles.loginContainer}>
      <View style={styles.loginBox}>
        <Image source={require('../../assets/icons/login-icon.png')} style={styles.loginIcon}/>
      </View>
    </TouchableOpacity>
  )
}

export default LoginButton

const styles = StyleSheet.create({
  loginContainer: {
    alignItems: 'flex-end',
    marginRight: 5,
    padding: 8,
  },
  loginBox: {
    padding: 8,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'orange',
    backgroundColor: 'white',
  },
  loginIcon: {
    width: 32,
    height: 32,
  }
});