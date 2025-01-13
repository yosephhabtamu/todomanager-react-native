import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function TodoForm({navigation}) {
  return (
    <>
      <View style={styles.container}>
        <Button
          style={styles.backButton}
          title="GO Back"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.title}>Todolist form!</Text>
        <TextInput placeholder="search" style={styles.input}></TextInput>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  backButton: {
    color: "#fff",
    backgroundColor: "#F0F0F0",
    Text: "#3333333",
    width: 400,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    fontSize: 100,
    alignItems: "center",
  },
  title: {
    fontSize: 100,
    fontWeight: "600",
    fontFamily: "gothic, sans-serif",
  },
  input: {
    color: "#000",
    backgroundColor: "#F0F0F0",
    Text: "#333333",
    width: 400,
    padding: 10,
    margin: 25,
  },
});
