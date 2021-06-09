import React from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { View, StyleSheet, Text } from "react-native";

const fetchFont = () => {
  return Font.loadAsync({
    Ubuntu: require("../../fonts/Ubuntu-Light.ttf"),
  });
};

const HeaderBoasVindas = (props) => {
  const [fontLoaded, setFontLoaded] = React.useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        onError={() => console.log("ERRO")}
        startAsync={fetchFont}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }

  return (
    <View style={styles.container}>
        <Text style={styles.boasVindas}>Boa noite, @nomeUsuário</Text>
        <Text style={styles.title}>{props.title}</Text>

        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40
  },
  boasVindas: {
    color: "#68378D",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right",
    fontFamily:'Ubuntu'
  },
  title: {
    paddingTop: 10,
    padding: 0,
    paddingRight: 100,
    color: "#3B3838",
    fontSize: 25,
    textAlign: "right",
    fontFamily:'Ubuntu'
  },
});

export default HeaderBoasVindas;

