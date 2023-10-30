import PropTypes from 'prop-types'

import { MdDelete } from 'react-icons/md'

import './style.css'

//retorno da lista com as tarefas
const ListTodo = ({todos, checked, remove}) =>{
    return(
        <ul className='todo-list'>
        {
          /* Mapeamento das tarefas */
          todos.map(todo => (
            <li key={todo.id} className={todo.check ? 'todo check' : 'todo'}>
              <span className='todo' onClick={() => checked(todo) && checked} role='button'>
                {todo.titulo}
              </span>
              <button type='button' className='delete' onClick={()=>remove(todo) && remove}>
                <MdDelete size={28} color='gray'/>
              </button>
            </li>
          ))
        }
      </ul>
    )
}

ListTodo.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            titulo: PropTypes.string.isRequired,
            check: PropTypes.bool.isRequired,
        })
    ).isRequired,
    checked: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
}

export default ListTodo
