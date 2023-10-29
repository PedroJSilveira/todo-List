import { useState } from 'react'
import PropTypes from 'prop-types'

import './style.css'

const InputTodo = ({ onNewTodo }) => {
    const ENTER_KEY = 13,
          ESC_KEY = 27

    const [tarefa, setTarefa] = useState('')

    const apagar = () => {
        setTarefa('')
      }

    const enviar = () => {
        if(onNewTodo){
            onNewTodo(tarefa)
            apagar()
        }
    }

    const onChange = (event) => {
        setTarefa(event.target.value)
      }

    const onKeyDown = (event) => {
        if (event.which === ENTER_KEY)
        {
          enviar()
        }
        else if(event.which === ESC_KEY)
        {
          apagar()
        }
    }

    return (
        <input
            className='new-todo'
            placeholder='o que precisa ser feito?'
            value={tarefa}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    )
}

InputTodo.propTypes = {
    onNewTodo: PropTypes.func.isRequired,
}

export default InputTodo
