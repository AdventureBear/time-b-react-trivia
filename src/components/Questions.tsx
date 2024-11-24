// This component contains all of the details for the question:
//   The question itself, the answers, the correct answer, the score, the story and the next/previous buttons

// In order to re-render when changes are made, we need state
import {useEffect, useState} from "react";
// In order to use the other components, we need to import them
// import AnswerBlock from "./AnswerBlock";
import AnswerButton from "./AnswerButton";
import {QuestionType} from "../types.ts";
import ScoreBoardComponent from "./ScoreBoardComponent.tsx";

// In order for the other components to understand what data type should be expected, an interface is needed
// which will detail each of list items by their type
// In order to properly access the list within the question Object, it needs to be set to Array with the type of
//   data that is inside of the list - this then needs to be passed down the same way to other components


// Create a const to hold all of the details about each question






function Questions(
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
    }) {
  // console.log(randomQuestionList)
  console.log("current question: ", currentQuestion)
  // // Used to display the active question
  // // It does this by initially setting the first question to 0 and hence the state to 0
  // // It send this to the div container and changes the CSS from none to block if the index = the active index value
  // const [activeIndex, setActiveIndex] = useState(0);
  //
  // // In order to update the score, we need to keep track of how many guesses are made per question
  // // This will have to be reset to 0 for each new question
  // const [guesses, setGuesses] = useState(0);
  // const [totalScore, setTotalScore] = useState(0);
  //
  // // Set the story to visible if the correct answer is quessed
  // const [showStory, setShowStory] = useState(0);

// const handleNext = ( scoreUpdate: number) => {
//   if (currentPos < questionList.length) {
//     currentPos += 1; setActiveIndex(randomQuestionList[currentPos]);
//     setShowStory(0);
//     setGuesses(0);
//     setTotalScore(totalScore + scoreUpdate);
//   }
//   setActiveIndex(randomQuestionList[currentPos]);
// }
//
// const handlePrev = () => {
//   if ( currentPos == 0) {
//     setActiveIndex(0);
//   } else {
//     currentPos -= 1;
//     setActiveIndex(randomQuestionList[currentPos]);
//   }
// }


  //handle navigation separated into 3 concerns (random list, prev and next)



  return (
    <>

          <div className="questionGrid">
            <div className="question">{currentQuestion.question}</div>

            {currentQuestion.answers.map((answer, index) => {
                return (
                  <AnswerButton
                    key={answer}
                    answer={answer}
                    gridCell={index}
                    correct={currentQuestion.correct}
                    setShowStory={setShowStory}
                    guesses={guesses}
                    setGuesses={setGuesses}
                  />
            )})}

            <div
              className="r3"
              style={{ display: showStory ? "block" : "none" }}
            >
              {currentQuestion.story}
            </div>

            <div className="r4c2">
              <button
                className="previous"
                onClick={() => handlePrev()}
              >
                Previous
              </button>
            </div>

           {/*old scoreboard was here*/}

            <div className="r4c4">
              <button
                className="next"
                onClick={() =>
                    handleNext( currentQuestion.score[guesses])
                }
              >
                Next
              </button>
            </div>
          </div>

     </>
  );
}

export default Questions;
