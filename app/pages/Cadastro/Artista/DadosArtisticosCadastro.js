import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { CheckBox } from "react-native-elements";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import BotoesFooter from "../../../components/BotoesFooter/BotoesFooter";
import { verificarCampoPreenchidoObrigatorio} from "../../../validacao/CamposObrigatorios";

const fetchFont = () => {
  return Font.loadAsync({
    Ubuntu: require("../../../fonts/Ubuntu-Light.ttf"),
  });
};
 
const DadosArtisticosCadastro = ({navigation,route}) => {
  const [fontLoaded, setFontLoaded] = React.useState(false);
  const [solo, setSolo] = React.useState(false);
  const [dueto, setDueto] = React.useState(false);
  const [banda, setBanda] = React.useState(false);
  const [nomeArtistico, setNomeArtistico] = React.useState("");
  const [instagram, setInstagram] = React.useState("");
  const [youtube, setYoutube] = React.useState("");
  const [trajetoria, setTrajetoria] = React.useState("");

  const validarCampos =  () => {
    if(!verificarCampoPreenchidoObrigatorio(nomeArtistico) || !verificarCampoPreenchidoObrigatorio(instagram)
       || !verificarCampoPreenchidoObrigatorio(youtube) || !verificarCampoPreenchidoObrigatorio(trajetoria)) {
         alert('Preencha os campos obrigatórios.');
    }
    else if(!instagram.includes('.com') || !youtube.includes('.com')){
      alert('Link do instagram ou youtube está incorreto.');
    }
    else if(!solo && !dueto && !banda){
      alert('Selecione uma categoria.');
    }
    else {
      navigation.navigate('SenhaCadastro',{cpfCnpj: route.params.cpfCnpj, nome: route.params.nome, 
                                           email: route.params.email, telefone: route.params.telefone, 
                                           sexo: route.params.sexo, nomeArtistico: nomeArtistico,
                                           instagram: instagram, youtube: youtube, trajetoria: trajetoria});
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
        <Text style={styles.subtitulo}> {" "} Para essa etapa, vamos falar sobre seus dados artísticos. </Text>

        <View style={{ paddingTop: 15 }}>
         
          <Text style={styles.tituloInput}>Nome Artístico <Text style={{ color: "red" }}>*</Text></Text>
          <TextInput placeholder="Nome Artístico" onChangeText={(text) => setNomeArtistico(text)} style={styles.input} />

          <Text style={styles.tituloInput}>Link do Instagram <Text style={{ color: "red" }}>*</Text></Text>
          <TextInput placeholder="Link do Instagram" onChangeText={(text) => setInstagram(text)} style={styles.input} />

          <Text style={styles.tituloInput}>Link do Canal do Youtube <Text style={{ color: "red" }}>*</Text></Text>
          <TextInput  placeholder="Link do Canal do Youtube" onChangeText={(text) => setYoutube(text)} style={styles.input}/>

          <Text style={styles.tituloInput}>Fale um pouco sobre sua trajetória artística <Text style={{ color: "red" }}>*</Text></Text>
          <TextInput onChangeText={(text) => setTrajetoria(text)} placeholder="Trajetória artística"   multiline={true}  numberOfLines={3}  style={styles.input} />
          
          <Text style={styles.tituloInput}>Escolha uma categoria <Text style={{ color: "red" }}>*</Text></Text>

         
          <CheckBox
            fontFamily="Ubuntu"
            containerStyle={{ backgroundColor: "transparent", border: "none" }}
            title="Solo"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            onPress={()=>{setSolo(true); setBanda(false); setDueto(false);}}
            checked={solo}
          />

          <CheckBox 
            fontFamily="Ubuntu"
            containerStyle={{ backgroundColor: "transparent", border: "none" }}
            title="Dueto"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            onPress={()=>{setSolo(false); setBanda(false); setDueto(true);}}
            checked={dueto}
          />

          <CheckBox
            fontFamily="Ubuntu"
            containerStyle={{ backgroundColor: "transparent", border: "none" }}
            title="Banda"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            onPress={()=>{setSolo(false); setBanda(true); setDueto(false);}}
            checked={banda}
          />
        </View>
      </View>

      <View>
        <BotoesFooter  voltar={() => {navigation.goBack();}}   title="Avançar" onPress={()=>{validarCampos()}} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  tituloInput: {
    margin: 5,
    fontSize: 14,
    color: "#68378D",
    fontFamily: "Ubuntu",
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
  subtitulo: {
    fontSize: 18,
    padding: 10,
    paddingTop: 20,
    fontFamily: "Ubuntu",
  },
});

export default DadosArtisticosCadastro;
