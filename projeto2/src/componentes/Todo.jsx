import React from 'react'


const Todo = ({todo}) => {
  return (
    <div className='todo'>
            <div className='conteudo'>
              <p>{todo.text}</p>
              <p className='categotia'>
                ({todo.category})
              </p>
            </div>
            <div>
              <button className='completar'>Completar Tarefa</button>
              <button className='remover'>X</button>
            </div>
          </div>
  )
}

export default Todo
