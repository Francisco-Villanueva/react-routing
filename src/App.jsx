import { Routes, Route, useNavigate } from "react-router-dom";
import { Home, Login, NotFound } from "./pages";
import "./App.css";
import { useUser } from "./hooks";
import { useEffect } from "react";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
