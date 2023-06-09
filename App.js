
import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';
import call from 'react-native-phone-call';

const App = () => {
  const [inputValue, setInputValue] = useState('9999999999');

  const triggerCall = () => {
  
    if (inputValue.length != 10) {
      alert('Please insert correct contact number');
      return;
    }
        else {

          const prev = {
            number: inputValue,
            prompt: true,
          };
         
          call(prev).catch(console.error);
        }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Example to Make a Phone Call in React Native App
        </Text>
        <Text style={styles.titleTextsmall}>Enter Conatct Number to Call</Text>
        <TextInput
          value={inputValue}
          onChangeText={(inputValue) => setInputValue(inputValue)}
          placeholder={'Enter Conatct Number to Call'}
          keyboardType="numeric"
          style={styles.textInput}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={triggerCall}>
          <Text style={styles.buttonTextStyle}>Make a Call</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    textAlign: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop:20
  },
  titleTextsmall: {
    marginVertical: 8,
    fontSize: 16,
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#8ad24e',
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
});
