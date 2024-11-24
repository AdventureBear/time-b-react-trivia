
const ScoreBoardComponent = ({currentPos, length, possibleScore, maxScore, totalScore}) => {
    return (<>
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
        </>

    )
}
export default ScoreBoardComponent
