import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

function App() {
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [buttonTwoPosition, setButtonTwoPosition] = useState({ top: 0, left: 0 });
  const [backgroundColorAnimation] = useState(new Animated.Value(0));

  const handleButtonOnePress = () => {
    setShowCongratulations(true);
  };

  const handleButtonTwoPress = () => {
    const newTop = Math.floor(Math.random() * 300);
    const newLeft = Math.floor(Math.random() * 300);

    setButtonTwoPosition({ top: newTop, left: newLeft });
  };

  useEffect(() => {
    const colorAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(backgroundColorAnimation, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(backgroundColorAnimation, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
      ])
    );

    colorAnimation.start();

    return () => {
      colorAnimation.stop();
    };
  }, [backgroundColorAnimation]);

  const backgroundColorInterpolation = backgroundColorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(255, 228, 225)', 'rgb(139, 0, 0)'],
  });

  return (
    <View style={[styles.container]}>
      <Text style={styles.title}>Aceita namorar comigo?💓🥹</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.buttonOne]} onPress={handleButtonOnePress}>
          <Text style={styles.buttonText}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { top: buttonTwoPosition.top, left: buttonTwoPosition.left }]}
          onPress={handleButtonTwoPress}
        >
          <Text style={styles.buttonText}>Não</Text>
        </TouchableOpacity>
      </View>
      {showCongratulations && (
        <Text style={styles.congratulationsText}>Parabéns, a partir de agora você está oficialmente namorando seu T.I., quero agradecer por tudo meu amor e dizer que te amarei mais ainda e eternamente. Quero dizer também que sempre estarei do seu lado para tudo que precisar e que meu amor por você é gigante e eterno, pois você é a razão da minha felicidade. 💞 OBS: precisa me dizer sua resposta kkkkk</Text>
      )}
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
    fontSize: 25,
    fontWeight: 'bolder',
    color: 'black',
    marginBottom: 40,
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
    borderRadius: 2,
    borderColor: 'black',
  },
  buttonOne: {
    backgroundColor: 'white',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'black',
  },
  congratulationsText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bolder',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default App;
