import { ApolloProvider } from "@apollo/client";
import { Client } from "./lib/apollo";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { PageContext } from "./contexts/PageContext";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(0);

  return (
    <ApolloProvider client={Client}>
      <BrowserRouter>
        <PageContext.Provider value={{ page, setPage }}>
          <Router />
        </PageContext.Provider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
