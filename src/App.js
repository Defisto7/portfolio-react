import "./css/style.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Skills from "./pages/Skills";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Skills />
      {/* <Contacts/> */}
      <Footer />
    </div>
  );
};

export default App;
