import { useState } from 'react'

const TodoFormulario = ({adicionarTodo}) => {
    const [titulo,setTitulo] = useState('')
    const [categoria,setCategoria] = useState('')

    const Formulario = (e) => {
      //função abaixo para evitar o recarregamento da pagina pelo formulario 
        e.preventDefault()
        if(!titulo || !categoria) return;
        adicionarTodo(titulo,categoria)
        setTitulo('')
        setCategoria('')
   
    }
    
  return (
    <div className='todo-formulario'>
      <h2>Criar Tarefa</h2>
      <form onSubmit={Formulario}>
        <input type="text" 
        placeholder='Digite o titulo' 
        onChange={(e) => setTitulo(e.target.value)}
        value={titulo}/>

        <select 
        value={categoria} 
        onChange={(e) => setCategoria(e.target.value)}>
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
