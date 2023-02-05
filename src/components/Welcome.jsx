import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import "./Welcome.css"

const Welcome = () => {

  const [quizState, dispatch] = useContext(QuizContext)
  
  return (
    <div id='welcome'>
        <h1>Quiz de Astronomia</h1>
        <h2>Seja Bem-vindo</h2>
        <p>Clique no botão abaixo para começar:</p>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
    </div>
  )
}

export default Welcome;

