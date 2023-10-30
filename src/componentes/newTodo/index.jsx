import { useState } from 'react'
import PropTypes from 'prop-types'

import './style.css'

const InputTodo = ({ onNewTodo }) => {
    const ENTER_KEY = 13,
          ESC_KEY = 27

    const [tarefa, setTarefa] = useState('')

    //função para quando a tecla ESC for apertada apagar o que está no input
    const apagar = () => {
        setTarefa('')
      }

    //função para quando a tecla ENTER for apertada enviar a tarefa para a função que a add na lista
    const enviar = () => {
        if(onNewTodo){
            onNewTodo(tarefa)
            apagar()
        }
    }

    //setando o nome da tarefa
    const onChange = (event) => {
        setTarefa(event.target.value)
      }

    //verificação se a tecla ESC ou ENTER foram apertadas
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

    //INPUT de retorno
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
