import { View, Text, StyleSheet, Platform } from 'react-native'
import React from 'react'

const Header = ({title}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerBox}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 50,
    paddingVertical: 5,
  },
  headerBox: {
    paddingVertical: 5,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'orange',
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'orange',
  }
});