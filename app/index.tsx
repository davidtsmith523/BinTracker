import { View, StyleSheet } from 'react-native'
import React from 'react'
import HomeScreen from '../components/home/HomeScreen';

const Home = () => {
  return (
    <View style= {styles.container}>
      <HomeScreen/>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});