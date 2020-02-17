import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text>{navigation.gotParam('title')}</Text>
      <Text>{navigation.gotParam('body')}</Text>
      <Text>{navigation.gotParam('rating')}</Text>
    </View>
  )
}

