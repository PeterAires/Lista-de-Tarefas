import { useState } from 'react'
import './App.css'
import Todo from './componentes/Todo'
import TodoFormulario from './componentes/TodoFormulario'


function App() {
  //simulando um banco de dados
  //objetos dentro do useState
  const [todos, setTodos] = useState([])

  const adicionarTodo = (texto, categoria) => {
    const novoTodos = [...todos, {
        id: Math.floor(Math.random() * 10000),
        texto,
        categoria,
        completo: false,
      }] 
    setTodos(novoTodos)
  }

  const removerTodo = (id) => {
    const novoTodos = [...todos] 
    const filterTodos = novoTodos.filter(todo => todo.id !== id ? todo : null)
    setTodos(filterTodos)
  }

  const completarTodos = (id) => {
    const novoTodos = [...todos]
    novoTodos.map((todo) => todo.id === id ? todo.completo = !todo.completo : todo)
    setTodos(novoTodos)
  }

  const todoVazio = todos.length === 0

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className='todo-lista'>
        {todoVazio ? (<p>A lista esta vazia :(</p>)
        : 
        (<p></p>)
        }

         {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} removerTodo={removerTodo} completarTodos={completarTodos}/>
         ))}
      </div>
      <TodoFormulario adicionarTodo={adicionarTodo}/>
    </div>
  )
}

export default App
