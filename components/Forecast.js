import React from "react";
import { View, Text } from "react-native";

export default class Forecast extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.main}</Text>
        <Text>{this.props.description}</Text>
        <Text>{this.props.temp}</Text>
        <Text>°C</Text>
      </View>
    );
  }
}
