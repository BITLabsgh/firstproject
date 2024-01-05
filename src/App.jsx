import Navbar from "./Navbar";
import Homepage from "./Home";
import Foot from "./foot";
import Courses from "./Courses"
import About from "./About";
import Apply from "./Apply";
import Financial from "./financialaid";
import Gallery from "./gallery";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <>
          <Routes>
          <Route exact  path="/" element={<Homepage />}></Route>
            <Route exact  path="/Home" element={<Homepage />}></Route>
            <Route exact path="/Courses" element={<Courses />}></Route>
            <Route exact path="/About" element={<About />}></Route>
            <Route exact path="/Apply" element={<Apply />}></Route>
            <Route exact path="/Financial" element={<Financial />}></Route>
            <Route exact path="/Gallery" element={<Gallery />}></Route>
          </Routes>
        </>
        <Foot />
      </div>
    </Router>
  );
}

export default App;
