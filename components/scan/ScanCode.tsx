import { View, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useRouter } from 'expo-router';

const ScanCode = () => {
  const router = useRouter();

  const [hasPermision, setHasPermission] = useState(false);
  const [scanData, setScanData] = useState();

  useEffect(() => {
    (async() => {
      const {status} = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = (data, type) => {
    setScanData(data);
    console.log(`Data: ${data}`);
    router.push('/AddNewLookAtExistingScreen')

  }

  if (!hasPermision) {
    return(
      <View>
      </View>
    );
  }
  return (
    <View style={styles.scanCodeContainer}>
      <View style={styles.scanCodeBox}>
        <BarCodeScanner
          style={StyleSheet.absoluteFillObject}
          onBarCodeScanned={scanData ? undefined : handleBarCodeScanned}
        />
        {/* <Text style={styles.scanCode}>Scan Code here</Text> */}
      </View>
    </View>
  )
}

export default ScanCode


const styles = StyleSheet.create({
  scanCodeContainer: {
    paddingHorizontal: 30,
    paddingVertical: 5,
  },
  scanCodeBox: {
    paddingVertical: 175,
    borderWidth: 5,
    borderRadius: 10,
    borderColor: 'orange',
    backgroundColor: 'white',
  },
  scanCode: {
    textAlign: 'center',
  }
});