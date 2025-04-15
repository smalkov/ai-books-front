import React from "react";
import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Header/Header.tsx";
import { Footer } from "./components/Footer/Footer.tsx";
import { Books } from "./components/Books/Books.tsx";

import "./App.css";

function App() {
  return (
    <div className="appWrapper">
      <Header />

      <div className="App">
        <Routes>
          <Route path="/books" element={<Books />} />
          <Route path="/" element={<div>ups</div>} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
