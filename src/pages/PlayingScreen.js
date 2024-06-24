

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import getProblemSet from "../components/ProblemGenerator";

const PlayingScreen = () => {
  const query = useQuery();
  const duration = query.get("duration");
  const durationInSeconds = Number(duration);

  const gameId = 123;
  const [answered, setAnswered] = useState(0); // keeps track of the number of problems answered
  const [time, setTime] = useState(durationInSeconds); // Timer state
  const [problems, setProblems] = useState([]); // Use state to store problems
  const [problem, setProblem] = useState(null); // Use state to store current problem
  const [userAnswer, setUserAnswer] = useState(""); // State to store user's answer

  // useEffect to generate problems on component mount and reset game
  useEffect(() => {
    const newProblems = getProblemSet(gameId, 100);
    setProblems(newProblems); // Update state with generated problems
    setProblem(newProblems[0]); // Set the first problem
  }, [gameId]); // Dependency on gameId to regenerate problems if gameId changes

  // useEffect for updating problem and userAnswer based on answered
  useEffect(() => {
    setProblem(problems[answered]);
    setUserAnswer("");
  }, [answered, problems]);

  // Timer logic remains separate
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  const resetGame = () => {
    setAnswered(0);
    setTime(durationInSeconds);
    // Directly setting problems in useEffect eliminates the need to call it here
    const newProblems = getProblemSet(gameId, 100);
    setProblems(newProblems);
    setProblem(newProblems[0]);
  };

  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
    if (e.target.value === problems[answered]?.answer.toString()) {
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
          <div className=" flex flex-col items-center">
            <p className="text-3xl font-bold">Game Over</p>
            <p className="text-3xl ">Score: {answered} </p>
            <button onClick={resetGame}>Play Again </button>
          </div>
        )}
      </div>
    </div>
  );
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default PlayingScreen;
