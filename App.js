import { useState } from 'react'
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'
import Slider from '@react-native-community/slider'

export default function App() {
  const [size, setSize] = useState(8)
  let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

  function generatePassword() {
    let password = ""
    for(let item = 0, n = charset.length; item < size; item++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }

    console.log(password)
  }

  return (
    <View style={styles.container}>
      
      <Image 
      source={require("./src/assets/logo.png")}
      style={styles.logo}
      />

      <Text style={styles.subtitle}>
        {size} caracteres
      </Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="#ff0000"
          maximumTrackTintColor="rgba(255, 0, 0, 0.2)" 
          minimumTrackTintColor="#000"
          thumbTintColor="#392de9"
          value={size}
          onValueChange={ (value) => setSize(value.toFixed(0))}
        />       
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
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













