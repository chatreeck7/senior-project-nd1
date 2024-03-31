import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeScreen, QuizScreen, ResultScreen } from "./screens";

function App() {
  return (
    <Router basename={`/senior-project-nd1`}>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/result" element={<ResultScreen />} />
        <Route path="/quiz" element={<QuizScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
