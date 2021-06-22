import React from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { StyleSheet, Text, View, TextInput } from "react-native";
import BotaoFooter from '../../components/BotaoFooter/BotaoFooter';
import HeaderBoasVindas from "../../components/HeaderBoasVindas/HeaderBoasVindas";

const fetchFont = () => {
  return Font.loadAsync({
    Ubuntu: require("../../fonts/Ubuntu-Light.ttf"),
  });
};

const TrocaDeSenha = () => {
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
      <View><HeaderBoasVindas title="Troca de Senha" /></View>
     
      <View style={styles.container}>
     
      <Text style={styles.tituloInput}>Senha atual <Text style={{ color: "red" }}>*</Text></Text>
      <TextInput placeholder="Senha atual" style={styles.input} />
      
      <Text style={styles.tituloInput}>Nova senha <Text style={{ color: "red" }}>*</Text></Text>
      <TextInput placeholder="Nova senha" style={styles.input} />

      <Text style={styles.tituloInput}>Confirmação da nova senha <Text style={{ color: "red" }}>*</Text></Text>
      <TextInput placeholder="Confirmação da nova senha" style={styles.input} />

      <View style={{ margin: 3, paddingTop: 160 }}>
      <BotaoFooter title="Atualizar"/>
      </View>   

      </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
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

export default TrocaDeSenha;