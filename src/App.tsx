import React from "react";
import { Route, Routes } from "react-router-dom";
import Compare from "./pages/Compare";
import Locations from "./pages/Locations";
import Impressum from "./pages/Impressum";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Compare />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
    </div>
  );
};

export default App;
