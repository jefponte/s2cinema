import React, { useState } from "react";
import { Box } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TextField from  "@mui/material/TextField";
import Button from  "@mui/material/Button";
import { Alert } from "@mui/material";

function FormLogin(props) {
  const { erros } = props;
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState({ valid: true, text: "" });
  const [errorPassword, setErrorPassowrd] = useState({ valid: true, text: "" });

  function validateLogin(event) {
    if (event.target.value.length > 1) {
      setErrorLogin({ valid: true, text: "" });
    } else {
      setErrorLogin({ valid: false, text: "Digite no mínimo 1 caractere" });
    }
  }

  function validatePassword(event) {
    if (event.target.value.length > 3) {
      setErrorPassowrd({ valid: true, text: "" });
    } else {
      setErrorPassowrd({ valid: false, text: "Digite no mínimo 3 caracteres" });
    }
  }
  function canISubmit() {
    if (!errorLogin.valid) {
      return false;
    }
    return true;
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(canISubmit()){
          props.onSubmitForm({ login, password });
        }
      }}
    >
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardHeader title="1. Autenticação" />
          <CardContent>
            {erros.login.valid ? (
              ""
            ) : (
              <Alert severity="error">{erros.login.text}</Alert>
            )}
            <TextField
              required={true}
              disabled={props.disabledLogin}
              value={login}
              onChange={(event) => {
                setLogin(event.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
              error={!errorLogin.valid}
              onBlur={validateLogin}
              helperText={errorLogin.text}
              id="login"
              label="Login"
              variant="outlined"
              margin="normal"
              fullWidth
            />
            <TextField
              required={true}
              disabled={props.disabledLogin}
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
              error={!errorPassword.valid}
              onBlur={validatePassword}
              helperText={errorPassword.text}
              id="password"
              label="Password"
              variant="outlined"
              margin="normal"
              type="password"
              fullWidth
              autoComplete="off"
            />

            <CardActions>
              <Button
                disabled={props.disabledLogin}
                type="submit"
                variant="contained"
                color="primary"
              >
                Logar
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Box>
    </form>
  );
}
export default FormLogin;
