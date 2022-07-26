import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TodoButton from "./ToDoButton";

const Todo = ({ todo, toggleComplete, deleteToDo }) => {
  return (
    <View style={styles.todoContainer}>
      <Text style={styles.todoText}>
        {todo.title}
      </Text>
      <View style={styles.buttons}>
        <TodoButton name='Done' complete={todo.complete} onPress = {() => toggleComplete(todo.todoIndex)}/>
        <TodoButton name='Delete' onPress = {() => deleteToDo(todo.todoIndex)}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  todoContainer: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#ededed',
    paddingLeft: 14,
    paddingTop: 7,
    paddingBottom: 7,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 },
    flexDirection: 'row',
    alignItems: 'center'
  },
  todoText: {
    fontSize: 17
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
})

export default Todo;