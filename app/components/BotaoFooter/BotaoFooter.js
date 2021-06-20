import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";


const fetchFont = () => {
  return Font.loadAsync({
    Ubuntu: require("../../fonts/Ubuntu-Light.ttf"),
  });
};

const BotaoFooter = (props) => {
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
        <View>
          <Button titleStyle={styles.tituloBotao} buttonStyle={styles.bt}  title= {props.title} onPress={props.onPress} />
        </View>
    )
}

const styles = StyleSheet.create({
    bt: {
        backgroundColor: "#68378D",
        borderRadius: 5,
        padding:6
      },
      tituloBotao: {
        fontFamily: "Ubuntu",
        fontWeight: "bold"
      },

})


export default BotaoFooter;