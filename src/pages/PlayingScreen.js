import React, { useEffect, useState } from "react";
import getProblemSet from "../components/ProblemGenerator";

const PlayingScreen = () => {
  const [answered, setAnswered] = useState(0);
  const [time, setTime] = useState(120); // Timer state
  const [problems, setProblems] = useState([]); // Use state to store problems
  const [problem, setProblem] = useState(problems[answered]); // Use state to store current problem
  const [userAnswer, setUserAnswer] = useState(""); // State to store user's answer

  useEffect(() => {
    const gameId = 123; // Example gameId, replace with actual value as needed
    const generatedProblems = getProblemSet(gameId, 100); // Call getProblemSet with gameId
    setProblems(generatedProblems); // Update state with generated problems
  }, []); // Empty dependency array to run once on component mount

  useEffect(() => {
    setProblem(problems[answered]);
    setUserAnswer("");
  }, [answered, problems]); // Dependency array to run when answered or problems change


  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(interval);
          return 0
        }
        return prevTime - 1;
      })
    }, 1000);
    return () => clearInterval(interval);

  }, [])



  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
    if (e.target.value === problems[answered].answer.toString()) {
      setAnswered((prevAnswered) => prevAnswered + 1);
      // Handle correct answer
    }
  };

  return (
    <div>
      <div className="flex justify-between px-7 py-5">
        <div className="text-lg font-medium">Seconds Left: {time}</div>
        <div className="text-lg font-medium">Score: {answered}</div>
      </div>
      <div className="mt-60 flex items-center justify-center bg-customGray py-4">
        {time !== 0 ? (
          problem ? (
            <div className="flex content-center justify-center text-4xl">
              {problem.question} =
              <textarea
                id="userAnswer"
                name="userAnswer"
                value={userAnswer}
                onChange={handleInputChange}
                className="ml-3 h-11 w-44 resize-none overflow-y-hidden border border-black text-4xl focus:outline-none"
              ></textarea>
            </div>
          ) : (
            <div>Loading...</div>
          )
        ) : (
          <div className="text-4xl font-bold">Game Over</div>
        )}
      </div>
    </div>
  );
};

export default PlayingScreen;
