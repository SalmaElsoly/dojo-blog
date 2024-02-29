import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Create from "./pages/Create";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  //const title = "Welcome to the new blog";
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
