import { useState } from "react";
import Questions from "./Questions";
import {QuestionType} from "../types.ts";

// This creates a Start Game button
// Upon clicking, it will hide itself and display the first of the questions
function StartGame(
    {
        currentQuestion,
        handleNext,
        handlePrev,
        guesses,
        setGuesses,
        showStory,
        setShowStory
    }: {
        currentQuestion: QuestionType,
        handleNext: (score: number) => void;
        handlePrev: () => void;
        guesses: number;
        setGuesses: () => void;
        showStory: boolean
        setShowStory: () => void;
    }
) {
  // Holds the state of the Start button - True = shown; False = hidden
  const [showme, setShowMe] = useState(true);

  // When called, flips the state of the Start button
  // function startGame() {
  //   setShowMe(0);
  // }

  return (
    <>
      {/* The div style is used to control the visibility of the button by make it part of the DOM or not */}
      <div className="center" style={{ display: showme ? "block" : "none" }}>
        <button className="start" onClick={() => setShowMe(false)}>
          Start Game
        </button>
      </div>
      {/* Below is the question block - it is controlled in the same manner as the Start button but in reverse order */}
      <div
        className="questionBox"
        style={{ display: showme ? "none" : "block" }}
      >
          <Questions
              guesses={guesses}
              setGuesses={setGuesses}
              showStory={showStory}
              setShowStory={setShowStory}
              handleNext = {handleNext}
              handlePrev = {handlePrev}
              currentQuestion={currentQuestion}
          />
        {/*<Questions randomQuestionList={randomQuestionList} questionList={questionList}/>*/}
      </div>
    </>
  );
}

export default StartGame;
