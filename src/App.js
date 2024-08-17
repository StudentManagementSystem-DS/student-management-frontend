import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import StudentsView from './component/student/StudentView';
import NavBar from "./component/common/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/view-students" element={<StudentsView/>}></Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
