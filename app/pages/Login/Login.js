import React from 'react';
import { View, Image, StyleSheet, TextInput, Text } from 'react-native';
import gigBPrincipal from '../../images/gigBPrincipal.png';
import { Button } from 'react-native-elements';

const Login = () => {
    const [email, onChangeEmail] = React.useState(null);
    const [senha, onChangeSenha] = React.useState(null);

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={gigBPrincipal} />
            <View style={styles.inputArea}>
                <Text style={styles.label}>
                    Informe o seu e-mail:
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeEmail}
                    placeholder="E-mail"
                    value={email}
                />
                <Text style={styles.label}>
                    Digite sua senha:
                </Text>
                <View style={styles.inputSenha}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeSenha}
                        placeholder="Senha"
                        value={senha}
                        secureTextEntry={true}
                    />
                </View>
            </View>
            <Button
                buttonStyle={styles.button}
                title="Entrar"
            />
            <Button
                buttonStyle={styles.button}
                title="Criar conta"
            />
            <Text style={styles.text}>
                Esqueci minha senha
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        paddingBottom: 20,
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 100,
        margin: 50,
    },
    input: {
        height: 45,
        width: 300,
        margin: 10,
        paddingLeft: 10,
        borderRadius: 5,
        backgroundColor: '#D9D9D9',
        fontSize: 18,
        flexDirection: 'row',
    },
    button: {
        height: 50,
        margin: 20,
        width: 300,
        margin: 15,
        backgroundColor: '#68378D',
        fontSize: 18,
    },
    text: {
        margin: 20,
        color: '#68378D',
        fontWeight: 'bold',
    },
    label: {
        fontSize: 16,
        color: '#3B3838',
        fontWeight: 'bold',
        paddingLeft: 10,
    },
});

export default Login;