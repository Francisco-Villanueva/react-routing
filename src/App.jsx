import { Routes, Route } from "react-router-dom";
import { Home, Login, NotFound, Redirect } from "./pages";
import "./App.css";
import { useUser } from "./hooks";
import { useEffect } from "react";

function App() {
  // definido un estado
  return (
    <main>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="/" element={<Redirect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
