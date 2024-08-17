import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import StudentsView from './component/student/StudentView';

function App() {
  return (
    <div className="App">
      <StudentsView/>
    </div>
  );
}

export default App;
