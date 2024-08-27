import { Routes, Route, useNavigate } from "react-router-dom";
import { Home, Login } from "./pages";
import "./App.css";
import { useUser } from "./hooks";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  return (
    <main>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
