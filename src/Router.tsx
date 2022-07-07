import { Layout } from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import { IndexPage } from "./pages/Index";
import { PostPage } from "./pages/PostPage";
import { NotFound } from "./pages/NotFound";
import { SearchPage } from "./pages/SearchPage";
import { Pagination } from "./components/Pagination/Pagination";

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
      <Route
        path="/search/*"
        element={
          <Layout>
            <SearchPage />
          </Layout>
        }
      />
      <Route path="/post/:slug" element={<PostPage />} />

      <Route
        path="/debug"
        element={
          <div className="flex w-full h-screen items-center justify-center">
            <Pagination />
          </div>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
