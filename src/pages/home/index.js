import { useState } from 'react'
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, Modal } from 'react-native'
import Slider from '@react-native-community/slider'
import { ModalPassword } from '../../components/modal'

export function Home() {
  let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

  // padrão pra utilização de hook (use state), retorna um array de duas posições, a primeira é valor atual do estado e a segunda posição contém uma func que permite modificar o estado
  const [size, setSize] = useState(8)
  const [passwordValue, setPasswordValue] = useState("")
  const [modalVisible, setModalVisible] = useState(false)

  function generatePassword() {
    let password = ""
    for(let item = 0, n = charset.length; item < size; item++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }
    setPasswordValue(password)
    setModalVisible(true);
  }
  console.log(`passei aqui 1: ${passwordValue}`);
  return (
    <View style={styles.container}>
      
      <Image 
      source={require("../../assets/logo.png")}
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
    
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
          <ModalPassword password={passwordValue} handleClose={ () => setModalVisible(false) }/>
      </Modal>


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













