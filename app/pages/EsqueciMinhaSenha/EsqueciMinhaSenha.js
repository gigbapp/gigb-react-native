import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import HeaderPrincipal from "../../components/HeaderPrincipal/HeaderPrincipal";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import BotoesFooter from "../../components/BotoesFooter/BotoesFooter";
import { verificarCampoPreenchidoObrigatorio, verificarEmailPreenchidoCorretamente } from "../../validacao/CamposObrigatorios";


const fetchFont = () => {
  return Font.loadAsync({
    Ubuntu: require("../../fonts/Ubuntu-Light.ttf"),
  });
};

const EsqueciMinhaSenha = ({navigation}) => {
  const [email, setEmail] = React.useState("");
  const [fontLoaded, setFontLoaded] = React.useState(false);

  const validarCampos =  () => {
    if(!verificarCampoPreenchidoObrigatorio(email)){
      alert('Preencha os campos corretamente.');
    }
    else if(!verificarEmailPreenchidoCorretamente(email)){
      alert('E-mail informado está incorreto.');
    }
    else {
      alert('Link de redefinição de senha enviado com sucesso!');
    }
  };

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
        <Text style={styles.titulo}>Esqueceu sua senha?</Text>
        <Text style={styles.subtitulo}> Nós resolvemos isso rapidinho, por favor, digite o e-mail cadastrado:</Text>
        <TextInput placeholder="E-mail" style={styles.input}  onChangeText={(texto) => setEmail(texto)} />
      </View>
      <View style={{ paddingTop: 210 }}>
        <BotoesFooter voltar={() => {navigation.goBack();}} title="Enviar" onPress={()=> validarCampos()} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  titulo: {
    paddingTop: 20,
    fontSize: 20,
    marginLeft:15,
    color: "#68378D",
    fontFamily: 'Ubuntu',

  },
  subtitulo: {
    fontSize: 17,
    padding: 5,
    fontFamily: 'Ubuntu',
    margin:10,
  },
  input: {
    backgroundColor: "#D9D9D9",
    borderRadius: 5,
    fontSize: 16,
    padding: 10,
    marginTop:30,
    margin: 7,
  },
});

export default EsqueciMinhaSenha;
