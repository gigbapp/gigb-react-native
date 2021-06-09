import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Button } from 'react-native-elements';
import HeaderPrincipal from "../../components/HeaderPrincipal/HeaderPrincipal";

const EsqueciMinhaSenha = () => {
  return (
    <>
      <HeaderPrincipal />
      <View>
        <Text style={styles.titulo}>Esqueceu sua senha?</Text>
        <Text style={styles.subtitulo}>
          Nós resolvemos isso rapidinho, por favor, digite o e-mail cadastrado:
        </Text>
        <TextInput placeholder="E-mail" style={styles.input} />
        <Button buttonStyle={styles.btEnviar} title="Enviar" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  titulo: {
    paddingTop: 50,
    padding: 10,
    fontSize: 26,
    color: "#68378D",
  },
  subtitulo: {
    fontSize: 20,
    padding: 10,
  },
  input: {
    backgroundColor: "#D9D9D9",
    borderRadius: 5,
    fontSize: 16,
    padding: 10,
    marginTop:30,
    margin: 7,
  },

  btEnviar: {
    backgroundColor: "#68378D",
    borderRadius: 5,
    margin:7,
    padding: 10,
    marginTop:300
    
  },
});

export default EsqueciMinhaSenha;
