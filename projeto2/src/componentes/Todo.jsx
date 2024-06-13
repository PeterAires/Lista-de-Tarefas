import React from 'react'


const Todo = ({todo, removerTodo, completarTodos}) => {
  return (
    <div className='todo'
    style={{ textDecoration: todo.completo ? 'line-through' : ''}}>
            <div className='conteudo'>
              <p>{todo.texto}</p>
              <p className='categotia'>
                ({todo.categoria})
              </p>
            </div>
            <div>
              <button className='completar' 
              onClick={() => completarTodos(todo.id)}>Completar Tarefa</button>
              <button className='remover' 
              onClick={() => removerTodo(todo.id)}>X</button>
            </div>
          </div>
  )
}
//todo.id (ele vai mandar o id pro remover todo, pra ai sim comecar o processo de verificação)
export default Todo
