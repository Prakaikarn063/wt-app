import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import Forecast from "./Forecast";

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast: {
        main: "main",
        description: "description",
        temp: 0
      }
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require("../bg.png")} style={styles.backdrop}>
          <View style={styles.app}>
            <Text style={styles.font}>Zip code is {this.props.zipCode}.</Text>
            <Forecast {...this.state.forecast} />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { paddingTop: 25 },
  backdrop: { width: "100%", height: "100%" },
  app: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.8)'
  },
  font: {
    color: 'white',
    paddingTop: 25,
    fontSize: 18
  }
});
