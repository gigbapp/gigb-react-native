import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';

const BotaoFooter = (props) => {
    return (
        <View>
          <Button buttonStyle={styles.bt}  title= {props.title} onPress={() => {navigation.navigate(props.pagRedirecionar)}} />
        </View>
    )
}

const styles = StyleSheet.create({
    bt: {
        backgroundColor: "#68378D",
        borderRadius: 5,
        padding:6
      },

})


export default BotaoFooter;