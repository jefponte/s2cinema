import { React, useState } from "react";
import FormLogin from "../components/FormLogin";
import { apiGetMovieList } from "../services/api";
import { Container } from "@mui/material";
import { useHistory } from "react-router-dom";

export default function PageLogin() {
  const [disabledLogin, setDisabledLogin] = useState(false);
  const [erros, setErros] = useState({ login: { valid: true, text: "" } });
  let history = useHistory();

  async function handleLogin(userAuth) {
    if (userAuth.login.length === undefined || userAuth.login.length < 3) {
      setErros({
        login: {
          valid: false,
          text: "Seu login deve ter no mínimo 3 caracteres!",
        },
      });
      return;
    }
    if (
      userAuth.password.length === undefined ||
      userAuth.password.length < 3
    ) {
      setErros({
        login: {
          valid: false,
          text: "Sua password deve ter no mínimo 3 caracteres!",
        },
      });
      return;
    }
    setDisabledLogin(true);
    try {
      let response = await apiGetMovieList.post("/api/login", userAuth);
      localStorage.setItem("token", response.data.access_token);
      history.push("/home");
      setErros({ login: { valid: true, text: "" } });
    } catch (error) {
      setErros({
        login: {
          valid: false,
          text: "Você errou a password, tente outra vez!",
        },
      });
      setDisabledLogin(false);
    }
  }

  return (
    <Container maxWidth="sm">
      <br />
      <br />
      <FormLogin
        disabledLogin={disabledLogin}
        onSubmitForm={handleLogin}
        erros={erros}
      />
      <br />
      <br />
      <br />
    </Container>
  );
}
