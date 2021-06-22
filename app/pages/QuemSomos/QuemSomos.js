import React from "react";
import { View ,Text, StyleSheet, Image } from "react-native";
import alisson from '../../images/image-group/alisson.jpg';
import arthur from '../../images/image-group/arthur.jpg';
import joao from '../../images/image-group/joao.jpg';
import nicolly from '../../images/image-group/nicolly.jpg';
import marcilio from '../../images/image-group/marcilio.jpg';
import edmilson from '../../images/image-group/edmilson.jpeg';
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Icon } from 'react-native-elements';
import HeaderBoasVindas from "../../components/HeaderBoasVindas/HeaderBoasVindas";

const fetchFont = () => {
  return Font.loadAsync({
    Ubuntu: require("../../fonts/Ubuntu-Light.ttf"),
  });
};

const QuemSomos = ({navigation}) => {
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
        <View style={{flexDirection: "row"}}>
        <Icon reverse name='menu-outline' type='ionicon' color='#e6e6e6' onPress={() => navigation.openDrawer()}/>
        <HeaderBoasVindas title=" &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Sobre o app" />
        </View>
        
          <Text style={styles.baseText}> Somos um grupo de estudantes da Faculdade SENAC e acreditamos no potencial
                                         facilitador que a tecnologia proporciona nas relações humanas. Com esse pensamento,
                                          desenvolvemos este aplicativo com objetivo de ampliar a cultura musical favorecendo
                                          o empreendedorismo local. </Text>
           
           <View style={styles.grupoImagens}>
              <Image style={styles.images} source={alisson}/>
              <Image style={styles.images} source={arthur} />
              <Image style={styles.images}source={nicolly} />
            </View>

            <View style={styles.grupoImagens}>
              <Image style={styles.images}source={joao} />
              <Image style={styles.images}source={marcilio} />
              <Image style={styles.images}source={edmilson} />          
            </View>

            <Text style={styles.convite}> Deseja fazer parte desse lindo time? <Text style={{color: '#68378D'}}> Clique aqui</Text> </Text>

      </>
  );
}

const styles = StyleSheet.create({

  baseText: {
    textAlign: "justify",
    fontSize: 17,
    padding: 20,
    fontFamily: "Ubuntu",
    paddingTop:45
  },
  convite: {
    textAlign: "justify",
    fontSize: 16,
    padding: 10,
    fontFamily: "Ubuntu",
    paddingTop:65
  },
  grupoImagens:{
    flexDirection: "row",
   marginLeft: 10
  },
  images: {
    width: 110,
    height: 110,  
    borderRadius: 60,
    margin: 5,
    borderColor: '#68378D',
    borderWidth: 2,
  },
});

export default QuemSomos;