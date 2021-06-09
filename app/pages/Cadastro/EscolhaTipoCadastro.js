import React from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Card } from "react-native-elements";
import { StyleSheet, Text, View , Image} from "react-native";
import HeaderPrincipal from "../../components/HeaderPrincipal/HeaderPrincipal";
import iconMusico from '../../images/icon/iconMusico.png';
import iconNegocio from '../../images/icon/iconNegocio.png';



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

        <Card>
          <Card.Title>CARD WITH DIVIDER</Card.Title>
          <Card.Divider />   
        
              <View style={styles.user}>
                <Image  style={styles.image}  resizeMode="cover"  source={iconMusico} />
                <Text style={styles.name}>Músico</Text>
              </View>
            
        </Card>
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
});

export default EscolhaTipoCadastro;
