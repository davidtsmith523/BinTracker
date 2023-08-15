import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import BackButton from '../common/BackButton'
import Header from '../common/Header'
import Message from '../common/Message'
import QRCode from 'react-native-qrcode-svg'

const CreateQRCodeScreen = () => {
  const [message, setMessage] = useState(null);
  const [isError, setIsError] = useState(null);
  const randomValue = Math.random().toString();
  const [QRCodeValue, setQRCodeValue] = useState(randomValue);
  
  const handlePrintQR = () => {
    console.log(QRCodeValue)
  } 
  return (
    <View>
      <BackButton/>
      <Header title='Print QR Code'/>
      <Message message={message} isError={isError}/>
      <View style={styles.QRContainer}>
        <View style={styles.QRBox}>
          <QRCode value={randomValue} size={320}/>
        </View>
      </View>
      <TouchableOpacity 
        style={styles.printButton}
        onPress={handlePrintQR}
        >
        <Text style={styles.printText}>Print</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CreateQRCodeScreen

const styles = StyleSheet.create({
  QRContainer: {
    paddingHorizontal: 30,
    paddingVertical: 5,
  },
  QRBox: {
    // paddingVertical: 150,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderRadius: 10,
    borderColor: 'orange',
    backgroundColor: 'white',
  },
  printButton: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: 'orange'
  },
  printText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'

  }
})