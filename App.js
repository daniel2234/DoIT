import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import Heading from './components/Heading';
import Input from './components/TextInput';
import Button from './components/Button';
import ToDoList from './components/ToDoList';
import TabBar from './components/TabBar';

let todoIndex = 0

class App extends Component {
  constructor() {
    super()
    this.state = {
      inputValue : '',
      todos: [],
      type: 'All'
    }
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
    this.submitToDo = this.submitToDo.bind(this);
    this.setType = this.setType.bind(this)
  }

  setType(type) {
    this.setState({ type })
  }


  inputChange(inputValue) {
    console.log(' Input Value: ', inputValue)
    this.setState({inputValue})
  }

  deleteToDo(todoIndex) {
    let { todos } = this.state
    todos = todos.filter((todo) => todo.todoIndex !== todoIndex)
    this.setState({ todos })
  }

  toggleComplete(todoIndex) {
    let todos = this.state.todos
    todos.forEach((todo) => {
      if(todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete
      }
    })
    this.setState({ todos })
  }

  submitToDo() {
    if (this.state.inputValue.match(/^\s*$/)) { 
      return
    }
    ////checks if inputValue is empty or only contains whitespace. If it's empty, returns without doing anything else.

    const todo = { //to do object
      title: this.state.inputValue,
      todoIndex,
      complete:false
    }
    todoIndex++ //increments the index
    const todos = [...this.state.todos, todo] //pushes the new todo to the existing array of todos
    this.setState({todos, inputValue: ''}, () => {
      console.log('State:', this.state)
    })
  }

  render () {
    const { inputValue, todos, type } = this.state
    return (
      <View style={styles.container}>
        <ScrollView 
          keyboardShouldPersistTaps='always' 
          style={styles.content}>
          <Heading/>
          <Input inputValue = {inputValue}
                 inputChange = {(text) => this.inputChange(text)} />
          <ToDoList 
            type={type}
            toggleComplete={this.toggleComplete}
            deleteToDo={this.deleteToDo}
            todos = {todos} />
          <Button submitTodo={this.submitToDo}/>
        </ScrollView>
        <TabBar type={type} setType={this.setType} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60
  }
});

export default App