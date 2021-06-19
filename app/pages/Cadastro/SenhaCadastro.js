import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import BotoesFooter from "../../components/BotoesFooter/BotoesFooter";

const fetchFont = () => {
  return Font.loadAsync({
    Ubuntu: require("../../fonts/Ubuntu-Light.ttf"),
  });
};

const SenhaCadastro = ({navigation}) => {
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
    <>
      <View style={{ margin: 8 }}>
        <Text style={styles.subtitulo}>
          Para finalizar, informe uma senha e confirme-a.
        </Text>

        <View style={styles.container}>
          <Text style={styles.tituloInput}>
            Senha <span style={{ color: "red" }}>*</span>
          </Text>
          <TextInput placeholder="Senha" style={styles.input} type="password" />
          <Text style={styles.tituloInput}>
            Confirmação de senha <span style={{ color: "red" }}>*</span>
          </Text>
          <TextInput placeholder="Confirme sua senha" style={styles.input} />
        </View>
      </View>
      <View style={{ paddingTop: 200 }}>
        <BotoesFooter voltar={() => {navigation.goBack();}} title="Finalizar" onPress={()=>{navigation.navigate('Home')}} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
  },
  subtitulo: {
    fontSize: 18,
    padding: 10,
    paddingTop: 60,
    fontFamily: "Ubuntu",
  },
  tituloInput: {
    margin: 5,
    fontSize: 14,
    fontFamily: "Ubuntu",
    color: "#68378D",
  },
  input: {
    backgroundColor: "#D9D9D9",
    borderRadius: 5,
    fontSize: 14,
    padding: 10,
    marginTop: 5,
    margin: 7,
    fontFamily: "Ubuntu",
  },
});

export default SenhaCadastro;
