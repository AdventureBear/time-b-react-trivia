// This component contains all of the details for the question:
//   The question itself, the answers, the correct answer, the score, the story and the next/previous buttons

// In order to re-render when changes are made, we need state
import { useState} from "react";
// In order to use the other components, we need to import them
// import AnswerBlock from "./AnswerBlock";
// import AnswerButton from "./AnswerButton";
import {QuestionType} from "../types.ts";
import Question from "./Question.tsx";

// In order for the other components to understand what data type should be expected, an interface is needed
// which will detail each of list items by their type
// In order to properly access the list within the question Object, it needs to be set to Array with the type of
//   data that is inside of the list - this then needs to be passed down the same way to other components


// Create a const to hold all of the details about each question


// So, what we would like to happen is the following:
//   1. Start at question 0
//   2. Randomized the next question and keep track of the order
//   3. Keep track of the score
//   4. If a guess is wrong, reduce the score they COULD recieve: 100%. 50%, 25%, 0%
//   5. Show the # out of # questions they need to answer
//   6. Allow them to return to a previous question and guess again
//   7. If a previous question was guessed, show the answer they chose

// To keep track of the order of questions visited, we need an Array to store the order
// Store a random order of questions with 0 always being the start
// We need to set the type of value contained with the temp array holder - use : type or Array<type>

// Retain the current index being viewed from the random list above
let currentPos = 0;

// This function needs to take the questions, break them down into their individual parts and then pass those parts
// down to the AnswerBlock and AnswerButton components for futher breakdown
// First, it will map out the objects for each index in the question array and pass them to questionDetails along with the index #
// We will need to set the index # of the list as the key so React will synch everything
// Then we pass the answers and the correct answer down to AnswerBlock
//   this will require an interface on AnswerBlock so that it knows the Types of variables it should be accepting
function Questions(
    {
      randomQuestionList,
      questionList
    }:{
      randomQuestionList: QuestionType[]
      questionList: QuestionType[]
}) {
  // Used to display the active question
  // It does this by initially setting the first question to 0 and hence the state to 0
  // It send this to the div container and changes the CSS from none to block if the index = the active index value
  const [activeIndex, setActiveIndex] = useState<number>(0);
  // In order to update the score, we need to keep track of how many guesses are made per question
  // This will have to be reset to 0 for each new question
  const [guesses, setGuesses] = useState<number>(0);
  const [totalScore, setTotalScore] = useState<number>(0);

  // Set the story to visible if the correct answer is quessed
  const [showStory, setShowStory] = useState<boolean>(false);



  // This controls the Next button
  const handleNext = ( ) => {
    // If the next button is within the limit, generate a random question to view next
    if ( currentPos < randomQuestionList.length) {
          currentPos += 1;
          setActiveIndex(randomQuestionList[currentPos]);
          setShowStory(0);
          setGuesses(0);
          // setTotalScore(totalScore + scoreUpdate);
        }
  }

  // This controls the Previous button
  const handlePrev = ( ) => {
    if ( currentPos === 0) {
      // It will check to make sure the buttons remain within the length of the questions listing
      setActiveIndex(randomQuestionList[0]);
    } else  {
      currentPos -= 1;
      setActiveIndex(randomQuestionList[currentPos]);
    }
  }


  return (
    <>
          <Question
              question={questionList[activeIndex]}
              showStory={showStory}
            setShowStory={setShowStory}
            guesses={guesses}
            setGuesses={ setGuesses}
            handlePrev = {handlePrev}
            handleNext = {handleNext}
            currentPos = {currentPos}
            length = {questionList.length}
            totalScore = {totalScore}
            possibleScore = {questionList[activeIndex].score[guesses]}
            maxScore = {questionList[activeIndex].score[0]}
              setTotalScore={setTotalScore}
          />
    </>
  );
}

export default Questions;
