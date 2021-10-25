import React from "react";
import Footer from "./components/Footer";
import Routes from "./routes/Routes";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { IntlProvider, FormattedNumber, ForrmattedNumber } from "react-intl";



function App() {
  
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
    },
  });

  return (
    <IntlProvider locale={"pt"}>
      
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
        <Footer />
      </ThemeProvider>
    </IntlProvider>
  );
}

export default App;
