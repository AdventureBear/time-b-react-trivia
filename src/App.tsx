// import { useState } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import Instructions from "./components/Instructions";
import StartGame from "./components/StartGame";
import {QuestionType} from "./types.ts";
import {useState} from "react";
import Questions from "./components/Questions.tsx";
import ScoreBoardComponent from "./components/ScoreBoardComponent.tsx";

const randomQuestionList: number[] = [0];

const questionList: QuestionType[] = [
    {
        id: 1,
        question: "What is a mimic?",
        answers: [
            "Another name for a leprechaun.",
            "Someone that imitates you.",
            "A carnivorous chest.",
            "A miniature microphone.",
        ],
        correct: 2,
        score: [40, 20, 10, 1],
        story:
            "An interesting one. This is not only a shape-changing monster (usually in the form of a chest of treasure) from the Dungeons & Dragons game I loved playing as a teen but could also be used to descibe me. I look like a person but tend to act ... well ... differently and am therefore often misunderstood. So, I've become good at playing a part, usually a wallflower.",
    },
    {
        id: 2,
        question:
            "What is the name of the villian in the Dungeons & Dragons cartoon series?",
        answers: ["Voldamort", "Vladamir", "Vermathax", "Venger"],
        correct: 3,
        score: [30, 15, 7, 1],
        story:
            "Growing up, this was one of the best cartoons of its time. Kids getting pulled into an alternate dimension where they got to play their D&D characters. Just one of many things I wish was possible in reality because at least there, I would have fit in better than here. And best of all, there was little Uni running around. :)",
    },
    {
        id: 3,
        question: "What is the full name of the SDF-1?",
        answers: [
            "Super Deformed Figure-1",
            "Super Dimensional Fortress-1",
            "Silver Dueling Falcion-1",
            "Sonic Dinner Fork-1",
        ],
        correct: 1,
        score: [30, 15, 7, 1],
        story:
            "The main battleship from the Robotech tv series. The tv series that got me started in my love of anime. A unique series at the time in that it told a complete story and wasn't afraid to show the death of a loved character.",
    },
    {
        id: 4,
        question: "Who is the King of the Monsters?",
        answers: [
            "Simba the lion.",
            "A king cobra.",
            "A black widow spider.",
            "Godzilla.",
        ],
        correct: 3,
        score: [10, 5, 2, 1],
        story: "There is only one king. And Kong ain't it. Enough said.",
    },
    {
        id: 5,
        question: "What are the names of the main characters in Genshin Impact?",
        answers: [
            "Aether and Lumine",
            "Simba and Scar",
            "Rocky and Bullwinkle",
            "Rick and Morty",
        ],
        correct: 0,
        score: [40, 20, 10, 1],
        story:
            "Typically I don't like these 3rd person hack and slash games but when I tried this one ... OMG!!! It's gorgeous! There's a huge story line, you can go anywhere and there are thousands of things to do. Just wish I had more time to play it now and not learn a new language ... but, I'll get back to it soon enough ... I hope.",
    },
    {
        id: 6,
        question:
            "What name is given to the character shown in the game background?",
        answers: [
            "The Lady Amalethia",
            "Princess Cadmine",
            "Queen Malevalent",
            "Princess Peach",
        ],
        correct: 0,
        score: [30, 15, 7, 1],
        story:
            "The Last Unicorn. Possibly the best show ever made! For a young child looking for something to believe in ... well, this did that for me. I can't wait for them to make a live action version of it.",
    },
    {
        id: 7,
        question: "How many Fred Saberhagen Swords of Power are there?",
        answers: ["One", "Three", "Seven", "Twelve."],
        correct: 3,
        score: [50, 25, 12, 1],
        story:
            "I read this many years ago. Great story about gods and swords with stange powers.",
    },
    {
        id: 8,
        question:
            "In the Piers Anthony comedy series, what state does Xanth overlap?",
        answers: ["California", "Florida", "Alaska", "Hawaii"],
        correct: 1,
        score: [20, 10, 5, 1],
        story:
            "Best series of books I've ever read. Anthony takes everyday puns and turns them on their head in ways you would not expect. And the characters are engaging and continue to show up thourghout the entire series ... now at what, 30+ books?",
    },
    {
        id: 9,
        question: "Which of the following is NOT a type of Transformer?",
        answers: ["Autobots", "Predacons", "Dinobots", "Gobots"],
        correct: 3,
        score: [20, 10, 5, 1],
        story:
            "Loved watching the cartoon series as a child. Not so much some of the 3D stuff that came after which seemed so stupid. But new live action ones - great.  And they kept Prime's voice - if they hadn't .... oooo, might have hated it then.",
    },
    {
        id: 10,
        question: "An alicorn is _________.",
        answers: [
            "the horn of a unicorn.",
            "a winged unicorn.",
            "a type of corn.",
            "a medical problem with a foot.",
        ],
        correct: 0,
        score: [50, 20, 5, 1],
        story:
            "Sorry people that watch My Little Pony ... learn to use a dictionary. A winged unicorn is a PEGACORN ... why do you insist on calling it the wrong thing?",
    },
    {
        id: 12,
        question: "In what movie is the Death Blossom attack used?",
        answers: ["Pokemon", "Star Wars", "The Last Starfighter", "Dragonball"],
        correct: 2,
        score: [30, 15, 7, 1],
        story:
            "A nice campy movie from my childhood. Guy plays video game, beats it, gets recruited by aliens. Gets to blow up bad guys. Wins. Get's the girl in the end. Nice. :)",
    },
    {
        id: 12,
        question: "Who played the character Jack in Legend?",
        answers: ["Bill Murry", "Steven Seagal", "Tom Cruise", "Bruce Willis"],
        correct: 2,
        score: [20, 10, 5, 1],
        story:
            "Another movie about a unicorn.  While the unicorn is not the main character, it's still a very good movie about the battle between light and darkness ... something I'm constantly fighting myself.",
    },
    {
        id: 13,
        question:
            "In what sci-fi tv series did an alliance of races fight The Shadows?",
        answers: ["Star Trek", "Buck Rogers", "Battlestar Galactica", "Babylon 5"],
        correct: 3,
        score: [20, 10, 5, 1],
        story:
            "A great 'modern' sci-fi tv series that tells an entire story over the five years instead of being the 'Star Trek' episodics.",
    },
    {
        id: 14,
        question: "What anime series featured a Moon Princess?",
        answers: [
            "Sailor Moon",
            "Moon Over Miami.",
            "My Little Pony",
            "Strawberry Shortcake",
        ],
        correct: 0,
        score: [30, 15, 7, 1],
        story: "Really liked this when it came out on tv years ago.",
    },
    {
        id: 15,
        question: "Which of the following are not Blizzard games?",
        answers: ["Starcraft", "Minecraft", "Warcraft", "Diablo"],
        correct: 1,
        score: [20, 10, 5, 1],
        story:
            "Strategy games are my favorite and these allowed me to play solo and multiplayer. Sadly, the multiplayer is where I found out that the world does NOT have the same ethics or morales as me and it's filled with evil people.",
    },
    {
        id: 16,
        question: "Which of the following is not science?",
        answers: ["Astrology", "Chemistry", "Biology", "Physics"],
        correct: 0,
        score: [10, 5, 2, 1],
        story:
            "I'm a chemist so I'm kind of picky about what people think is 'real' and what isn't. Psuedo-science isn't science at all ... it's just your opinion on something and since you believe it's real, your opinion doesn't mean much to me.",
    },
    {
        id: 17,
        question: "Ludo, the lovable, loyal monster is in what movie?",
        answers: ["Shrek", "Home", "Ghostbusters", "Labyrinth"],
        correct: 3,
        score: [20, 10, 5, 1],
        story:
            "Loved this movie as a kid. A little adventure and some self-learning along the way. Great characters and songs. Also, with Ludo, it's a slap in the face of 'don't judge a book by it's cover'. Something that everyone does with me without trying to get to know me at all.",
    },
    {
        id: 18,
        question: "What are the mecha in Endless Waltz known as?",
        answers: ["Priest", "Gundams", "Cyborgs", "Gadgets"],
        correct: 1,
        score: [30, 15, 7, 1],
        story:
            "What's not to love about a huge, massively overpowered robot stomping other robots for a cause. This series of anime is great.",
    },
    {
        id: 19,
        question: "What drawing style is used to design buildings?",
        answers: ["Line drawing", "Caricature", "Geometry", "Architecture"],
        correct: 3,
        score: [10, 5, 2, 1],
        story:
            "During my college years, I had no idea what I wanted to do. Found an architecture class and at that time I loved drawing. I actually liked it and did really well. Howewever, the next semester there was a problem and the teacher was an ass. So I switched to chemistry ... the only other thing I was good at that didn't involve teaching. Still wonder how my life would have been different if I had taken another path.",
    },
    {
        id: 20,
        question: "What is the name of the firstborn unicorn?",
        answers: ["Assallum", "Amaltheia", "Arboron", "Andrameda"],
        correct: 0,
        score: [100, 50, 25, 1],
        story: "From 'The Bible of the Unicorn'. ",
    },
];

