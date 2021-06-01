import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, VirtualizedList, StatusBar, Image } from 'react-native';
import HeaderBoasVindas from '../../components/HeaderBoasVindas/HeaderBoasVindas';
import music from '../../images/iconmusic.jpg';
import listaEventos from '../../services/eventos.json';


const DATA = [];
const listaDeEventos = listaEventos;

const getItem = (data, index) => ({
  id: listaDeEventos[index].id ,
  title: listaDeEventos[index].Título, 
  organizador: `Organizador:  ${listaDeEventos[index].organizador}`, 
  status: `Status:  ${listaDeEventos[index].Status}`,
  dataEvento: `Data:  ${listaDeEventos[index].Data}`,

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

const Home = () => {
   
    return (
        <>  
            <View>
                <HeaderBoasVindas />
            </View>
            <View >
                <Text style={styles.title}>Seus próximos eventos</Text>
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
      title: {
        paddingTop: 0,
        padding: 3,
        paddingRight: 17,
        color: "#3B3838",
        fontSize: 28,
        textAlign: "right"
      },
      containerGeral: {
        paddingTop: 0,
        paddingBottom: 200,
      },
      item: {
        backgroundColor: '#c2bebe',
        borderRadius: 5,
        height: 120,
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
        width: "72%",
      },
      titleList: {
        fontSize: 21,
        color: "#68378D",
        textAlign: "left",
        fontWeight: "bold",
      },
      textList: {
        fontSize: 14,
        color: "#3B3838",
        textAlign: "left"
      },fotos: {
        width: 90,
        height: 90,
        borderRadius: 45,
      },
})

export default Home


