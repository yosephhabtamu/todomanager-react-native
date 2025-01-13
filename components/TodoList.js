import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
} from "react-native";
import { useSelector } from "react-redux";

export default function TodoList({ navigation }) {
  const {todoList } = useSelector((state)=> state.todoList)


  return (
    <View style={styles.container}>
      <Button
        style={styles.addTodo}
        title="Add Todo"
        onPress={() => navigation.navigate("todoForm")}
      />
      <Text style={styles.title}>Todolist App!</Text>
      <TextInput placeholder="search" style={styles.input}></TextInput>
      <ScrollView>
        {todoList.map((todo, i) => (
          <Text key={i} style={styles.todoText}>
            {todo}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  addTodo: {
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
    color: "#fff",
    backgroundColor: "#F0F0F0",
    Text: "#3333333",
    width: 400,
    padding: 10,
    margin: 25,
  },

  todoText: {
    color: "#000",
    backgroundColor: "#F0F0F0",
    Text: "#3333333",
    width: 400,
    padding: 10,
    margin: 25,
  },
});
