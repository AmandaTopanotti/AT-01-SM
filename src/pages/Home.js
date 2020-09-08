import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, BackHandler } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function App({ navigation }) {
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
        <Icon name="person" size={40}></Icon>
        <Text>Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Foto')}>
        <Icon name="camera-alt" size={40}></Icon>
        <Text>Câmera</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => BackHandler.exitApp()}>
        <Icon name="exit-to-app" size={40}></Icon>
        <Text>Sair</Text>
      </TouchableOpacity>

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D2CECD',
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