//#region Static
import "./App.css";
//#endregion

//#region Components
import GameOver from "./components/GameOver";
import PickCategory from "./components/PickCategory";
import Question from "./components/Question";
import Welcome from "./components/Welcome";
//#endregion

import { useContext } from "react";
import { QuizContext } from "./context/quiz";

function App() {
  const [quizState] = useContext(QuizContext);

  return (
    <div className="app">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Category" && <PickCategory />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
}

export default App;
