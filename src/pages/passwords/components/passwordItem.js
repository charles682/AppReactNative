import React, {useState} from 'react'
import { View,Text, TextInput, StyleSheet, Pressable, TouchableOpacity} from 'react-native'
import {Ionicons} from '@expo/vector-icons'


export  function PasswordItem({data, removePassword}){
  
    const [hidePass, setHidePass] = useState(true);

    return(
        <View >
        <Text  style={styles.text}  >
              dsbsbn n
        </Text>
        <Pressable onLongPress={removePassword} style={styles.container}>
            <Text
             style={styles.text}
             >
                {data}
            </Text>
            <TouchableOpacity style={styles.icon} onPress={() => setHidePass(!hidePass)}>
                { hidePass ?
                    <Ionicons name='eye' color="#fff" size={25}/>
                :
                <Ionicons name='eye-off' color="#fff" size={25}/>
                }
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
       
            width:'15%',
            height:50,
            justifyContent:"center",
            alignItems:"center"
        }
    }
);