
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import Slider from '@react-native-community/slider'

export default function App() {
  return (
    <View style={styles.container}>
     <Image
       source={require("./src/assets/logoo.png")}
       style={styles.logo}
       
       />
       
     <Text style={styles.title}>20 caractres </Text>

      <View style={styles.area}>
        <Slider
          style={{height: 50}}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="#ff0000"
          minimumTrackTintColor="#000"
          />
      </View>

      <TouchableOpacity>
        <Text>Gerar Senha</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(243, 243, 255, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    marginBottom: 60
  },
  area:{
    marginTop:14,
    marginBottom:14,
    width:"80%",
    backgroundColor: "#fff",
    borderRadius:8,
    padding:8,
  }
});
