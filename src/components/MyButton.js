import React from "react";
import { View } from "react-native";
import { Button, TitleButton } from '../styled'

export default function MyButton(props) {
  return (
    <View>
      <Button onPress={props.onPress}>
        <TitleButton>{props.title}</TitleButton>
      </Button>
    </View>
  )
}
