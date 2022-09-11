import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// COMPONENTS IMPORTS
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="mt-5">
          <Routes>
            <Route path="/" exact element={<ProductListing />} />
            <Route path="/products/:productId" exact element={<ProductDetail />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
