import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./components/Layout";
import { lazy } from "react";

const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const DetailsPage = lazy(() => import("./pages/DetailsPage/DetailsPage"));
const CamperFeatures = lazy(() =>
  import("./components/common/CamperDetails/CamperFeatures/CamperFeatures")
);
const CamperReviews = lazy(() =>
  import("./components/common/CamperDetails/CamperReviews/CamperReviews")
);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:id" element={<DetailsPage />}>
            <Route path="features" element={<CamperFeatures />} />
            <Route path="reviews" element={<CamperReviews />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
