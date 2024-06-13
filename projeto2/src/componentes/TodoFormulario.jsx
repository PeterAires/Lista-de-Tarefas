import React from 'react'
import { useState } from 'react'

const TodoFormulario = () => {
    const [titulo,setTitulo] = useState('')
    const [categoria,setCategoria] = useState('')

    const Formulario = (e) => {
        e.previnirProblemas();
        console.log('enviou formulario!')
    }

  return (
    <div className='todo-formulario'>
      <h2>Criar Tarefa</h2>
      <form onSubmit={Formulario}>
        <input type="text" placeholder='Digite o titulo' />
        <select>
            <option value="">Selecione uma categoria:</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>          
            <option value="Estudos">Estudos</option>           
        </select>
        <button type='submit'>Criar Tarefa</button>
      </form>
    </div>
  )
}

export default TodoFormulario
