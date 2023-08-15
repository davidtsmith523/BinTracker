import { View, Text } from 'react-native'
import React from 'react'
import ScanScreen from '../components/scan/ScanScreen'
import AddNewItemToBinScreen from '../components/addNewItemToBin/AddNewItemToBinScreen'
import LookAtExistingItemInBinScreen from './LookAtExistingItemInBinScreen'

const scan = () => {
  return (
    <View>
      <LookAtExistingItemInBinScreen/>
      {/* <ScanScreen/> */}
    </View>
  )
}

export default scan