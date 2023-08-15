import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import BackButton from '../components/common/BackButton'
import Header from '../components/common/Header'
import Item from '../components/common/Item'
import { StyleSheet } from 'react-native';

const LookAtExistingItemInBinScreen = () => {
  return (
    <View>
      <BackButton/>
      <Header title='Look At Existing Items For Bin'/>
      <ScrollView>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </ScrollView>
      

    </View>
  )
}

export default LookAtExistingItemInBinScreen
