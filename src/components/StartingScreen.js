import React from 'react'
import { useNavigate } from 'react-router-dom';

const StartingScreen = () => {

    const navigate = useNavigate()


    const handleClickStart = () => {
        navigate('playing/123')
    }
    return (
        <div className="bg-customGray ml-52 mr-52 flex flex-col justify-start p-7">
          <h2 className="mb-7 text-3xl font-bold">Arithmetic Game</h2>
          <p className="mb-7 text-sm leading-4">
            The Arithmetic Game is a fast-paced speed drill where you are given two
            minutes to solve as many arithmetic problems as you can.
          </p>
          <p className="leading-4 text-sm">
            If you have any questions,  contact <a href="mailto:joshuachen0724@gmail.com">joshuachen0724@gmail.com</a>.
          </p>
    
          <button onClick={handleClickStart} className="self-end rounded bg-slate-100 text-sm px-2 font-normal border border-black hover:bg-slate-300 mt-10 mb-[-1rem]">Start</button>
        </div>
      );
}

export default StartingScreen
