import React, { useState } from "react";
import { View ,Text, StyleSheet, Image } from "react-native";
import alisson from '../../images/image-group/alisson.jpg';
import arthur from '../../images/image-group/arthur.jpg';
import joao from '../../images/image-group/joao.jpg';
import nicolly from '../../images/image-group/nicolly.jpg';
import marcilio from '../../images/image-group/marcilio.jpg';
import edmilson from '../../images/image-group/edmilson.jpeg';

const QuemSomos = () => {
  const [titleText] = useState("Quem Somos");
  const bodyText = useState("Somos um grupo de estudantes da Faculdade SENAC e acreditamos no potencial facilitador que a tecnologia proporciona nas relações humanas. Com esse pensamento, desenvolvemos este aplicativo com objetivo de ampliar a cultura musical favorecendo o empreendedorismo local.");
  
  return (
      <View style={styles.container}>
          <Text style={styles.baseText}>
            <Text style={styles.titleText}>
              {titleText}
              {"\n"}
              {"\n"}
            </Text>
          <Text numberOfLines={7}>{bodyText}</Text>
        </Text>

          <View style={styles.containerImages}>
            <View style={styles.grupoImagens1}>
          
              <Image style={styles.images} source={alisson}/>
              <Image style={styles.images} source={arthur} />
              <Image style={styles.images}source={nicolly} />
            </View>

            <View style={styles.grupoImagens2}>

              <Image style={styles.images}source={joao} />
              <Image style={styles.images}source={marcilio} />
              <Image style={styles.images}source={edmilson} />          
            </View>
          </View>

      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 50,
    position: "absolute"
  },
  baseText: {
    textAlign: "justify",
    fontSize: 17,
    padding: 20
  },
  titleText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#710B91"
  },
  containerImages:{ 
   alignItems: 'center',
   width: 100

  },
  grupoImagens1:{
    right: 100
  },
  grupoImagens2:{
    marginTop: -450,
    left: 100

  },
  images: {
    width: 110,
    height: 110,
    borderRadius: 60,
    marginTop: 40
  },
});

export default QuemSomos;