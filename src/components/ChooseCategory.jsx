import React from 'react'

import { useContext } from 'react'
import { QuizContext } from '../context/quiz'



import './ChooseCategory.css'

function ChooseCategory() {

  const [quizState, dispatch] = useContext(QuizContext)

  const chooseCatAndReorderQuest = (category) => {
    dispatch({ type: "START_GAME", payload: category });

    dispatch({ type: "REORDER_QUESTIONS" })
  }

  return (
    <div id='category'>
        <h2>Escolha uma categoria</h2>
        <p>As perguntas serão referentes a um dos temas abaixo:</p>
        <div id='buttonCategory'>
            {quizState.questions.map((question) => (
                <button 
                    onClick={() => chooseCatAndReorderQuest(question.category)} 
                    key={question.category}>
                        {question.category}
                </button>
            ))}
        </div>
  
    </div>
  )
}

export default ChooseCategory