import { useState } from 'react'
import './App.css'
import Todo from './componentes/Todo'
import TodoFormulario from './componentes/TodoFormulario'


function App() {

  



  //simulando um banco de dados
  //objetos dentro do useState
  const [todos, setTodos] = useState([])

  //veja todo o processo no formulario,,, Recebemos como parametros os useStates com as interaçoes do usuario salvas, pegamos e criamos uma variavel onde primeiro: COPIAMOS a lista atual(todos) adicionando: o Id que tem um metodo para gerar um numero aleatorio, o texto e a categoria mantemos (o que o usuario digitou) e o completo que verifica se a terefa foi completa, no FINAL mudados o todo verdadeiro pra copia que acabamos de criar, assim adicionamos a lista a tarefa,categoria,id(nos criamos), completo(nos criamos)
  const adicionarTodo = (texto, categoria) => {
    const novoTodos = [...todos, {
        id: Math.floor(Math.random() * 10000),
        texto,
        categoria,
        completo: false,
      }] 
    setTodos(novoTodos)
  }

  //Web Storage
  // salvar dados
  localStorage.setItem('tarefas', JSON.stringify(todos));
  // resgatar os dados
const tarefasLocalStorage = JSON.parse(localStorage.getItem('tarefas'))



  //primeiro recebos o id do todo, cada tarefa vai ter seu todo, o todo meio que é o cara que expoe o id, pois que colocar um onclick com a função removerTodo{todo.id} todo (como se fosse a tarefa aual) e o id(o id do todo que é a terefa atual)
  //criamos uma copia do array atual, e verificamos a condição:  se o todo.id (todo representa a TAREFA ATUAL, ou seja a tarefa que o usuario clikou) o id dela existe na lista, se existir ele remove deixando o todo null, ou seja deixando aquela tarefa atual nulo, mesmo que apagando,,,,, o filter aqui serve pra substituir coisas ou seja apagar,,,, no final mudar o todos para a copia que acabamos de criar
  
  const removerTodo = (id) => {
    const novoTodos = [...todos] 
    const filterTodos = novoTodos.filter(todo => todo.id !== id ? todo : null)
    setTodos(filterTodos)
  }

//mesma coisa, recebemos o id do todo(tarefa atual), criamos uma copia do array em uma variavel e verificamos: se o todo.id (id da tarefa atual/clikada) existir dentro de Todos o todo.completo(o valor da tarefa que foi clikada) vai ficar o inverso doq tava antes, entao se nao tava completa depois desse processo vai ficar

  const completarTodos = (id) => {
    const novoTodos = [...todos]
    novoTodos.map((todo) => todo.id === id ? todo.completo = !todo.completo : todo)
    setTodos(novoTodos)
  }

  //mensagem de lista vazia
  const todoVazio = todos.length === 0

  //aqui retornamos: uma mensagem de lista vazia,,, um map para mostrar todas as tarefas dentro da lista,,,passamos tambem o componente Todo, onde por props enviamos a key, o todo, e outras duas funçoes
  //e ao final, temos outro componente (formulario) onde passamos a função para adicionar uma Tarefa
 //como o map vai gerar cada todo dentro de todos, o 'nome' da tarefa fica todo, e nao precisamos declarar ele, ele basicamente é o nome da div onde os 
//alem disso, o map() cria o todo, criamos ele e a partir dai ele meio que vira o nome da cada tarefa, cada tarefa que criamos tem seu todo, e utilizamos ele para manipular dados como todo.id,,, assim a cada nova tarefa que adicionamos no useState ( Todos), o map vai criar um todo, ou uma forma melhor de entender, o 'todo' representa a (TAREFA ATUAL), ja que ele  vai vai percorrer todas pelo metodo map()
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
         {tarefasLocalStorage.map((tarefa) => (
  <Todo key={tarefa.id} todo={tarefa} removerTodo={removerTodo} completarTodos={completarTodos}/>
 ))
}
      </div>
      <TodoFormulario adicionarTodo={adicionarTodo}/>
    </div>
  )
}

export default App
//todo (passada pelo map() representa a tarefa atual com que estamos lidando)