function generateRandomQuestions() {
    // if (randomQuestionList.length != questionList.length) {
    // We need to set the type of value contained with the temp array holder - use : type or Array<type>
    // We want to start at 1 since we already have 0 in the list
    const tempStarter: number[] = [];
    for (let i = 1; i < questionList.length; i++) {
        tempStarter.push(i);
    }


    // Cycle thru the temp array until its empty
    // while (tempStarter.length > 0) {
    for (let j = 1; j < questionList.length; j++) {
        // console.log("Iteration: ", j)
        // console.log("Random question list: ", randomQuestionList)
        // console.log("tempStarter: ", tempStarter)
        // Generate a random number

        const thisIndex: number = Math.floor(
            Math.random() * tempStarter.length
        );
        // Pull out the value at the random index
        const thisValue: number = tempStarter[thisIndex];
        // Append the value to the masterlist
        randomQuestionList.push(thisValue);

        // Remove the value from the list
        tempStarter.splice(thisIndex, 1);
    }
    // }

}

// So, what we would like to happen is the following:
//   1. Start at question 0
//   2. Randomized the next question and keep track of the order
//   3. Keep track of the score
//   4. If a guess is wrong, reduce the score they COULD recieve: example...100%. 50%, 25%, 0%
//   5. Show the # out of # questions they need to answer
//   6. Allow them to return to a previous question and guess again
//   7. If a previous question was guessed, show the answer they chose

