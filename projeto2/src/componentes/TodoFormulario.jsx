import { useState } from 'react'

//primeiro temos os dois useStates que vao pegar o que o usuario interagir
//(quando for preenchido) no formulario temos: o e.preventdefault para evitar que a pagina carregue, ja que um botao de formulario faz ela recarregar,,, um if que verifica se o usuario deixou de escrever algo e exibe uma mensagem erro,,,passamos pra funcão que esta no app para adicionar o titulo e categoria,,,voltamos os useStates pra nada, pra nao salvar a tarefa passada que o ususario passou
//retornamos um form com o onsubmit pra função formulario,,, um input de text e uma função que salva o usestate, e passamos que o seu value é titulo, para assim que depois que o usuario coloque uma tarefa, o campo de input zere, poupando que ele gaste tempo apagando
//temos um select com o value de categoria para zerar o input tambem,,,uma função para o useState armazenar a escolha,,, 4 opçoes com 3 delas tendo um valor (esse valor em string é que vai ser salvo no useState)
const TodoFormulario = ({adicionarTodo}) => {

    const [titulo,setTitulo] = useState('')
    const [categoria,setCategoria] = useState('')

    const Formulario = (e) => {
      //função abaixo para evitar o recarregamento da pagina pelo formulario 
        e.preventDefault()
        if(!titulo || !categoria) {
          window.alert('faltou algo')
          return
        };
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
