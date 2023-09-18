import React, {useState} from 'react'
import { View, TextInput, StyleSheet, Pressable, TouchableOpacity, Button} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons';


export  function PasswordItem({data, removePassword }){
 const [hidePass, setHidePass] = useState(true)



    return(
        <View >
            
        <Pressable  style={styles.container}>
            <TextInput
             style={styles.text } 
             secureTextEntry={hidePass}
             >
                {data}
            </TextInput>
            <TouchableOpacity style={styles.icon} onPress={() => setHidePass(!hidePass)}>
                { hidePass ?
                <Ionicons name='eye-off' color="#fff" size={25}/>
                   
                :
                <Ionicons name='eye' color="#fff" size={25}/>
                
                }
             <Pressable onPressIn={removePassword}>
             <MaterialIcons name="delete-outline" size={24} color="black"  />
             </Pressable>
             
            </TouchableOpacity>
            
        </Pressable>
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#0e0e0e",
        padding:14,
        width:"100%",
        marginBottom:14,
        borderRadius:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    text:{
        color:"#fff"
    },
    input:{
            width:'15%',
            height:50,
            color:"#fff",
           padding:8,
           fontSize:8,
     
    },
    icon:{
            width:'22%',
            height:50,
            justifyContent:"space-between",
            alignItems:"center",
            flexDirection:"row",
           
        }
    }
);