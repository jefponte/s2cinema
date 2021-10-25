import React from "react";
import { IntlProvider, FormattedNumber, ForrmattedNumber } from "react-intl";



function App() {

  return (
    <>
      <IntlProvider locale={'pt'}>
        <div>
          <FormattedNumber value={12128912891.22}/>
        </div>
      </IntlProvider>
    </>
  );
}

export default App;
