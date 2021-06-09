import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { CheckBox } from "react-native-elements";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import BotoesFooter from "../../../components/BotoesFooter/BotoesFooter";

const fetchFont = () => {
  return Font.loadAsync({
    Ubuntu: require("../../../fonts/Ubuntu-Light.ttf"),
  });
};
 
const DadosArtisticosCadastro = () => {
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
          {" "}
          Para essa etapa, vamos falar sobre seus dados artísticos.
        </Text>

        <View style={{ paddingTop: 15 }}>
          <Text style={styles.tituloInput}>
            Nome Artístico <span style={{ color: "red" }}>*</span>
          </Text>
          <TextInput placeholder="Nome Artístico" style={styles.input} />

          <Text style={styles.tituloInput}>
            Gêneros Musicais <span style={{ color: "red" }}>*</span>
          </Text>
          <TextInput placeholder="Gêneros Musicais" style={styles.input} />

          <Text style={styles.tituloInput}>
            Link do Instagram <span style={{ color: "red" }}>*</span>
          </Text>
          <TextInput placeholder="Link do Instagram" style={styles.input} />

          <Text style={styles.tituloInput}>
            Link do Canal do Youtube <span style={{ color: "red" }}>*</span>
          </Text>
          <TextInput
            placeholder="Link do Canal do Youtube"
            style={styles.input}
          />

          <Text style={styles.tituloInput}>
            Escolha uma categoria <span style={{ color: "red" }}>*</span>
          </Text>

          <CheckBox
            fontFamily="Ubuntu"
            containerStyle={{ backgroundColor: "transparent", border: "none" }}
            title="Solo"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />

          <CheckBox
            fontFamily="Ubuntu"
            containerStyle={{ backgroundColor: "transparent", border: "none" }}
            title="Dueto"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />

          <CheckBox
            fontFamily="Ubuntu"
            containerStyle={{ backgroundColor: "transparent", border: "none" }}
            title="Banda"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />
        </View>
      </View>

      <View>
        <BotoesFooter title="Avançar" pagRedirecionar="SenhaCadastro" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  tituloInput: {
    margin: 5,
    fontSize: 14,
    color: "#68378D",
    fontFamily: "Ubuntu",
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
  subtitulo: {
    fontSize: 18,
    padding: 10,
    paddingTop: 20,
    fontFamily: "Ubuntu",
  },
});

export default DadosArtisticosCadastro;
