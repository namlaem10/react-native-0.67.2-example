import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import AppConfig from './App/Config/AppConfig'
import RNBootSplash from 'react-native-bootsplash'

const App = () => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    }

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true })
      console.log('Bootsplash has been hidden successfully')
    })
  }, [])

  return (
    <View>
      <Text>App</Text>
      <Text>{AppConfig.APP_NAME}</Text>
      <Text>{AppConfig.ENVIRONMENT}</Text>
    </View>
  )
}

export default App
