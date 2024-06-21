import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartingScreen from "./components/StartingScreen";
import PlayingScreen from "./components/PlayingScreen";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<StartingScreen />}/>
          <Route path="/playing/:id" element={<PlayingScreen/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
