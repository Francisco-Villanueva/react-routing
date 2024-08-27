import { message } from "antd";
import axios from "axios";
import React, { useReducer, useState } from "react";

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

export function LoginForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(false);
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
        await axios.post("http://localhost:3001/api/auth/login", state);

        message.info("wARNING");
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
    <div>
      <form onSubmit={handleSubmit}>
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
          placeholder="email"
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
          {isLoading ? <i>Loading...</i> : <i> Login</i>}
        </button>
      </form>
    </div>
  );
}
