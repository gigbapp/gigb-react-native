import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './app/pages/Login/Login';
import EscolhaCadastro from './app/pages/Cadastro/EscolhaTipoCadastro';
import SenhaCadastro from './app/pages/Cadastro/SenhaCadastro';
import DadosArtisticos from './app/pages/Cadastro/Artista/DadosArtisticosCadastro';
import DadosPessoais from './app/pages/Cadastro/DadosPessoais/DadosPessoaisCadastro';
import TrocaDeSenha from './app/pages/TrocaDeSenha/TrocaDeSenha';
import QuemSomos from './app/pages/QuemSomos/QuemSomos';
import Home from './app/pages/Home/Home';
import EsqueciMinhaSenha from './app/pages/EsqueciMinhaSenha/EsqueciMinhaSenha';



const AppStack = createStackNavigator();

const Routes=() =>{
    return(
        <NavigationContainer>
            <AppStack.Navigator headerMode="none" initialRouteName="Home">
                <AppStack.Screen name="Login" component={Login}/>
                <AppStack.Screen name="EscolhaCadastro" component={EscolhaCadastro}/>
                <AppStack.Screen name="SenhaCadastro" component={SenhaCadastro}/>
                <AppStack.Screen name="DadosArtisticos" component={DadosArtisticos}/>
                <AppStack.Screen name="DadosPessoais" component={DadosPessoais}/>
                <AppStack.Screen name="TrocaDeSenha" component={TrocaDeSenha}/>
                <AppStack.Screen name="QuemSomos" component={QuemSomos}/>
                <AppStack.Screen name="Home" component={Home}/>
                <AppStack.Screen name="EsqueciMinhaSenha" component={EsqueciMinhaSenha}/>
                </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;