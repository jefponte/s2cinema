import React from "react";
import Footer from "./components/Footer";
import Routes from "./routes/Routes";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  IntlProvider
} from "react-intl";
import messages from "./language/messages";

function App() {

  const language = navigator.language.split("-")[0];
  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      primary: {
        main: "#2b2b2b",
        darker: "#ffc107",
      },
      neutral: {
        main: "#ffc107",
        contrastText: "#fff",
      },
      secondary: {
        main: "#ffc107",
        contrastText: "#fff",
      }
    },
  });

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
        <Footer />
      </ThemeProvider>
    </IntlProvider>
  );
}

export default App;
