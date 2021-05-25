import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import gigBPrincipal from '../../images/gigBPrincipal.png';


const HeaderPrincipal = () => {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={gigBPrincipal} />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      paddingTop: 80,
      paddingBottom: 20,
      alignItems: 'center',
    },
    logo: {
      width: 200,
      height: 100,
    },
  });
  
  export default HeaderPrincipal;