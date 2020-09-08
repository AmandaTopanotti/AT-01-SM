import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Foto() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={styles.container} type={type}>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button}></TouchableOpacity>
          <TouchableOpacity
            style={styles.flip}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Icon name='refresh' size={35}></Icon>
          </TouchableOpacity>
        </View>
      </Camera>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 32,
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: '100%',
  },
  buttonView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#D2CECD',
    width: 125,
    height: 125,
    borderRadius: 1000,
    borderColor: '#fafafa',
    borderWidth: 27,
    marginHorizontal: 42,
    elevation: 5,
    shadowColor: '#010101',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  flip: {
    backgroundColor: '#fafafa',
    width: 50,
    height: 50,
    borderRadius: 100,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  }
});