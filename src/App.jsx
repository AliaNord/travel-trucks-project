import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./components/Layout";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import CamperFeatures from "./components/common/CamperDetails/CamperFeatures/CamperFeatures";
import CamperReviews from "./components/common/CamperDetails/CamperReviews/CamperReviews";

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
