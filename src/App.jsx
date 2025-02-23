import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Read from "./CRUD/Read";
import Create from "./CRUD/Create";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Read />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
