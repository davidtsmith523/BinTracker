import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../common/Header'
import QuestionAnswer from './QuestionAnswer'
import { icons } from '../../constants'
import BackButton from '../common/BackButton'
import { questionData } from './questionData'

const HowToScreen = () => {
  return (
    <ScrollView>
      <BackButton/>
      <Header title='How To'/>
      <View style={styles.questionAnswerContainer}>
      <View style={styles.questionAnswerBox}>
        <Text style={styles.question}>What is BinTracker?</Text>
        <View style={styles.answerContainer}>
          <Text style={styles.answer}>BinTracker is a software that helps keep track of items in boxes/storage.</Text>
        </View>
        <View style={styles.answerContainer}>
          <Text style={styles.answer}>BinTracker makes it an easy way to find necessary items that could be anywhere in storage. </Text>
        </View>
        <View style={styles.answerContainer}>
          <Text style={styles.answer}>As easy as looking on your phone, or scanning the code on the box will help you find the item you are looking for</Text>
        </View>
      </View>
    </View>
      {questionData.map((data, index) => (
        <QuestionAnswer
          key={index}
          question={data.question}
          paragraph1={data.paragraph1}
          image1={data.image1}
          paragraph2={data.paragraph2}
          image2={data.image2}
          paragraph3={data.paragraph3}
          image3={data.image3}
          />
      ))}
    </ScrollView>
  )
}

export default HowToScreen

const styles = StyleSheet.create({
  questionAnswerContainer: {
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  questionAnswerBox: {
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'orange'
  },
  question: {
    paddingLeft: 10,
    paddingBottom: 20,
    fontSize: 22,
    fontWeight: '900',
    color: 'orange'
  },
  answerContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  answer: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    //maxWidth: 250
  },
});