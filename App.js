import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UserNavigation from "./.expo/app/navigations/User";
import firebaseConfig from "./.expo/app/utils/fireBase";
import *  as firebase from "firebase";


//configuracion de bd de firebase
firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <View style={styles.container}>
      <UserNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
