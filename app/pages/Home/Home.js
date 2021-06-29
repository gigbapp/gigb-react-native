import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, VirtualizedList, StatusBar, Image } from 'react-native';
import HeaderBoasVindas from '../../components/HeaderBoasVindas/HeaderBoasVindas';
import music from '../../images/icon/iconMusic.jpg';
import listaEventos from '../../util/EventosUtil.json';
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Icon } from 'react-native-elements';

import {ConsultaEventosArtistas} from '../../services/consultaEventos';

const fetchFont = () => {
  return Font.loadAsync({
    Ubuntu: require("../../fonts/Ubuntu-Light.ttf"),
  });
};
const DATA = [];

let listaDeEventos = []

ConsultaEventosArtistas(1).then((sucess) => {listaDeEventos = sucess});


const getItem = (data, index) => ({
  id: listaDeEventos[index].ID_Evento ,
  title: listaDeEventos[index].nomeEvento, 
  organizador: `Organizador:  ${listaDeEventos[index].Nome_Organizador}`, 
  status: `Status:  ${listaDeEventos[index].status}`,
  dataEvento: `Data:  ${listaDeEventos[index].data}`,

});


const getItemCount = (data) => listaDeEventos.length;

const Item = ({ title, dataEvento, status, organizador, chave  }) => (
    <View style={styles.item}  onTouchEnd = {() => {alert(`clicou ${chave}`)}}>
         <View style={styles.itensFoto}>
             <Image style={styles.fotos} source={music} />
         </View>
         <View style={styles.itensText}>
             <Text style={styles.titleList} multiline={true}>{title}</Text>
             <Text style={styles.textList} multiline={true}>{organizador}</Text>
             <Text style={styles.textList} multiline={true}>{status}</Text>
             <Text style={styles.textList} multiline={true}>{dataEvento}</Text>
         </View>
     </View>
);

const Home = ({route, navigation}) => {
  const [fontLoaded, setFontLoaded] = React.useState(false);
  const nomeUsuario = route.params? route.params.nome: "@nomeUsuário";
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
            <View  style={{flexDirection: "row"}}>
            <Icon reverse name='menu-outline' type='ionicon' color='#e6e6e6' onPress={() => navigation.openDrawer()}/>
            <HeaderBoasVindas  nome={nomeUsuario.substring(0, nomeUsuario.indexOf(" "))} title="Seus próximos eventos" />
            </View>

            <View style={styles.containerGeral}>
                <SafeAreaView style={styles.container} >
                    <VirtualizedList
                        data={DATA}
                        initialNumToRender={4}
                        renderItem={({ item }) => <Item  title={item.title} organizador={item.organizador} status={item.status} dataEvento={item.dataEvento} chave={item.id}/>}
                        keyExtractor={item => item.id}
                        getItemCount={getItemCount}
                        getItem={getItem}                        
                    />
                </SafeAreaView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
      },
      containerGeral: {
        paddingTop: 10,
        paddingBottom: 40,
        backgroundColor: '#f2f2f2'
      },
      containerHeader: {
        paddingTop: 10,
        paddingBottom: 0,
      },
      item: {
        backgroundColor: '#e6e6e6',
        borderRadius: 5,
        height: 100,
        justifyContent: 'flex-start',
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 15,
        alignItems: "center",
        flexDirection: "row",
      },
      itensFoto: {
        paddingLeft: 2,
        flexDirection: "column",
      },
      itensText: {
        paddingLeft: 25,
        flexDirection: "column",
        textAlign: 'left',
        margin:2, 
        width: "76%",
        fontFamily: "Ubuntu"
      },
      titleList: {
        fontSize: 18,
        color: "#68378D",
        textAlign: "left",
        fontFamily: "Ubuntu",
      },
      textList: {
        fontSize: 14,
        color: "#3B3838",
        textAlign: "left",
        fontFamily: "Ubuntu"
      },
      fotos: {
        width: 70,
        height: 70,
        borderRadius: 45,
      },
})

export default Home;


