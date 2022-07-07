import { ApolloProvider } from "@apollo/client";
import { Client } from "./lib/apollo";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GlobalContext, IGlobalContext } from "./lib/GlobalContextProvider";
import { useState } from "react";

function App() {
  const [state, setState] = useState<IGlobalContext>();
  const updateContext = (data: any) => {
    setState(Object.assign({}, data, state));
  };

  const Context = {
    state,
    updateContext
  };

  return (
    <GlobalContext.Provider value={Context}>
      <ApolloProvider client={Client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default App;
