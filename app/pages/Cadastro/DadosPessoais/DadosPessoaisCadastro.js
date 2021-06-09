import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Button } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';

const DadosPessoaisCadastro = () => {
  return (
    <>
      <View>
        <Text style={styles.titulo}>Bem Vindo ao Gig B,</Text>
        <Text style={styles.subtitulo}>
          {" "}
          Por favor, informe seus dados pessoais para completar essa etapa.{" "}
        </Text>
      </View>
      <View style={styles.containerInputs}>
        <Text style={styles.tituloInput}>CPF/CNPJ *</Text>
        <TextInput placeholder="CPF/CNPJ" style={styles.input} />
        <Text style={styles.tituloInput}>Nome completo *</Text>
        <TextInput placeholder="Nome completo " style={styles.input} />
        <Text style={styles.tituloInput}> E-mail *</Text>
        <TextInput placeholder="E-mail" style={styles.input} />
        <Text style={styles.tituloInput}> Telefone *</Text>
        <TextInput placeholder="Telefone" style={styles.input} />
        <Text style={styles.tituloInput}> Sexo *</Text>
        <DropDownPicker
    items={[
        {label: 'Item 1', value: 'item1'},
        {label: 'Item 2', value: 'item2'},
    ]}
    defaultNull
    placeholder="Sexo"
    containerStyle={{height: 40}}
    onChangeItem={item => console.log(item.label, item.value)}
/>
      </View>
      <View>
      <Button buttonStyle={styles.btnAvancar}  title= "Avancar" />
     </View>
    </>
  );
};

export default DadosPessoaisCadastro;

const styles = StyleSheet.create({
  containerInputs: {
    paddingTop: 30,
  },
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
  tituloInput: {
    margin: 5,
    fontSize: 14,
  },
  input: {
    backgroundColor: "#D9D9D9",
    borderRadius: 5,
    fontSize: 16,
    padding: 10,
    width: 375,
    margin: 7,
  },
  btnAvancar: {
    backgroundColor: "#68378D",
    borderRadius: 5,
    margin:7,
    padding: 10, 
  },
});

