import React, { useState } from "react";
import { Alert, FlatList, ScrollView, Settings, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome6';


console.log(Date.now().toString())
const ToDoScreen = () => {
    // init  local state
    const[todo, setTodo] = useState("")
    const[todoList, setTodoList] = useState([])
    const[editedTodo, setEditedTodo] = useState(null)

    //handle add todo
    const handleAddTodo = () => {
        //struktur of a single todo item
        // {
        //     id: 
        //     title:  
        // }

        if (todo === '') {
            return;
        }

        setTodoList([...todoList, {id: Date.now().toString(), title: todo }] );
        setTodo("");
    }

    //handle delete todo
    const handleDeleteTodo = (id) => {
        const updatedTodoList = todoList.filter((todo) => todo.id !== id)
        
        setTodoList(updatedTodoList);
    }

    //handle edited todo
    const handleEditTodo = (todo)=>{
        setEditedTodo(todo)
        setTodo(todo.title)
    }

    //handle update
    const handleUpdateTodo = () => {
        const updatedTodos = todoList.map((item) =>{
            if (item.id === editedTodo.id) {
                return {...item, title: todo}
            }
            return item
        })
        setTodoList(updatedTodos);
        setEditedTodo(null);
        setTodo('');
    }

    //render todo
    const renderTodos = ({item, index}) => {
        return( 
            <View 
              style={{
                backgroundColor:'pink',
                borderRadius:6, 
                paddingHorizontal: 6, 
                paddingVertical: 8,
                marginBottom:12,
                flexDirection:'row',
                alignItems:'center',
                height:80,
                elevation: 10
                }}>

                <Text style={{fontSize: 20, fontWeight:'800', flex: 1}}>{item.title}</Text>
                <Icon name="pencil" size={20} color="black" marginHorizontal= {15} onPress = {() => handleEditTodo(item)} />;
                <Icon name="trash" size={20} color="black" marginHorizontal= {15} onPress = {() => handleDeleteTodo(item.id)}/>;
            </View>
        )
    }
    return(
        <ScrollView>
            <View style={{marginHorizontal: 16}}>
            <TextInput
            style={{
            borderWidth: 4,
            borderColor:'pink',
            borderRadius: 6,
            paddingVertical: 12,
            paddingVertical: 8,
            marginVertical: 20,
           }}
           placeholder="Add a task                                                     by Ijudd"
           placeholderTextColor={'black'}
           value= {todo}
           onChangeText={(userText) => setTodo(userText)}
          />

        {
            editedTodo ? (<TouchableOpacity 
          style={{
           backgroundColor:"black",
           borderRadius: 6,
           paddingVertical: 12,
           marginVertical:20,
            
           }}
           onPress={() => handleUpdateTodo()}
        >
           <Text style={{color:"white",fontWeight: 'bold',fontSize: 20, textAlign:'center'}}>
           Save
           </Text>
          </TouchableOpacity>
          ) : (<TouchableOpacity 
          style={{
           backgroundColor:"black",
           borderRadius: 6,
           paddingVertical: 12,
           marginVertical:20 
           }}
           onPress={() => handleAddTodo()}
        >
           <Text style={{color:"white",fontWeight: 'bold',fontSize: 20, textAlign:'center'}}>
           Add
           </Text>
          </TouchableOpacity>)
        }

           {/* Render todo list */}
           
           <FlatList data = {todoList} renderItem={renderTodos}/>
        </View>
        </ScrollView>
        
    )
}

export default ToDoScreen

const styles = StyleSheet.create({})