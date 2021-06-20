import React from "react";
import { StyleSheet,  View } from "react-native";
import { Button } from "react-native-elements";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const fetchFont = () => {
  return Font.loadAsync({
    Ubuntu: require("../../fonts/Ubuntu-Light.ttf"),
  });
};

const BotoesFooter = (props) => {
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
    <View style={styles.footer}>
      <View>
        <Button titleStyle={styles.tituloBotao} buttonStyle={styles.btVoltar}  title="Voltar"  onPress={props.voltar}/>
      </View>
      <View>
        <Button  titleStyle={styles.tituloBotao} buttonStyle={styles.btRight} title={props.title} onPress={props.onPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    btRight: {
        backgroundColor: "#68378D",
        borderRadius: 5,
        width:170,
        padding:6
      },
      btVoltar: {
        backgroundColor: "#68378D",
        borderRadius: 5,
        width:170,
        padding:6
      },
      footer: {
        margin:8,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
      },
      tituloBotao: {
        fontFamily: "Ubuntu",
        fontWeight: "bold"
      },
});

export default BotoesFooter;