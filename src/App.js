import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login"; // Import Login component
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
