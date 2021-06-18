import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import HeaderPrincipal from "../../components/HeaderPrincipal/HeaderPrincipal";
import { Button } from "react-native-elements";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const fetchFont = () => {
  return Font.loadAsync({
    Ubuntu: require("../../fonts/Ubuntu-Light.ttf"),
  });
};

const Login = (route) => {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
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
    <View style={{ margin: 8 }}>
      <HeaderPrincipal />
      <View style={{paddingTop:20}}>
        <Text style={styles.tituloInput}>Informe o seu e-mail:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(texto) => setEmail(texto)}
          placeholder="E-mail"
        />

        <Text style={styles.tituloInput}>Digite sua senha:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(texto) => setSenha(texto)}
          placeholder="Senha"
          secureTextEntry={true}
        />
      </View>
      <View style={{paddingTop:30}}>
        <Button buttonStyle={styles.btEntrar} title="Entrar" />
        <Button
          buttonStyle={styles.btRegistrar}
          titleStyle={styles.tituloBotao}
          title="Criar conta"
        />
        <Text style={styles.esqueciMinhaSenha}>Esqueci minha senha</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    backgroundColor: "#D9D9D9",
    borderRadius: 5,
    fontSize: 14,
    padding: 12,
    marginTop: 5,
    margin: 7,
    fontFamily: "Ubuntu",
  },
  tituloInput: {
    margin: 5,
    fontSize: 14,
    fontFamily: "Ubuntu",
    color: "#68378D",
  },
  btEntrar: {
    backgroundColor: "#68378D",
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  btRegistrar: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#68378D",
    borderRadius: 5,
    padding: 10,
    margin: 5,
    fontFamily: "Ubuntu",
  },
  tituloBotao: {
    color: "#68378D",
    fontFamily: "Ubuntu",
    fontWeight: "bold"
  },
  esqueciMinhaSenha:{
    color: "#68378D",
    fontFamily: "Ubuntu",
    textAlign: 'center',
    paddingTop:20,
    fontSize: 14,
    fontWeight: "bold"
  }
});

export default Login;
