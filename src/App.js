import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// COMPONENT IMPORTS
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";
import ProductListing from "./components/ProductListing";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route path="/product/:id" exact element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
