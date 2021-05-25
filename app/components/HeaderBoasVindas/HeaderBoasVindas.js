import React from "react";
import { View, StyleSheet, Text } from "react-native";

const HeaderBoasVindas = (props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.boasVindas}>Boa noite, @nomeUsuário.</Text>
        <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50
  },
  boasVindas: {
    color: "#68378D",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "right"
  },
  title: {
    paddingTop: 12,
    padding: 15,
    color: "#3B3838",
    fontSize: 35,
    textAlign: "right"
  },
});

export default HeaderBoasVindas;

