import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { icons } from '../../constants';

const Item = () => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemBox}>
        <View style={styles.imageContainer}>
          <Image source={icons.addNew} style={styles.image}/>
        </View>
        <View style={styles.itemTextContainer}>
          <Text style={styles.nameText}>Name</Text>
          <Text style={styles.descriptionText}>Description</Text>
        </View>
        <TouchableOpacity>
          <Image source={icons.addNew} style={styles.deleteIcon}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Item

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  itemBox: {
    flexDirection: 'row',
    paddingVertical: 10,
    // alignItems: 'center',
    alignItems: 'flex-start',
    //paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: 'white'
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 75,
    height: 75,
  },
  itemTextContainer: {
    flex: 1,
    paddingLeft: 5

  },
  nameText: {
    paddingBottom: 20,
    fontSize: 18,
    color: 'orange'
  },
  descriptionText: {
    fontSize: 18,
    color: 'orange'
  },
  deleteIcon: {
    //marginLeft: 'auto',
    width: 50,
    height: 50,
  }
});