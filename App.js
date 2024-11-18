import React from "react";
import { View, Text, StatusBar, StyleSheet, SafeAreaView } from "react-native";
import ToDoScreen from "./src/screen/ToDoScreen";

const App = () => {
  return(
    <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
      <View >
        <ToDoScreen />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

});

export default App
