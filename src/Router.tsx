import { Layout } from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import { IndexPage } from "./pages/Index";

export function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <IndexPage />
          </Layout>
        }
      />
    </Routes>
  );
}
