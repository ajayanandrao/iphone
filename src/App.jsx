
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import "./App.scss";
import Drill from "./Drill";
import ScrollToTop from "./ScrollTop";

function App() {

  return (
    <>

      <Router basename="/iphone">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Drill />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
