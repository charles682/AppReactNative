import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";


export function Welcome() {
    const navigation = useNavigation();
    return ( 
        <View style={styles.container}>
          <View style={styles.containerLogo}>
            <Animatable.Image
                animation="slideInDown"
                iterationCount={5} direction="alternate"
                source={require('../../img/logo.png')}
                style={{width:'57%'}}
             
            />
          </View>
          <Animatable.View 
          delay={600}
          animation="fadeInUp"
          style={styles.containerForm}>
            <Text style={styles.title}>Monitore, salve e organize as suas senhas</Text>
            <Text style={styles.text}>Faça login para começar</Text>

            <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('SingIn')}
            >
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>


          </Animatable.View>
         </View>
     );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#392de9'
    },
    containerLogo:{
        flex:2,
        justifyContent:"center",
        alignItems:"center"
       
    },
    containerForm:{
        flex:1,
        backgroundColor:"#fff",
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart:"5%",
        paddingEnd:"5%"
    },
    title:{
        fontSize:24,
        fontWeight:"bold",
        marginTop:28,
        marginBottom:12,
    },
    text:{
        color:"#a1a1a1"
    },
    button:{
        position:"absolute",
        backgroundColor:"#392de9",
        borderRadius:50,
        paddingVertical:8,
        width:"60%",
        alignSelf:"center",
        bottom:"15%",
        alignItems:"center",
        justifyContent:"center",
    },
    buttonText:{
        fontSize:18,
        color:"#fff",
        fontWeight:"bold"
    }
})