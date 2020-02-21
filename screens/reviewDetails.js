import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Card>
      <Text>{navigation.gotParam('title')}</Text>
      <Text>{navigation.gotParam('body')}</Text>
      <Text>{navigation.gotParam('rating')}</Text>
     </Card>
    </View>
  )
}

