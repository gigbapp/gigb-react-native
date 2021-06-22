import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";


import Login from '../app/pages/Login/Login';
import Home from '../app/pages/Home/Home';
import EscolhaCadastro from '../app/pages/Cadastro/EscolhaTipoCadastro';
import SenhaCadastro from '../app/pages/Cadastro/SenhaCadastro';
import DadosArtisticos from '../app/pages/Cadastro/Artista/DadosArtisticosCadastro';
import DadosPessoais from '../app/pages/Cadastro/DadosPessoais/DadosPessoaisCadastro';
import TrocaDeSenha from '../app/pages/TrocaDeSenha/TrocaDeSenha';
import QuemSomos from '../app/pages/QuemSomos/QuemSomos';
import EsqueciMinhaSenha from '../app/pages/EsqueciMinhaSenha/EsqueciMinhaSenha';

const Drawer = createDrawerNavigator();

const fetchFont = () => {
    return Font.loadAsync({
        Ubuntu: require("../app/fonts/Ubuntu-Light.ttf"),
    });
};

export default () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerComp {...props} />}>       
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="QuemSomos" component={QuemSomos} />
            <Drawer.Screen name="EscolhaCadastro" component={EscolhaCadastro} />
            <Drawer.Screen name="SenhaCadastro" component={SenhaCadastro} />
            <Drawer.Screen name="DadosArtisticos" component={DadosArtisticos} />
            <Drawer.Screen name="DadosPessoais" component={DadosPessoais} />
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="TrocaDeSenha" component={TrocaDeSenha} />
            <Drawer.Screen name="EsqueciMinhaSenha" component={EsqueciMinhaSenha} />
        </Drawer.Navigator>
    );
};

export const CustomDrawerComp = (props) => {
    const { navigation } = props;
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
        <DrawerContentScrollView {...props} >
            <View style={{ flexGrow: 2 }}>
                <DrawerItem labelStyle={styles.pagInicial} label="Página Inicial" onPress={() => navigation.navigate('Home')} />
                <DrawerItem labelStyle={styles.titulo} label="Troca de Senha" onPress={() => navigation.navigate('TrocaDeSenha')} />
                <DrawerItem labelStyle={styles.titulo} label="Sobre o app" onPress={() => navigation.navigate('QuemSomos')} />
            </View>
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({

    titulo: {
        fontFamily: "Ubuntu",
        fontSize: 20,
    },
    pagInicial: {
        paddingTop:50,
        fontFamily: "Ubuntu",
        fontSize: 20,
    },
});