import "./App.css";
import { ApolloProvider } from "@apollo/client";
import { Client } from "./libs/apollo";
import { IndexPage } from "./pages/Index";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <ApolloProvider client={Client}>
      <Layout>
        <main className="w-full h-screen bg-gray-100 flex">
          <IndexPage />
        </main>
      </Layout>
    </ApolloProvider>
  );
}

export default App;
