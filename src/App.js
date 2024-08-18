import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import StudentsView from './component/student/StudentView';
import NavBar from "./component/common/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddStudent from "./component/student/AddStudent";

function App() {
  return (
    <main className="container mt-5">
      <Router>
        <div className="App">
          <NavBar/>
            <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route exact path="/view-students" element={<StudentsView/>}></Route>
              <Route exact path="/add-students" element={<AddStudent/>}></Route>
            </Routes>
        </div>
      </Router>
    </main>
  );
}

export default App;
