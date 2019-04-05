import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Picker, Alert, AppState,TouchableOpacity, TextInput, Button} from 'react-native';
import PushContainer from '../components/pushContainer';
import PushNotification from 'react-native-push-notification';
import { ScaledSheet, scale } from 'react-native-size-matters';


export default class OneMessage extends Component {
  constructor(props){
    super(props);
    this.handleAppStateChange=this.handleAppStateChange.bind(this)
    this.state={
      seconds: '3',
      title: 'まだ叶っていない願い',
      message: 'ハニートースト食べたい。　３日前　✓',
    };
  }



  handleAppStateChange(){
    if(this.state.message.length > 1){
      console.log("working")
      PushNotification.localNotificationSchedule({
        //... You can use all the options from localNotifications
        title: this.state.title,
        message: this.state.message,
        date: new Date(Date.now() + (this.state.seconds * 1000)) // in 60 secs
      });
    }else{
        Alert.alert(
            'Alert Title',
            'messageを入力してください',
            [
              {text: 'はい', onPress: () => console.log('Yes Pressed')},
            ]
          );
    }
  }
  
  dummy(){
    Alert.alert(
      'Alert Title',
      'Alert message here...',
      [
        {text: 'NO', onPress: () => console.log('NO Pressed')},
        {text: 'YES', onPress: () => console.log('YES Pressed')}
      ]
    );
  }



  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}></Text>
        <Text style={styles.Text}>
              Seconds 
        </Text>
        <TextInput style={styles.inputNumber} 
          onChangeText={(seconds) => this.setState({seconds})} 
          value={this.state.seconds}>
        </TextInput>
        <Text style={styles.Text}>
          Title
        </Text>
        <TextInput style={styles.inputText}
          onChangeText={(title) => this.setState({title})}
          value={this.state.title}>
        </TextInput>
        <Text style={styles.Text}>
          Message
        </Text>
        <TextInput style={styles.inputText}
          onChangeText={(message) => this.setState({message})}
          value={this.state.message}>
        </TextInput>
        <TouchableOpacity>
          <Button title="Start Now" color="#841584" onPress={this.handleAppStateChange}/>
        </TouchableOpacity>
        <PushContainer/>
      </View>
    );
  }
}

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
  },inputText: {
    width: 300,
    height: 50,
    borderWidth: 3,
    borderColor: '#4c4a4c',
    fontSize: scale(14),
    textAlign: 'center',
    backgroundColor: '#efeaef',
  },
});

