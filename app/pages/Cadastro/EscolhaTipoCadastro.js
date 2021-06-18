import React from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Card, CardItem } from "react-native-elements";
import { StyleSheet, Text, View, Image } from "react-native";
import HeaderPrincipal from "../../components/HeaderPrincipal/HeaderPrincipal";
import iconMusico from "../../images/icon/iconMusico.png";
import iconNegocio from "../../images/icon/iconNegocio.png";

const fetchFont = () => {
  return Font.loadAsync({
    Ubuntu: require("../../fonts/Ubuntu-Light.ttf"),
  });
};

const EscolhaTipoCadastro = () => {
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
      <HeaderPrincipal />
      <View>
        <Text style={styles.pergunta}>Como você deseja se cadastrar?</Text>
        <Text>{"\n\n"}</Text>
          <View style={styles.linhaPerfil}>
            <Image style={styles.image} source={iconMusico} />
            <Text style={styles.tipoPerfil} > &nbsp; &nbsp; &nbsp; Artista</Text>
          </View> 
          
          <View style={styles.linhaPerfil}>
            <Image style={styles.image} source={iconNegocio} />
            <Text style={styles.tipoPerfil} > &nbsp; &nbsp; &nbsp; Negócios</Text>
          </View> 
 
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  pergunta: {
    paddingTop: 25,
    color: "#68378D",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Ubuntu",
  },
  tipoCadastro: {
    fontSize: 18,
    textAlign: "right",
    fontFamily: "Ubuntu",
  },
  image: {
    width: 80,
    height: 80,
  },
  tipoPerfil: {
    marginTop: -10,
    color: "#68378D",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Ubuntu",
  },
  linhaPerfil: {
    flexDirection: "row",
    alignItems: "center",
    margin:20,
    padding:10,
    borderRadius: 9,
    borderColor: '#e6e6e6',
    borderWidth: 1,
  },
});

export default EscolhaTipoCadastro;
