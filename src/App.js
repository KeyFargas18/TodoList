import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
//import './App.css';

const todos = [
  {text: 'Cortar narajas', Completed: false},
  {text: 'Terminar mi curso de react', Completed: false},
  {text: 'Prosperar en mi negocio', Completed: false}
];

function App(props) {
  return (
    <React.Fragment>

      <TodoCounter /> {/*Contador de los TODOs*/}

      <TodoSearch /> {/*Buscador de los TODOs*/}

      <TodoList> 
        {todos.map(todos => (
          <TodoItem key={todos.text} 
          text={todos.text}
          completed={todos.completed}/>
        ))}
        </TodoList>

        <CreateTodoButton txt="hola" /> {/*Nos va abrir el modal para crear nuevos TODOs*/} 
   
    </React.Fragment>
  );
}

export default App;

//los parametros ahora son propiedades
//TodoItem sirve para reutilizar la lista de los TODO