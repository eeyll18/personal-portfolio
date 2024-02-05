import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Navbar from './components/Navbar'
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/about" element={<AboutMe />}></Route>

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
