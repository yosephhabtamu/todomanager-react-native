import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
  TouchableOpacity
} from "react-native";
import { useSelector } from "react-redux";
import { getTodos, updateTodoStatus, deleteTodo } from "../lib/features/TodoList/service";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function TodoList({ navigation }) {
  const {todoList, loading, error } = useSelector((state)=> state.todoList);

  function changeTodoStatus(todo){
    //send an update PUT request to the server with the new completed value for the todo
    updateTodoStatus({id: todo.id, completed: !todo.completed});
  }

  useEffect(() => { 
    getTodos();
  },[]);

  if(loading === true){
    return <Text style={styles.loading}>Loading...</Text>  
  }
  if(error){
    return <Text style={styles.error}>{error}</Text>  
  }

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
          <View style={styles.todoContainer} key={i}>
            <Text style={styles.todoText}>{todo.title}</Text>
            <TouchableOpacity onPress={() => changeTodoStatus(todo)}>
              <MaterialCommunityIcons
                name={todo.completed ? "checkbox-marked" : "checkbox-blank"}
                size={40}
                color={todo.completed ? "green" : "white"}
                style={{ paddingHorizontal: 10 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteTodo({id: todo.id})}>
              <MaterialCommunityIcons
                name="delete"
                size={40}
                color= "red"
                style={{ paddingHorizontal: 20 }}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    color: "#fff",
    backgroundColor: "#F0F0F0",
    Text: "#3333333",
    width: 400,
    padding: 10,
  },
  loading: {
    color: "#fff",
    backgroundColor: "#F0F0F0",
    Text: "#3333333",
    width: 400,
    padding: 10,
  },
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
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "600",
    fontFamily: "gothic, sans-serif",
  },
  input: {
    color: "black",
    backgroundColor: "#F0F0F0",
    width: 400,
    padding: 10,
    margin: 25,
  },

  todoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#000",
    backgroundColor: "#F0F0F0",
  },

  todoText: {
    width: 400,
    fontSize:18,
    padding: 20,
  },
});
