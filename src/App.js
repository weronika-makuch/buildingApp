import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { buildings as initialBuildings } from "./data/buildingData";

import Navbar from "./components/Navbar";
import BuildingPages from "./pages/BuildingPages";
import AddBuilding from "./pages/AddBuilding";
import ErrorPage from "./components/ErrorPage";

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
            <BuildingPages
              buildings={buildings}
              onVote={handleVote}
              onStar={handleStar}
              type="regular"
            />
          }
        />

        <Route
          path="/hot"
          element={
            <BuildingPages
              buildings={buildings}
              onVote={handleVote}
              onStar={handleStar}
              type="hot"
            />
          }
        />

        <Route path="/add" element={<AddBuilding onAdd={handleAdd} />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;