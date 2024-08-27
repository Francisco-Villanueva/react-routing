import { message } from "antd";
import React, { useReducer, useState } from "react";
import { verifyCredentials } from "../utils/login-form";
import "../styles/login.css";
import { useUser } from "../hooks";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "setField":
      return { ...state, [action.field]: action.value };
    case "setError":
      return { ...state, error: action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export function Login() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useUser();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (state.email === "" || state.password === "") {
      dispatch({
        type: "setError",
        value: "Todos los campos son obligatorios!!!!",
      });
    } else {
      // Procesar login - enviar la data al backend a traves de HTTP PROTOCOL
      setIsLoading(true);
      try {
        await verifyCredentials(state.email, state.password);

        message.success(`Bienvenido ${state.email}`);
        setUser(state.email);
        navigate("/");
        //  se va a cambiar de ruta...
      } catch (error) {
        console.log(error);
        message.error("Credenciales invalidas!");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={state.email}
          onChange={(e) =>
            dispatch({
              type: "setField",
              field: "email",
              value: e.target.value,
            })
          }
          placeholder="Email"
        />
        <input
          type="password"
          value={state.password}
          onChange={(e) =>
            dispatch({
              type: "setField",
              field: "password",
              value: e.target.value,
            })
          }
          placeholder="Password"
        />
        {state.error && <p className="error-message">{state.error}</p>}
        <button type="submit" disabled={isLoading}>
          {isLoading ? <i>Loading...</i> : <i>Login</i>}
        </button>
      </form>
    </div>
  );
}
