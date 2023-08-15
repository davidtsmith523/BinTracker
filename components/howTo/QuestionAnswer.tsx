import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { icons } from '../../constants';

const QuestionAnswer = ({question, paragraph1, image1, paragraph2, image2, paragraph3, image3}) => {
  return (
    <View style={styles.questionAnswerContainer}>
      <View style={styles.questionAnswerBox}>
        <Text style={styles.question}>{question}</Text>
        <View style={styles.answerContainer}>
          <Text style={styles.answer}>{paragraph1}</Text>
          <Image style={styles.image} source={image1}/>
        </View>
        <View style={styles.answerContainer}>
          <Text style={styles.answer}>{paragraph2}</Text>
          <Image style={styles.image} source={image2}/>
        </View>
        <View style={styles.answerContainer}>
          <Text style={styles.answer}>{paragraph3}</Text>
          <Image style={styles.image} source={image3}/>
        </View>
      </View>
    </View>
  )
}

export default QuestionAnswer


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
    maxWidth: 250
  },
  image: {
    width: 75,
    height: 75,
  }
});