import { View, StyleSheet, Animated, useWindowDimensions } from 'react-native'
import React, { useRef } from 'react'

const CURSOR_SIDE_SIZE = 50
const CURSOR_HALF_SIDE_SIZE = CURSOR_SIDE_SIZE / 2

const App = () => {
  const dimensions = useWindowDimensions()
  const touch = useRef(
    new Animated.ValueXY({ x: dimensions.width / 2, y: dimensions.height / 2 })
  ).current

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.ball,
          {
            left: touch.x,
            top: touch.y
          }
        ]}
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderMove={(event) => {
          console.log(event.nativeEvent)
          touch.setValue({
            x: event.nativeEvent.pageX,
            y: event.nativeEvent.pageY
          })
        }}
        onResponderRelease={() => {
          Animated.spring(touch, {
            toValue: {
              x: dimensions.width / 2 - CURSOR_HALF_SIDE_SIZE,
              y: dimensions.height / 2 - CURSOR_HALF_SIDE_SIZE
            },
            // left/top are not supported
            useNativeDriver: false
          }).start()
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  ball: {
    position: 'absolute',
    height: CURSOR_SIDE_SIZE,
    width: CURSOR_SIDE_SIZE,
    borderRadius: CURSOR_HALF_SIDE_SIZE,
    backgroundColor: 'orange'
  }
})

export default App
