import { ApolloProvider } from "@apollo/client";
import { Client } from "./lib/apollo";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import GlobalContext from "./lib/GlobalContextProvider";
import { useState } from "react";

function App() {
  const [state, setState] = useState({
    searchStringState: "",
    update
  });

  function update(data: any) {
    setState(Object.assign({}, state, data));
  }

  return (
    <GlobalContext.Provider value={state}>
      <ApolloProvider client={Client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default App;
