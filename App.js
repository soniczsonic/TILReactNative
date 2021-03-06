import React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import * as Font from 'expo-font'

import AppNavigator from './navigation/AppNavigator'
import fireStoreConfig from './fireStore/fireStoreConfig'

export default class App extends React.Component {
  componentDidMount = () => {
    Font.loadAsync({
      mplus: require('./assets/fonts/mplus-1p-regular.ttf')
    })
  }

  render () {
    return (
      <SafeAreaView style={S.container} forceInset={{ bottom: 'never' }}>
        <AppNavigator />
      </SafeAreaView>
    )
  }
}

const S = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03A9F4',
    paddingTop: StatusBar.currentHeight
  }
})
