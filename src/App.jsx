import './App.css'

import { useContext } from 'react'
import { QuizContext } from './context/quiz'

import Welcome from './components/Welcome'
import Question from './components/Question'
import { useEffect } from 'react'
import GameOver from './components/GameOver'
import ChooseCategory from './components/ChooseCategory'

function App() {

  const [quizState, dispatch] = useContext(QuizContext)


  return (
    <div className="App">
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Category" && <ChooseCategory />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  )
}

export default App
