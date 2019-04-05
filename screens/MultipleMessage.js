import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Picker, Alert, AppState,TouchableOpacity, TextInput, Button} from 'react-native';
import PushContainer from '../components/pushContainer';
import PushNotification from 'react-native-push-notification';
import { ScaledSheet, scale } from 'react-native-size-matters';
import InputBox from '../components/inputBox';


export default class MultipleMessage extends Component {
  constructor(props){
    super(props);
    this.handleAppStateChange=this.handleAppStateChange.bind(this)
    this.state={
      seconds: '3',
      title: 'まだ叶っていない願い',
      message1: '1',
      message2: '2',
      message3: '3',
      message4: '4',
      message5: '5',
      message6: '6',
      message7: '7',
      message8: '8',
      message9: '9',
      message10: '10',
    };
  }



  handleAppStateChange(){
    if(this.state.message1.length > 0){
      PushNotification.localNotificationSchedule({
        //... You can use all the options from localNotifications
        title: this.state.title,
        message: this.state.message1,
        date: new Date(Date.now() + (this.state.seconds * 1000)) // in 60 secs
      });
    }
    if(this.state.message2.length > 0){
        PushNotification.localNotificationSchedule({
          //... You can use all the options from localNotifications
          title: this.state.title,
          message: this.state.message2,
          date: new Date(Date.now() + (this.state.seconds * 1000+1500)) // in 60 secs
        });
      }
      if(this.state.message3.length > 0){
        PushNotification.localNotificationSchedule({
          //... You can use all the options from localNotifications
          title: this.state.title,
          message: this.state.message3,
          date: new Date(Date.now() + (this.state.seconds * 1000+3000)) // in 60 secs
        });
      }
      if(this.state.message4.length > 0){
        PushNotification.localNotificationSchedule({
          //... You can use all the options from localNotifications
          title: this.state.title,
          message: this.state.message4,
          date: new Date(Date.now() + (this.state.seconds * 1000+4500)) // in 60 secs
        });
      }
      if(this.state.message5.length > 0){
        PushNotification.localNotificationSchedule({
          //... You can use all the options from localNotifications
          title: this.state.title,
          message: this.state.message5,
          date: new Date(Date.now() + (this.state.seconds * 1000+6000)) // in 60 secs
        });
      }
      if(this.state.message6.length > 0){
        PushNotification.localNotificationSchedule({
          //... You can use all the options from localNotifications
          title: this.state.title,
          message: this.state.message6,
          date: new Date(Date.now() + (this.state.seconds * 1000+7500)) // in 60 secs
        });
      }
      if(this.state.message7.length > 0){
        PushNotification.localNotificationSchedule({
          //... You can use all the options from localNotifications
          title: this.state.title,
          message: this.state.message7,
          date: new Date(Date.now() + (this.state.seconds * 1000+9000)) // in 60 secs
        });
      }
      if(this.state.message8.length > 0){
        PushNotification.localNotificationSchedule({
          //... You can use all the options from localNotifications
          title: this.state.title,
          message: this.state.message8,
          date: new Date(Date.now() + (this.state.seconds * 1000+10500)) // in 60 secs
        });
      }
      if(this.state.message9.length > 0){
        PushNotification.localNotificationSchedule({
          //... You can use all the options from localNotifications
          title: this.state.title,
          message: this.state.message9,
          date: new Date(Date.now() + (this.state.seconds * 1000+12000)) // in 60 secs
        });
      }
      if(this.state.message10.length > 0){
        PushNotification.localNotificationSchedule({
          //... You can use all the options from localNotifications
          title: this.state.title,
          message: this.state.message10,
          date: new Date(Date.now() + (this.state.seconds * 1000+13500)) // in 60 secs
        });
      }
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
          Messages(skip when blank)
        </Text>
        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row'}}>
            <TextInput style={styles.inputTextMini}
              onChangeText={(message1) => this.setState({message1})}
              value={this.state.message1}>
            </TextInput>
            <TextInput style={styles.inputTextMini}
              onChangeText={(message2) => this.setState({message2})}
              value={this.state.message2}>
            </TextInput>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput style={styles.inputTextMini}
              onChangeText={(message3) => this.setState({message3})}
              value={this.state.message3}>
            </TextInput>
            <TextInput style={styles.inputTextMini}
              onChangeText={(message4) => this.setState({message4})}
              value={this.state.message4}>
            </TextInput>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput style={styles.inputTextMini}
              onChangeText={(message5) => this.setState({message5})}
              value={this.state.message5}>
            </TextInput>
            <TextInput style={styles.inputTextMini}
              onChangeText={(message6) => this.setState({message6})}
              value={this.state.message6}>
            </TextInput>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput style={styles.inputTextMini}
              onChangeText={(message7) => this.setState({message7})}
              value={this.state.message7}>
            </TextInput>
            <TextInput style={styles.inputTextMini}
              onChangeText={(message8) => this.setState({message8})}
              value={this.state.message8}>
            </TextInput>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput style={styles.inputTextMini}
              onChangeText={(message9) => this.setState({message9})}
              value={this.state.message9}>
            </TextInput>
            <TextInput style={styles.inputTextMini}
              onChangeText={(message10) => this.setState({message10})}
              value={this.state.message10}>
            </TextInput>
          </View>
        </View>
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