import { message } from "antd";
import axios from "axios";
import React, { useReducer, useState } from "react";

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
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

export function RegisterForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [disableButton, setDisableButton] = useState(false); // este estado lo usamos para ver si estamos ejecutando la SOLICITUD HTTP.

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password, confirmPassword } = state;

    if (!email || !password || !confirmPassword) {
      dispatch({
        type: "setError",
        value: "Todos los campos son obligatorios",
      });
    } else if (password !== confirmPassword) {
      dispatch({ type: "setError", value: "Las contraseñas no coinciden" });
    } else {
      // Procesar registro
      setDisableButton(true);
      try {
        await axios.post("http://localhost:3001/api/auth/register", {
          email,
          password,
        });

        message.success("¡Registro exitoso!");

        dispatch({ type: "reset" }); // Resetear el formulario
      } catch (error) {
        console.error(error.response.data);
        message.error("Error en las credenciales!");
      } finally {
        // este bloque se ejecuta siempre!!
        setDisableButton(false);
      }
    }
  };

  return (
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
      <input
        type="password"
        value={state.confirmPassword}
        onChange={(e) =>
          dispatch({
            type: "setField",
            field: "confirmPassword",
            value: e.target.value,
          })
        }
        placeholder="Confirm Password"
      />
      {state.error && <p>{state.error}</p>}
      <button type="submit" disabled={disableButton}>
        Register
      </button>
    </form>
  );
}
