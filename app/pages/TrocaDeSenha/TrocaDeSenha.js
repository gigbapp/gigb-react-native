import React from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { StyleSheet, Text, View, TextInput } from "react-native";
import BotaoFooter from '../../components/BotaoFooter/BotaoFooter';
import HeaderBoasVindas from "../../components/HeaderBoasVindas/HeaderBoasVindas";
import {verificarCampoPreenchidoObrigatorio } from "../../validacao/CamposObrigatorios";
import { Icon } from 'react-native-elements';

const fetchFont = () => {
  return Font.loadAsync({
    Ubuntu: require("../../fonts/Ubuntu-Light.ttf"),
  });
};

const TrocaDeSenha = ({navigation}) => {
  const [fontLoaded, setFontLoaded] = React.useState(false);
  const [senhaAtual, setSenhaAtual] = React.useState("");
  const [novaSenha, setNovaSenha] = React.useState("");
  const [novaSenhaConf, setNovaSenhaConf] = React.useState("");

  const validarCampos =  () => {
    if(!verificarCampoPreenchidoObrigatorio(senhaAtual) || !verificarCampoPreenchidoObrigatorio(novaSenha)
       || !verificarCampoPreenchidoObrigatorio(novaSenhaConf)){
      alert('Preencha os campos corretamente.');
    }
    else if(novaSenha != novaSenhaConf){
      alert('A senha nova não corresponde com a confirmação de senha.');
    }
    else {
      alert("Troca de senha realizada com sucesso.")
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
    <View style={{ margin: 8 }}>
      <View style={{flexDirection: "row"}}>
      <Icon reverse name='menu-outline' type='ionicon' color='#e6e6e6' onPress={() => navigation.openDrawer()}/>
        <HeaderBoasVindas title="&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Troca de Senha" />
        </View>
     
      <View style={styles.container}>
     
      <Text style={styles.tituloInput}>Senha atual <Text style={{ color: "red" }}>*</Text></Text>
      <TextInput secureTextEntry={true} onChangeText={(text) => setSenhaAtual(text)} placeholder="Senha atual" style={styles.input} />
      
      <Text style={styles.tituloInput}>Nova senha <Text style={{ color: "red" }}>*</Text></Text>
      <TextInput secureTextEntry={true} onChangeText={(text) => setNovaSenha(text)} placeholder="Nova senha" style={styles.input} />

      <Text style={styles.tituloInput}>Confirmação da nova senha <Text style={{ color: "red" }}>*</Text></Text>
      <TextInput secureTextEntry={true} onChangeText={(text) => setNovaSenhaConf(text)} placeholder="Confirmação da nova senha" style={styles.input} />

      <View style={{ margin: 3, paddingTop: 200 }}>
      <BotaoFooter onPress={() => {validarCampos();}} title="Atualizar"/>
      </View>   

      </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 70,
      },
      tituloInput: {
        margin: 5,
        fontSize: 14,
        fontFamily: "Ubuntu",
        color: "#68378D",
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
});

export default TrocaDeSenha;