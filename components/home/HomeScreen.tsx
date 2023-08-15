import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import LoginButton from './LoginButton'
import Header from '../common/Header'
import Button from './Button';
import Footer from '../common/Footer'
import { icons, images } from '../../constants';
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={images.moreCardBoardBoxesIphone} resizeMode='cover' style={styles.backgroundImage}>
        <LoginButton/>
        <Header title='BinTracker'/>
        <View style={styles.buttonRow}>
            <Button 
              icon={icons.scan}
              text='Scan'
              route='/scan'
            />
          <Button
            icon={icons.inventory}
            text='Inventory'
            route='/inventory'
          />
        </View>
        <View style={styles.buttonRow}>
          <Button
            icon={icons.qrCode}
            text='Create QR'
            route='/createQR'
          />
          <Button
            icon={icons.howTo}
            text='How To'
            route='/howTo'
          />
        </View>
      </ImageBackground>
      {/* <Footer/> */}
    </View>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
  },
  buttonRow: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 10,
    justifyContent:'center'
  },
  footer: {
    bottom: 0
  }
});