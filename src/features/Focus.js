import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper'
import { colors } from '../utils/color'
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/size';

export function Focus({ addSubject }) {

  const [subject, setSubject] = useState(null)

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} onChangeText={setSubject} label="No que você quer focar?"/>
        <View style={styles.button}>
        <RoundedButton  title="+" size={50} onPress={() => addSubject(subject)}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  button: {
    justifyContent: 'center'
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm
  },  
  inputContainer: {
    flexDirection: 'row',
    padding: spacing.lg,
    justifyContent: 'top',
  },
  text: {
    color: colors.white
  }
})