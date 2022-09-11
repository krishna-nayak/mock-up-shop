import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// COMPONENT IMPORTS
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
// import ProductDetail from "./components/ProductDetail";
const ProductDetail = lazy(() => import("./components/ProductDetail"));

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="mt-5">
          <Routes>
            <Route path="/" exact element={<ProductListing />} />
            <Route
              path="/products/:productId"
              exact
              element={
                <Suspense fallback={<h1>Loading profile...</h1>}>
                  <ProductDetail />
                </Suspense>
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
