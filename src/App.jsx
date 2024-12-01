import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./components/Layout";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";

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
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="catalog/:id" element={<DetailsPage />}>
              <Route index element={<Navigate to="features" replace />} />
              <Route path="features" element={<CamperFeatures />} />
              <Route path="reviews" element={<CamperReviews />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
