import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export function Redirect() {
  const nav = useNavigate();

  useEffect(() => {
    nav("/home");
  }, []);

  return <div>Redirect</div>;
}
