import React from 'react'

//primeiro recebemos tudo e deixamos eles como objetos para ficar mais facil de trabalhar
// a pergunta é de onde vem o 'todo'? ele vem da função map, criamos ele e a partir dai e como se ele fosse o nome de cada tarefa dentro de todas as tarefas ou melhor, o todo representa a (TAREFA ATUAL), ai usamos ele para manipular dados, 
//o style ali verifica se o todo esta completo, e se sim adiciona a linha nele (indicar que a terefa foi completa)
//duas divs onde vao exibir o texto e a gategoria da tarefa
//por ultimo, temos dois botões que ao acionalos, passam o id do todo (cada id é inuco) em formato de parametro para as duas funções


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
