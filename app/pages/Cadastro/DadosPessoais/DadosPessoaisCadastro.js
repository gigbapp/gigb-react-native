import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import BotaoFooter from "../../../components/BotaoFooter/BotaoFooter";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Picker } from "@react-native-picker/picker";

const fetchFont = () => {
  return Font.loadAsync({
    Ubuntu: require("../../../fonts/Ubuntu-Light.ttf"),
  });
};

const DadosPessoaisCadastro = (route) => {
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
        <View>
          <Text style={styles.titulo}>Bem Vindo ao Gig B,</Text>
          <Text style={styles.subtitulo}>
            {" "}
            Por favor, informe seus dados pessoais para completar essa etapa.{" "}
          </Text>
        </View>
        <View style={styles.containerInputs}>
          <Text style={styles.tituloInput}>
            CPF/CNPJ <span style={{ color: "red" }}>*</span>
          </Text>
          <TextInput placeholder="CPF/CNPJ" style={styles.input} />
          <Text style={styles.tituloInput}>
            Nome completo <span style={{ color: "red" }}>*</span>
          </Text>
          <TextInput placeholder="Nome completo " style={styles.input} />
          <Text style={styles.tituloInput}>
            {" "}
            E-mail <span style={{ color: "red" }}>*</span>
          </Text>
          <TextInput placeholder="E-mail" style={styles.input} />
          <Text style={styles.tituloInput}>
            {" "}
            Telefone <span style={{ color: "red" }}>*</span>
          </Text>
          <TextInput placeholder="Telefone" style={styles.input} />
          <Text style={styles.tituloInput}>
            {" "}
            Sexo <span style={{ color: "red" }}>*</span>
          </Text>
          <Picker style={styles.pickerSexo}>
            <Picker.Item label="Feminino" value="F" />
            <Picker.Item label="Masculino" value="M" />
            <Picker.Item label="Prefiro não informar" value="PNI" />
          </Picker>
        </View>
        <View style={{ margin: 3, paddingTop: 20 }}>
          <BotaoFooter title="Avançar" />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerInputs: {
    paddingTop: 30,
  },
  titulo: {
    paddingTop: 50,
    padding: 10,
    fontSize: 24,
    color: "#68378D",
    fontFamily: "Ubuntu",
  },
  subtitulo: {
    fontSize: 18,
    padding: 10,
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
  pickerSexo: {
    fontFamily: "Ubuntu",
    fontSize: 14,
    borderRadius: 5,
    padding: 10,
    margin: 6,
    backgroundColor: "#D9D9D9",
    border: "none",
  },
});

export default DadosPessoaisCadastro;
