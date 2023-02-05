import "./App.css";
import Home from "./containers/home/home";
import About from "./containers/about/about";
import Missions from "./containers/missions/Missions";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/mission" element={<Missions />}></Route>
          <Route path="/events" element={<Home />}></Route>
          <Route path="/magazine" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
