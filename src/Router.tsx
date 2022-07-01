import { Layout } from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import { IndexPage } from "./pages/Index";
import { PostPage } from "./pages/PostPage";

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
      <Route path="/post/:slug" element={<PostPage />} />
    </Routes>
  );
}
