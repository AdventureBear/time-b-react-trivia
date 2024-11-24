// This component will break each of the answers down to a single button which will have its own method calls

import { SetStateAction, useState } from "react";
// Here, we need Dispatch to allow the passing in of a useState setter
import { Dispatch } from "react";

// This interface gives the Types of variable being passed from AnswerBlock, again using : Props
// Dispatch is then set up in the Props and passed into the function with the Type of variable we should return
//   to the original variable
interface Props {
  answer: string;
  gridCell: number;
  correct: number;
  setShowStory: (arg: boolean) => void
  // setShowStory: Dispatch<SetStateAction<number>>;
  guesses: number;
  setGuesses: (arg: number)=>void
  // setGuesses: Dispatch<SetStateAction<number>>;
}

function AnswerButton({
  answer,
  gridCell,
  correct,
  setShowStory,
  guesses,
  setGuesses,
}: Props) {
  // Method to determine the grid to place the button into so everything is laid out nicely
  // This will be called by the className on each individual button
  function defineGridCell(gridCell: number) {
    switch (gridCell) {
      case 0:
        return "answer r1c2";
      case 1:
        return "answer r1c4";
      case 2:
        return "answer r2c2";
      case 3:
        return "answer r2c4";
    }
  }

  // List of background colors for the buttons
  // const color = ["blue", "green", "red"];

  // UseState which will control the re-rendering of the button background color
  const [answerColor, setAnswerColor] = useState("blue");
  const [guessed, setGuessed] = useState(false)

  function isCorrect(response, correct) {
      if (response === correct) {
        return true
      } else {
        return false
      }
  }

  // Method which will control the state changes for the button background color
  // This will be called by each button individually when they are clicked
  // If the gridcell value matches the correct answer: green; otherwise: red
  // If the correct answer is found, show the story by flipping the Dispatch setter flag
  // We need to limit the guess count to 3 so a score always shows up
  // We need to also stop multiple clicks on a button from registering

  function handleClick(response: number) {
    if (guessed || guesses===4) return
    setGuessed(true)
    if (isCorrect(response, correct)) {
      updateAnswered()

      setAnswerColor("green");
      setShowStory(1);
    } else {
      setAnswerColor("red");
      setGuesses(guesses + 1);
    }
  }

  // Here we'll check to see if the button was answered correctly or not
  //   If it was, we'll disable all buttons; if not, it'll disable only the one button so it can't trigger again
  return (
    <>
      <button
        className={defineGridCell(gridCell)}
        style={{
          backgroundColor: answerColor,
          margin: "5px",
          padding: "15px",
        }}
        onClick={() => handleClick(gridCell)}
      >
        {answer}
      </button>
    </>
  );
}

export default AnswerButton;
