import { HashRouter as Router, Route, Routes } from "react-router-dom";
import StartingScreen from "./pages/StartingScreen";
import PlayingScreen from "./pages/PlayingScreen";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<StartingScreen />} />
          <Route path="/playing/:id" element={<PlayingScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;