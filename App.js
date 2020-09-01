import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.button}>
        <Icon name="person" size={40}></Icon>
        <Text>Perfil</Text>
      </View>

      <View style={styles.button}>
        <Icon name="camera-alt" size={40}></Icon>
        <Text>Câmera</Text>
      </View>

      <View style={styles.button}>
        <Icon name="exit-to-app" size={40}></Icon>
        <Text>Sair</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dedede',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  button: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

    marginTop: 40,
    width: '100%',
    height: '100%',
    borderRadius: 8,

    elevation: 5,
    shadowColor: '#010101',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
});
