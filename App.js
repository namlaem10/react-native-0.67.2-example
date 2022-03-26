import { View, Text } from 'react-native'
import React from 'react'
import AppConfig from './App/Config/AppConfig'

const App = () => {
  return (
    <View>
      <Text>App</Text>
      <Text>{AppConfig.APP_NAME}</Text>
      <Text>{AppConfig.ENVIRONMENT}</Text>
    </View>
  )
}

export default App
