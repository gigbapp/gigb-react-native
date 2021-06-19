import React from "react";
import { StyleSheet,  View } from "react-native";
import { Button } from "react-native-elements";

const BotoesFooter = (props) => {
  return (
    <View style={styles.footer}>
      <View>
        <Button buttonStyle={styles.btVoltar}  title="Voltar"  onPress={props.voltar}/>
      </View>
      <View>
        <Button buttonStyle={styles.btRight} title={props.title} onPress={props.onPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    btRight: {
        backgroundColor: "#68378D",
        borderRadius: 5,
        width:170,
        padding:6
      },
      btVoltar: {
        backgroundColor: "#68378D",
        borderRadius: 5,
        width:170,
        padding:6
      },
      footer: {
        margin:8,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
      } 
});

export default BotoesFooter;