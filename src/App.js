import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Listing } from "components/Listings";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          link
        </a>
      </header>
      <Listing />
    </div>
  );
}

export default App;