// To keep track of the order of questions visited, we need an Array to store the order
// Store a random order of questions with 0 always being the start
// We need to set the type of value contained with the temp array holder - use : type or Array<type>
// Retain the current index being viewed from the random list above



// This function needs to take the questions, break them down into their individual parts and then pass those parts
// down to the AnswerBlock and AnswerButton components for futher breakdown
// First, it will map out the objects for each index in the question array and pass them to questionDetails along with the index #
// We will need to set the index # of the list as the key so React will synch everything
// Then we pass the answers and the correct answer down to AnswerBlock
//   this will require an interface on AnswerBlock so that it knows the Types of variables it should be accepting


let currentPos = 0;



function App() {
    // Used to display the active question
    // It does this by initially setting the first question to 0 and hence the state to 0
    // It send this to the div container and changes the CSS from none to block if the index = the active index value
    const [activeIndex, setActiveIndex] = useState(0);

    // In order to update the score, we need to keep track of how many guesses are made per question
    // This will have to be reset to 0 for each new question
    const [guesses, setGuesses] = useState(0);
    const [totalScore, setTotalScore] = useState(0);

    // Set the story to visible if the correct answer is quessed
    const [showStory, setShowStory] = useState(0);

    const handleNext = (scoreUpdate: number) => {
        if (currentPos < questionList.length) {
            currentPos += 1;
            setActiveIndex(randomQuestionList[currentPos]);
            setShowStory(0);
            setGuesses(0);
            setTotalScore(totalScore + scoreUpdate);
        }
        setActiveIndex(randomQuestionList[currentPos]);
    }

    const handlePrev = () => {
        if (currentPos == 0) {
            setActiveIndex(0);
        } else {
            currentPos -= 1;
            setActiveIndex(randomQuestionList[currentPos]);
        }
        setGuesses(0);
    }
    // function updateAnswered() {
    //     let newAnswered = answered.push(currentPos)
    //     setAnswered(newAnswered)
    // }

    generateRandomQuestions()
    // console.log("random question list: ", randomQuestionList)
    // const [startGame, setStartGame] = useState(false);

    return (
        <>
            <div className="container">
                <Welcome/>
                <Instructions/>
                <StartGame
                    guesses={guesses}
                    setGuesses={setGuesses}
                    showStory={showStory}
                    setShowStory={setShowStory}
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                    currentQuestion={questionList[activeIndex]}
                />
                <ScoreBoardComponent
                    currentPos={currentPos}
                    length={questionList.length}
                    possibleScore={questionList[activeIndex].score[guesses]}
                    maxScore={questionList[activeIndex].score[0]}
                    totalScore={totalScore}

                />

            </div>
        </>
    );
}

export default App;
