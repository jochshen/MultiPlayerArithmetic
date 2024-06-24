import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const StartingScreen = () => {
  const navigate = useNavigate();
  const [duration, setDuration] = useState(15);

  const handleClickStart = () => {
    navigate(`playing/123?duration=${duration}`);
  };

  const handleTimeChange = (e) => {
    setDuration(e.target.value);
  }
  return (
    <div className="flex flex-col">
      <div className="h-auto w-auto max-w-md self-center bg-customGray p-7">
        <h2 className="mb-7 text-3xl font-bold">Arithmetic Game</h2>
        <p className="mb-7 text-sm leading-4">
          The Arithmetic Game is a fast-paced speed drill where you are given
          two minutes to solve as many arithmetic problems as you can.
        </p>
        <p className="text-sm leading-4">
          If you have any questions, contact{" "}
          <a href="mailto:joshuachen0724@gmail.com">joshuachen0724@gmail.com</a>
          
        </p>
        <div className="mt-10 flex justify-between items-center">
          <span className="flex ">
            <p>Duration:</p> 
            <select className="ml-2 w-24" onChange={handleTimeChange}> 
              <option value="15"> 15 sec</option>
              <option value="30"> 30 sec</option>
              <option value="60"> 60 sec </option>
              <option value="120"> 120 sec </option>
            </select>
          </span>

          <div className="items-end">
          <button
            onClick={handleClickStart}
            className="self-end rounded border border-black bg-slate-100 px-2 py-[0.5] text-sm font-normal hover:bg-slate-300"
          >
            Start
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartingScreen;
