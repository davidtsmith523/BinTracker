import { View, Text, ScrollView, StyleSheet, Image} from 'react-native'
import React from 'react'
import BackButton from '../common/BackButton'
import Header from '../common/Header'
import Item from '../common/Item'
import BinTitle from './BinTitle'
import { images } from '../../constants'

const InventoryScreen = () => {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <View style={styles.backgroundImageContainer}>
        {/* Place your image here */}
        <Image source={images.cardboardBox} style={styles.backgroundImage} />
      </View>
    <ScrollView style={styles.scrollView}>
      <BackButton/>
      <Header title='Look At Existing Items For Bin'/>
      <BinTitle title='Bin 1'/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <BinTitle title='Bin 2'/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </ScrollView>
      </View>
  )
}

export default InventoryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative', // This will allow absolute positioning inside
  },
  backgroundImageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1, // Place behind other components
  },
  backgroundImage: {
    height: 200,
    width: 200
  },
  scrollView: {
    paddingBottom: 100
  }
});