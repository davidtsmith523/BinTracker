import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import React, { useEffect, useState } from 'react'
import BackButton from '../common/BackButton'
import Header from '../common/Header'
import { useRouter } from 'expo-router';
import { Camera } from 'expo-camera';


const AddNewItemToBinScreen = () => {
  const router = useRouter();

  const [itemNameText, setItemNameText] = useState('');
  const [descriptionText, setDescriptionText] = useState('');

  const [hasCameraPermissions, setHasCameraPermissions] = useState(false);
  const [itemPhoto, setItemPhoto] = useState(null);

  useEffect(() => {
    (async() => {
      const {status} = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermissions(status === 'granted');
    })();
  }, []);


  const handleItemNameChange = (text) => {
    setItemNameText(text);
  }

  const handleDispcriptionChange = (text) => {
    setDescriptionText(text)
  }

  const handleSubmit = () => {
    if (itemPhoto === null) {
      alert('Please take a photo of the item');
    } else if (itemNameText === '') {
      alert('Please input an item name');
    } else {
      router.back()
    }
  }

  const handlePictureTaken = () => {

  }

  if (!hasCameraPermissions) {
    return(
      <View>
      </View>
    );
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <BackButton/>
        <Header title='Add New Item To Bin'/>
        <Text style={styles.text}>Take Picture of Item</Text>
        <View style={styles.cameraContainer}>
          <Camera style={styles.cameraBox}/>
          <TouchableOpacity 
              style={styles.cameraButton}
              onPress={handlePictureTaken}
            >
              <Text style={styles.cameraText}>Take Picture</Text>
            </TouchableOpacity>
        </View>
        <KeyboardAvoidingView behavior="padding" style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Item Name: </Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter Item Name Here"
            value={itemNameText}
            onChangeText={handleItemNameChange}
          />
        </KeyboardAvoidingView>
        <KeyboardAvoidingView behavior="padding" style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Description <Text style={styles.optionalText}>(Optional):</Text></Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter Description Here"
            value={descriptionText}
            onChangeText={handleDispcriptionChange}
          />
        </KeyboardAvoidingView>
        <View style={styles.submitButtonContainer}>
          <TouchableOpacity 
            style={styles.submitButton}
            onPress={handleSubmit}
            >
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default AddNewItemToBinScreen

const styles = StyleSheet.create({
  text: {
    padding: 5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'orange',
  },
  cameraContainer: {
    paddingHorizontal: 30,
    paddingVertical: 5,
  },
  cameraBox: {
    //flex: 1,
    paddingVertical: 125,
    borderWidth: 5,
    borderRadius: 10,
    borderColor: 'orange',
    backgroundColor: 'white',
  },
  cameraButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginHorizontal: 75,
    paddingVertical: 10,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: 'orange'
  },
  cameraText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white'
  },
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'orange'
  },
  optionalText: {
    fontWeight: 'normal'
  },
  inputField: {
    fontSize: 16,
    color: 'orange',
    borderBottomWidth: 1,
    borderColor: 'orange',
  },
  submitButtonContainer: {
    paddingTop: 30,
  },
  submitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: 'orange'
  },
  submitText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  }
});