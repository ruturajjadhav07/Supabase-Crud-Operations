import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Read from "./CRUD/Read";
import Create from "./CRUD/Create";
import Edit from "./CRUD/Edit";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Read />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
