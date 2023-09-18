import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect} from "react";
import { useIsFocused } from "@react-navigation/native";
import useStorage  from '../../hooks/useStorage'
import {PasswordItem} from './components/passwordItem'


export function Passwords(){
    const [listPasswords, setListPasswords] = useState([])
    const focused = useIsFocused();
    const {getItem, removeItem} = useStorage();

    useEffect(() => {
        async function loadPasswords() {
          try {
            const passwords = await getItem('@pass'); // Obtenha a senha definida no modal
            if (passwords) {
              setListPasswords(passwords);
            }
          } catch (error) {
            console.error('Erro ao carregar senhas:', error);
          }
        }
    
        loadPasswords();
      }, [focused]);
    
      async function handleDeletePassword(item) {
        try {
          await removeItem('@pass', item); // Remova a senha com a chave especificada
          const updatedPasswords = await getItem('@pass'); // Obtenha a lista atualizada
          setListPasswords(updatedPasswords || []); // Defina a lista de senhas atualizada ou um array vazio se não houver senhas
        } catch (error) {
          console.error('Erro ao excluir senha:', error);
        }
      }
    

    //  useEffect(() =>{
    //     async function loadPasswords(){
    //         const passwords = await getItem("@pass") // senha definida  no modal
    //         setListPasswords(passwords);
    //     }
    //     loadPasswords();
    //  }),[focused]

    // async function handleDeletePassword(item){
    //     const passwords = await removeItem("@pass", item)
    //     setListPasswords(passwords)
    //  }

    // const [listNomes, setListNomes] = useState([]);

    // const saveNome = async (nome) => {
    //   try {
    //     await AsyncStorage.setItem('@nome', nome);
    //     setListNomes([...listNomes, nome]);
    //   } catch (error) {
    //     console.error('Erro ao salvar o nome:', error);
    //   }
    // };

  

    return(
        <SafeAreaView style={{flex:1,}}>
           <View style={styles.header}>
                <Text style={styles.title}>Minhas Senhas</Text>
            </View>
       
            
            <View style={styles.content}>
                 <FlatList
                 style={{flex:1, paddingTop:14,}}
                 data={listPasswords}
                 keyExtractor={(item) => String(item)}//para identificar cada item unico
                 renderItem={({item}) => <PasswordItem data={item} removePassword={ () => handleDeletePassword(item)}/>} // renderizar os itens
                 />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:"#392de9",
        paddingTop:58,
        paddingBottom:14,
        paddingLeft:14,
        paddingRight:14,
      
    },
    title:{
        fontSize:18,
        color:"#fff"
    },
    content:{
        flex:1,
        paddingLeft:14,
        paddingRight: 14,
    }
})