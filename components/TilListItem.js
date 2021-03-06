import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

const TilListItem = props => (
  <FlatList
    data={props.til}
    renderItem={({ item }) => {
      return (
        <TouchableWithoutFeedback
          onPress={() =>
            props.navigate('PostTilScreen', {
              id: item.id,
              tilContentText: item.tilContentText
            })
          }
        >
          <View style={S.list}>
            <Text style={S.contentText} numberOfLines={5}>
              {item.tilContentText}
            </Text>
            <Text style={S.postTimeText}>{item.postTimeText}</Text>
          </View>
        </TouchableWithoutFeedback>
      )
    }}
  />
)

const S = StyleSheet.create({
  list: {
    margin: 5,
    backgroundColor: 'white',
    minHeight: 60,
    justifyContent: 'space-around',
    paddingHorizontal: 25,
    paddingVertical: 7,
    marginHorizontal: 20,
    marginVertical: 5,
    elevation: 1
  },
  contentText: {
    fontSize: 20,
    lineHeight: 27,
    letterSpacing: 3,
    fontWeight: 'bold',
    fontFamily: 'mplus'
  },
  postTimeText: {
    // material designでは、opacity 0.6は、ヘルパーテキスト
    color: 'rgba(0, 0, 0, 0.6)',
    letterSpacing: wp('0.4%'),
    fontSize: wp('3.5%'),
    paddingTop: hp('1%')
  }
})

export default TilListItem
