import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import "./App.scss";


function App() {



  
  return (
    <Router>
      <div className="container">
        <nav>
          <Link to="/register">Գրանցում</Link>
          <Link to="/login">Մուտք</Link>
        </nav>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
