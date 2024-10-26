// import { useState } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import Instructions from "./components/Instructions";
import StartGame from "./components/StartGame";
import Questions from "./components/Questions";

function App() {
  // const [startGame, setStartGame] = useState(false);

  return (
    <>
      <div className="container">
        <Welcome />
        <Instructions />
        <StartGame />
        <Questions />
      </div>
    </>
  );
}

export default App;
