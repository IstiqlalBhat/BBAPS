import "./App.css";
import './index.css'
import Header from './components/layout/Header';
import Main from './components/pages/Main';
import Project from "./components/pages/Project";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import { useEffect } from "react";
import Web3 from "web3";
import TrustFacto from "./components/pages/TrustFactory";
import GetSortedMatch from "./components/pages/GetSortedMatch";

function App() {
  return (
    <div className="App">
      <center>
        <BrowserRouter>
          <Header />
            <Routes>
              <Route path="/" Component={Main} />
              <Route path="/project" Component={Project} />
              <Route path="/trustfactor" Component={TrustFacto} />
              <Route path="/getSortedMatch" Component={GetSortedMatch} />
            </Routes>
          <Footer />
        </BrowserRouter>
      </center>
    </div>
  );
}

export default App;
