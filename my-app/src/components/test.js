import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function App() {
  const [buttonTwoPosition, setButtonTwoPosition] = useState({ top: 0, left: 0 });

  const handleButtonTwoPress = () => {
    const newTop = Math.floor(Math.random() * (windowHeight - 20)); // Gera uma posição vertical aleatória dentro dos limites da tela
    const newLeft = Math.floor(Math.random() * (windowWidth - 20)); // Gera uma posição horizontal aleatória dentro dos limites da tela

    setButtonTwoPosition({ top: newTop, left: newLeft });
  };
  const aceitar = () => {
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aceita namorar comigo? 🥹💓</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { top: buttonTwoPosition.top, left: buttonTwoPosition.left }]} onPress={handleButtonTwoPress}>
          <Text style={styles.buttonText}>Não</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 60,
    height: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginRight: 20,
    position: 'relative',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
  },
});

export default App;
