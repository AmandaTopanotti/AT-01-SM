import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export function Profile() {
  return (
    <View style={styles.container}>
      <Image style={styles.profileimage}
        source={require('../../assets/mars.jpg')}
        resizeMode='contain' />
      <Text style={[styles.textStyle, { fontWeight: 'bold' }]}>
        Amanda
      </Text>
      <Text style={styles.textStyle}>
        17
      </Text>
      <Text style={styles.textStyle}>
        Pequena Gafanhota
      </Text>
      <View style={styles.container2}>
        <Text style={styles.text}>
          Tecnologias e Linguagens
        </Text>
        <Text style={{ color: '#D2CECD' }}>
          Python, Java, JavaScript, React-Native, SQL
        </Text>
        <Text style={styles.text}>
          Plataformas
        </Text>
        <Text style={{ color: '#D2CECD' }}>
          VSCode, Unity, Intellij, PyCharm, MySQL WorkBench
        </Text>
        <Text style={styles.text}>
          Eu gostaria de trabalhar com:
        </Text>
        <Text style={{ color: '#D2CECD' }}>
          Construção e terraformação de Marte, bem como outros planetas fora do Sistema Solar.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D2CECD',
    alignItems: 'center',
    padding: 32,
    paddingTop: 64,
  },
  container2: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fefefe',
    padding: 32,
    marginTop: 32,
    borderRadius: 10,
    elevation: 5,
  },
  profileimage: {
    width: 150,
    height: 150,
    margin: 32,
    borderRadius: 500,
  },
  textStyle: {
    color: '#fefefe',
    fontSize: 20,
    marginBottom: 4,
  },
  text: {
    color: '#D2CECD',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 4,
  },
});
