import React from "react";
import Home from "./Component/Pages/Home"
import Company from "./Component/Pages/Company"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import NotFound from "./Component/Pages/NotFound";

function App() {

  return (
    <div>
      <Router>
      <div className="App">
        <Navbar />
        <div className="content">
            <Routes>
              <Route exact path = "/" element={<Home/>}/>
              <Route exact path = "/company" element={<Company/>}/>
              <Route path = "*" element={<NotFound />} />
            </Routes>
        </div>
        <Footer />
      </div>
    </Router>
    </div>
  );
}

export default App;
