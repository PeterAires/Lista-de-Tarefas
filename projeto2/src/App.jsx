import { useState } from 'react'
import './App.css'
import Todo from './componentes/Todo'
import TodoFormulario from './componentes/TodoFormulario'


function App() {
  //simulando um banco de dados
  //objetos dentro do useState
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Criar funcionalidade X no sistema',
      category: 'Trabalho',
      isCompleted: false,
    },
    {
      id: 2,
      text: 'ir para a academia',
      category: 'Pessoal',
      isCompleted: false,
    },
    {
      id: 3,
      text: 'Estudar React',
      category: 'Estudos',
      isCompleted: false,
    }
  ])


  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className='todo-lista'>
         {todos.map((todo) => (
          <Todo todo={todo}/>
         ))}
      </div>
      <TodoFormulario/>
    </div>
  )
}

export default App
