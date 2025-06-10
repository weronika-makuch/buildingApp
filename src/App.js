import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { buildings as initialBuildings } from "./data/buildingData";

import Navbar from "./components/Navbar";
import Hot from "./pages/Hot";
import Regular from "./pages/Regular";
import AddBuilding from "./pages/AddBuilding";

function App() {
  const [buildings, setBuildings] = useState(initialBuildings);

  const handleVote = (id, type) => {
    setBuildings(prev =>
      prev.map(b =>
        b.id === id
          ? {
            ...b,
            upvotes: type === "up" ? b.upvotes + 1 : b.upvotes,
            downvotes: type === "down" ? b.downvotes + 1 : b.downvotes,
          }
          : b
      )
    );
  };

  const handleStar = (id) => {
    setBuildings(prev =>
      prev.map(b => (b.id === id ? { ...b, starred: !b.starred } : b))
    );
  };

  const handleAdd = (newBuilding) => {
    setBuildings(prev => [...prev, newBuilding]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/regular" replace />} />

        <Route
          path="/regular"
          element={
            <Regular buildings={buildings} onVote={handleVote} onStar={handleStar}
            />
          }
        />

        <Route
          path="/hot"
          element={
            <Hot buildings={buildings} onVote={handleVote} onStar={handleStar}
            />
          }
        />

        <Route path="/add" element={<AddBuilding onAdd={handleAdd} />} />

        <Route path="*"
          element={
            <Regular buildings={buildings} onVote={handleVote} onStar={handleStar} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
