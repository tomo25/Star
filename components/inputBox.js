import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Picker, Alert, AppState,TouchableOpacity, TextInput, Button} from 'react-native';
import PushContainer from '../components/pushContainer';
import PushNotification from 'react-native-push-notification';
import { ScaledSheet, scale } from 'react-native-size-matters';


const InputBox = () => {

    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TextInput style={styles.inputTextMini}
              onChangeText={(message) => this.setState({message})}
              value={this.state.message}>
            </TextInput>
            <TextInput style={styles.inputTextMini}
              onChangeText={(message) => this.setState({message})}
              value={this.state.message}>
            </TextInput>
          </View>
        </View>
    );

}

export default InputBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    height: 100,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  picker: {
    width: 100,
  },
  Text: {
    fontSize: scale(20),
    textAlign: 'center',
    color: '#4c4a4c',
  },
  inputNumber: {
    width: 300,
    height: 50,
    borderWidth: 3,
    borderColor: '#4c4a4c',
    fontSize: scale(20),
    textAlign: 'center',
    backgroundColor: '#efeaef',
  },
  inputText: {
    width: 300,
    height: 50,
    borderWidth: 3,
    borderColor: '#4c4a4c',
    fontSize: scale(14),
    textAlign: 'center',
    backgroundColor: '#efeaef',
  },
  inputTextMini: {
    width: 150,
    height: 40,
    borderWidth: 2,
    borderColor: '#4c4a4c',
    fontSize: scale(14),
    textAlign: 'center',
    backgroundColor: '#efeaef',
  },
});