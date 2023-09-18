import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () =>{
    //Buscar os items salvos
    const getItem = async (key) =>{
        try{
            const passwords = await AsyncStorage.getItem(key);
            return JSON.parse(passwords) || [];
        }catch(error){
            console.log("Erro ao buscar", error)
            return[];
        }
    }

    //Salvar um item no storage
    const saveItem = async(key, value) =>{
        try{
        let passwords = await getItem(key);
        passwords.push(value) // add item no array

        await AsyncStorage.setItem(key, JSON.stringify(passwords))
         
        }catch(error){
            console.log("ERROR AO SALVAR", error)
        }
    }

 // Salvar Nome da senha
 const saveNome = async (key, value) => {
    try {
        let nome = await getNome(key);
        nome.push(value);

        await AsyncStorage.setItem(key, JSON.stringify(nome));
    } catch (error) {
        console.log("ERROR AO SALVAR", error);
    }
}

    // Remover algo do storage
    const removeItem = async(key, item) =>{
        try{
            let passwords = await getItem(key);
            let myPasswords = passwords.filter((passwords) =>{
                return(passwords !== item)
            })
            await AsyncStorage.setItem(key, JSON.stringify(myPasswords))
        }catch(error){
          console.log("ERROR AO DELETAR", error)
        }
    }

    return{
        getItem,
        saveItem,
        saveNome,
        removeItem
    }


}

export default useStorage;