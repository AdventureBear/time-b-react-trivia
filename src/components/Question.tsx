import React, {SetStateAction} from 'react'
import AnswerButton from "./AnswerButton.tsx";
import {Dispatch} from "react";


interface QuestionType {
    id: number;
    question: string;
    answers: Array<string>;
    correct: number;
    score: Array<number>;
    story: string;
}


const Question = (
    {
        question,
        handleNext,
        handleBack,
        guesses,
        setGuesses,
        setShowStory,
        showStory,
        currentPos,
        totalScore,
        possibleScore,
        maxScore
    }:{
        question: QuestionType
        handleNext: (arg:number)=> void
        handleBack: ()=> void
        guesses: number
        setGuesses: Dispatch<SetStateAction<number>>
        setShowStory: Dispatch<SetStateAction<number>>
        showStory: number
        currentPos: number,
        length: number,
        totalScore:number,
        possibleScore: number,
        maxScore: number
    }) => {
    return (
        <div className="questionGrid">
            <div className="question">{question.question}</div>
            {/*
              Ok - looks like we were trying to be TOO fancy - AnswerBlock component not needed as an intermediate to
              the AnswerButton block after all to just map out the answers; we can do that within this component which
              will make passing down the score and quesses work the way the internet is saying they should work.

              With the list of answers now in the component, we can map each individual answer out to a button
              We'll also need to pass along the correct answer so that each button knows if it's the correct one or not
              Using the index, we'll assign each answer to a grid cell for formatting
              Again, each variable passed will need an interface on AnswerButton
            */}
            {question.answers.map((answer, index) => (
                <AnswerButton
                    key={answer}
                    answer={answer}
                    gridCell={index}
                    correct={question.correct}
                    setShowStory={setShowStory}
                    guesses={guesses}
                    setGuesses={setGuesses}
                />
            ))}
            <div
                className="r3"
                style={{display: showStory ? "block" : "none"}}
            >
                {question.story}
            </div>
            <div className="r4c2">
                <button
                    className="previous"
                    onClick={() => handleBack()}
                >
                    Previous
                </button>
            </div>
            <div className="r4c3">
              <span className="theScore">
                Question {currentPos + 1} of {length}
              </span>
                <br/>
                <span className="theScore">
                Possible Score: {possibleScore} out of{" "}
                    {maxScore}
              </span>
                <br/>
                <span className="theScore">Total Score: {totalScore}</span>
            </div>
            <div className="r4c4">
                <button
                    className="next"
                    onClick={() =>
                        handleNext(possibleScore)
                    }
                >
                    Next
                </button>
            </div>
        </div>
    )
}
export default Question
