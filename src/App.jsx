import { useState } from 'react'

import InputTodo from './componentes/newTodo'
import ListTodo from './componentes/newList'


const App = () =>{
  const [todos, setTodos] = useState([])

  const onNewTodo = (tarefa) =>{
    setTodos([...todos, {id: new Date().getTime(), titulo: tarefa, check: false}])
  }


  const checked = (todo) => {
    setTodos(todos.map((obj)=>(
      obj.id == todo.id ? {...obj, check: !todo.check} : obj
    )))
  }

  const remove= (todo) =>{
    setTodos(todos.filter((obj)=>obj.id !== todo.id))
  }



  return(
    <section id='app' className='container'>
      <header>
        <h1 className='title'>todo List</h1>
      </header>

      <section className='main'>
        <InputTodo onNewTodo={onNewTodo}/>
        <ListTodo todos={todos} checked={checked} remove={remove}/>
      </section>

    </section>
  )
}

export default App;
