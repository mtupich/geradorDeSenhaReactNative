import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'
import Slider from '@react-native-community/slider'

export default function App() {
  return (
    <View style={styles.container}>
      
      <Image 
      source={require("./src/assets/logo.png")}
      style={styles.logo}
      />

      <Text style={styles.subtitle}>
        16 caracteres
      </Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="#ff0000"
          minimumTrackTintColor="#000"
          thumbTintColor="#392de9"
        />       
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>
    
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#F3F3FF",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo:{
    marginBottom: 60,
  },
  subtitle:{
    fontSize: 18,
    fontWeight: 'bold'
  },
  area:{
    marginTop: 14,
    marginBottom:  14, 
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 8
  },
  button:{
    backgroundColor:'#3639DA',
    width: 100,
    height: 50,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 18
  },
  buttonText:{
    color: "#FFF",
    fontSize: 20,
  }
})












