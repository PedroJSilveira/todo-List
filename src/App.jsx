import { useState } from 'react'

import InputTodo from './componentes/newTodo'
import ListTodo from './componentes/newList'


const App = () =>{
  const [todos, setTodos] = useState([])

  //adicionando nova tarefa
  const onNewTodo = (tarefa) =>{
    setTodos([...todos, {id: new Date().getTime(), titulo: tarefa, check: false}])
  }


  //alterando se a tarefa foi feita ou não
  const checked = (todo) => {
    setTodos(todos.map((obj)=>(
      obj.id == todo.id ? {...obj, check: !todo.check} : obj
    )))
  }

  //removendo a tarefa
  const remove= (todo) =>{
    setTodos(todos.filter((obj)=>obj.id !== todo.id))
  }



  return(
    <section id='app' className='container'>
      <header>
        <h1 className='title'>todo List</h1>
      </header>

      <section className='main'>
        {/* componente do input */}
        <InputTodo onNewTodo={onNewTodo}/>
        {/* componente da lista */}
        <ListTodo todos={todos} checked={checked} remove={remove}/>
      </section>

    </section>
  )
}

export default App;
