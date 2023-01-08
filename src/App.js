import "./css/style.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Skills from "./pages/Skills";
import ProjectPage from "./pages/ProjectPage";

const App = () => {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<ProjectPage />}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/skills" element={<Skills />}/>
      </Routes>
      <Footer />
      </Router>
    </div>
  );
};

export default App;
