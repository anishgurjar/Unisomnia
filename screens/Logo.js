import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const Starter = () => {
    return(
        <View style={ styles.container }>
        <Image source={require('../assets/bg1.jpg')} style={styles.backgroundImage} />
            <View style = {styles.logoBox}></View>
            <Image source={require('../assets/UnisomniaLogo.png')} style={styles.logo} />
       </View>
    )
}

var {width} = Dimensions.get('window');
var {height} = Dimensions.get('window');

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    backgroundImage: {
        flex: 1,
        resizeMode: 'stretch', // or 'stretch'
        zIndex: -2,
    },

    logoBox: {
        position: 'absolute',
        backgroundColor: '#2feef5',
        
        zIndex: -1
    }, 

    logo: {
        position: 'absolute',
        zIndex: 1,
    }
  });



export default Starter;