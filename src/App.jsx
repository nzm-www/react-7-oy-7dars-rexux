import React from "react";
import { Form, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Forma from "./pages/Forma";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/forma" element={<Forma></Forma>}></Route>
      </Routes>
    </div>
  );
}

export default App;
