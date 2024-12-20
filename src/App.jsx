import { useEffect, useState } from "react";
import "./App.css";

import { Sidebar } from "./components";
import { Home, Chats, Groups, Setting, Sales } from "./Pages";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const path = location.pathname;
    if (path === "/home/summary" || path === "/home/sales") setCurrentIndex(0);
    else if (path === "/chats" || path==="/home/chats") setCurrentIndex(1);
    else if (path === "/groups") setCurrentIndex(2);
    else if (path === "/setting") setCurrentIndex(3);
    else setCurrentIndex(-1)
  }, [location]);

  return (
    <div className="flex">
      <Sidebar currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      <Routes>
        <Route path="/" element={<Navigate to="/home/summary" />} />
        <Route path="/home/summary" element={<Home />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="home/chats" element={<Chats />} />
        <Route path="home/sales" element={<Sales />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </div>
  );
}

export default App;
